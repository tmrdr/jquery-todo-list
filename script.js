$(document).ready(function(){
console.log("DOM ready");

$("#clicker").click(function(){
  console.log("clicked");
    var toAdd = $("input[name=item]").val();

  $("#list").append("<li>" + toAdd + " " + "<button class='deleteButton'>x</button></li>");
  $("li").addClass("do");
})




$("ul[id=list]").click(function(){
    console.log("i have been clicked~!");
    $(this).css("color", "red");
    // $(this).remove());
  });



  // function removeItem() {
  //   $(this).parent("li").remove()
  //
  // }
  //
  // $("#container").on("click", ".deleteButton", function(){
  //   removeItem($(this));
  // })
  //

  // <button class='deleteButton'>x</button></li>"






//
// $(".kill").click(function(){
//   console.log("delted");
//   $("#list li").eq(0).remove();
// })

});
