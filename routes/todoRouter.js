const router = require("express").Router();
const todoController = require("../controllers/todoController");


router.get("/todo", todoController.getTodo);
router.post("/todo", todoController.postTodo);
router.delete("/todo/:task", todoController.deleteTodo);

module.exports = router;