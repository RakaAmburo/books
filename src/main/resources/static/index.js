$(document).ready(function () {

var settings2 = {
      url: "http://localhost:8080/ideas/3c6ea2bd-09f7-48b5-931d-ee6cd7b93c10",
      method: "GET",
      crossDomain: true,
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function (response) {
      $('#title').val(response.title);
      $('#description').val(response.description);
      editor1.setHTMLCode(response.content);

      },
      error: function (xhr, status) {
        alert("error");
      }
    };


    $.ajax(settings2);


  $("button").click(function () {

    var formData = { title: $('#title').val(), id: "3c6ea2bd-09f7-48b5-931d-ee6cd7b93c10", description: $('#description').val(), content: editor1.getHTMLCode(), tags: ["oneTag2"] };
    var settings = {
      url: "http://localhost:8080/ideas",
      method: "POST",
      crossDomain: true,
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      data: JSON.stringify(formData),
      success: function (response) {
        console.log(response.title);
      },
      error: function (xhr, status) {
        alert("error");
      }
    };


    $.ajax(settings);

  });


});