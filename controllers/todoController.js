const TodoModel = require("../model/todoModel");

const todoController = {
    getTodo: async (req, res) => {
        TodoModel.find({}, function(err,data){
            if(err) throw err;
            console.log('save request incoming!');
            res.render("todos", {work:data});
        });
    },

    postTodo: async(req, res) => {
          TodoModel(req.body).save(function(err,data){
          if (err) throw err;
           console.log('post request incoming!');
           console.log(Object.values(data));
           res.json(data);
        });
    },

    deleteTodo: async(req, res) => {
        TodoModel.find({task:req.params.task.replace(/-/g, " ")}).remove(function(err,data){
            if(err) throw err;
            console.log("delete request incoming!");
            console.log(Object.values(data));
            res.json(data);
            });
    }
};

module.exports = todoController;