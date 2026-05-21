//instead of import we use require in node
const express = require("express");
const cors = require("cors");

const app = express(); // execute express and save it in app variable

//assign port for communication
const PORT = 5000;

//use cors (middleware)
app.use(cors());

//req and resp

app.get("/api/data", (req, res) => {
  const myProject = [
    { id: 1, text: "task 1", completed: true },
    { id: 2, text: "task 1", completed: true },
    { id: 3, text: "task 1", completed: true },
  ];

  //response
  res.json(myProject);
});

//listens to the port for requests
app.listen(PORT, () => {
  console.log(`server is active on the port ${PORT}`);
});
