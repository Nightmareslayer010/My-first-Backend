//instead of import we use require in node
const express = require("express");
const app = express(); // execute express and save it in app variable

//assign port for communication
const PORT = 5000;

//req and resp

app.get("/api/data", (req, res) => {
  const myProject = [
    { id: 1, name: "todolist", status: "completed" },
    { id: 2, name: "weatherApp", status: "completed" },
    { id: 3, name: "backendproject", status: "active" },
  ];

  //response
  res.json(myProject);
});

//listens to the port for requests
app.listen(PORT, () => {
  console.log(`server is active on the port ${PORT}`);
});
