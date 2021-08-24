$(document).ready(function(){

$(".form").on("submit", function(){

    let item = $("form input");
    let todos = {task:item.val()};

   $.ajax({
       type: "POST",
       url: "/todo",
       data: todos,
       success: function(){
           location.reload();
       }
   });
   return false;

});

   $('li').on("click", function(){
    let task = $(this).text().replace(/ /g,"-");
    
    $.ajax({
        type:"DELETE",
        url: "/todo/"+ task,
        success: function(data){
            location.reload();
        }

    });
  });
});