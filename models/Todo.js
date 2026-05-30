const mongoose = require("mongoose");

//create a schema

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, "you must provide a description"],
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//the model

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
