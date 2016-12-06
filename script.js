$(document).ready(function(){
console.log("DOM ready");

$("#clicker").click(function(){
  console.log("clicked");
    var toAdd = $("input[name=item]").val();

  $("#list").append("<li>" + toAdd + "</li>");
  $("li").addClass("do");
})




$("ul[id=list]").click(function(){
    console.log("i have been clicked~!");
    $(this).css("color", "red");
    // $(this).remove());
  });






//
// $(".kill").click(function(){
//   console.log("delted");
//   $("#list li").eq(0).remove();
// })

});
