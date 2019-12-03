$(document).ready(function() {
   passWord();
     //this prevents the program from moving on until the correct
  //password has been entered
   // I dont get it to work otherwise, i'm sorry artmem :(
  $("#list-items").html(localStorage.getItem("listItems"));

  $(".add-items").submit(function(event) {
    event.preventDefault();

    var item = $("#todo-list-item").val();
var salasana;
salasana = coding;
    if (item) {
      $("#list-items").append(
        "<li><input class='checkbox' type='checkbox' />" +
          item +
          " <a class='remove'>Delete</a><hr></li>"
      );

      localStorage.setItem("listItems", $("#list-items").html());
      $("#todo-list-item").val("");
    } else alert("Write something dummy");
  });

  $(document).on("change", ".checkbox", function() {
    if ($(this).attr("checked")) {
      $(this).removeAttr("checked");
    } else {
      $(this).attr("checked", "checked");
    }

    $(this)
      .parent()
      .toggleClass("completed");

    localStorage.setItem("listItem", $("#list-items").html());
  });

  $(document).on("click", ".remove", function() {
    $(this)
      .parent()
      .remove();
    localStorage.setItem("listItem", $("#list-items").html());
  });
});
