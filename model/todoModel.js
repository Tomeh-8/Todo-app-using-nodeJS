const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    task: String
});

const Todo = mongoose.model("todos",todoSchema);

module.exports = Todo;