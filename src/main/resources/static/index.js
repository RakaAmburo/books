$(document).ready(function(){
  $("button").click(function(){

  var settings = {
    "url": "http://localhost:8080/ideas",
    "method": "POST",
     "crossDomain": true,
    "contentType": "application/json; charset=utf-8",
    "timeout": 0,
   "dataType": "json",
    "headers": {
      "Content-Type": "application/json"
    },
    "data": JSON.stringify({
      "title": "titl2e",
      "id": "3c6ea2bd-09f7-48b5-931d-ee6cd7b93c10",
      "description": "description2",
      "content": "content2",
      "tags": [
        "oneTag2"
      ]
    }),
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });

/*var formData = {title:"titl2e",id:"3c6ea2bd-09f7-48b5-931d-ee6cd7b93c11"};
    $.ajax({
                url: "http://localhost:8080/ideas",
                type: "POST",
                crossDomain: true,
                data: formData,
                dataType: "json",
                contentType:"application/json; charset=utf-8",
                success: function (response) {
                    var resp = JSON.parse(response)
                    alert(resp.status);
                },
                error: function (xhr, status) {
                    alert("error");
                }
            });*/

  });

});