// initialize express and cors
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Todo = require("./models/Todo");

// create an instance of express and setup the port
const app = express();
const PORT = 5000;

//middleware for decoding string objects into objects and cors security bypass
app.use(cors());
app.use(express.json());

//Setting up database
const MONGO_URI =
  "mongodb+srv://girirajvyas010_db_user:x2yPHqEf7OYper5m@my-first-database.glbrb4c.mongodb.net/todo_db?appName=my-first-database";

const startDbServer = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("connected to mongoose successfully");
    //only start listening when db is connected
    app.listen(PORT, () => {
      console.log(`server running on port : ${PORT}`);
    });
  } catch (error) {
    console.error("error fetching from backend", error);
    process.exit(1);
  }
};
//start the server
startDbServer();

//handling get request to our DB
app.get("/api/data", async (req, res) => {
  try {
    const allTodos = await Todo.find();
    //sending response for get request

    res.status(200).json(allTodos);
  } catch (error) {
    console.error("cant get todos");
    res
      .status(400)
      .json({ message: "error getting todos", error: error.message });
  }
});

//handling post request to our DB
app.post("/api/data", async (req, res) => {
  try {
    // tell the model to create our new object from req
    const newTodo = await Todo.create({
      text: req.body.text,
    });
    // send the newly created object as a response
    res.status(200).json(newTodo);
  } catch (error) {
    console.error("error creating todo", error);
    res
      .status(400)
      .json({ message: "failed to create todo", error: error.message });
  }
});

//handling delete req to backend
app.delete("/api/data/:id", (req, res) => {
  const deleteID = Number(req.params.id);

  //now delete from our backend array
  testTodos = testTodos.filter((d) => {
    return d.id !== deleteID;
  });
  // send the response
  res.status(200).json(deleteID);
});

//update data in the backend
app.put("/api/data/:id", (req, res) => {
  updatedID = Number(req.params.id);
  updatedText = req.body.text;
  updatedCompleted = req.body.completed;
  let updatedObject;

  testTodos = testTodos.map((t) => {
    if (t.id === updatedID) {
      updatedObject = {
        ...t,
        completed:
          updatedCompleted !== undefined ? updatedCompleted : t.completed,
        text: updatedText !== undefined ? updatedText : t.text,
      };
      return updatedObject;
    }
    return t;
  });
  //sending response
  res
    .status(200)
    .json({ message: "here is the updated object", updatedObject });
});
