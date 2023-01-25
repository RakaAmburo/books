$(document).ready(function () {
  $("button").click(function () {

    var formData = { title: "titl2e", id: "3c6ea2bd-09f7-48b5-931d-ee6cd7b93c10", description: "description2", content: "content2", tags: ["oneTag2"] };
    var settings = {
      url: "http://localhost:8080/ideas",
      method: "POST",
      crossDomain: true,
      contentType: "application/json; charset=utf-8",
      timeout: 0,
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