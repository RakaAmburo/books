$(document).ready(function () {

  const columnDefs = [
    { field: "title" },
    { field: "description" }
  ];



  // let the grid know which columns and what data to use
  const gridOptions = {
    columnDefs: columnDefs,

    // default col def properties get applied to all columns
    defaultColDef: { sortable: true, filter: true },

    rowSelection: 'multiple', // allow rows to be selected
    animateRows: true, // have rows animate to new positions when sorted

    // example event handler
    onCellClicked: params => {
      console.log('cell was clicked', params);
      reqSetting.url = params.data._links.self.href;
      $.ajax(reqSetting);
    }
  };

  // setup the grid after the page has finished loading
  const gridDiv = document.querySelector('#myGrid');
  new agGrid.Grid(gridDiv, gridOptions);

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

  var settings3 = {
    url: "http://localhost:8080/ideas",
    method: "GET",
    crossDomain: true,
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (response) {
       $('#rootHref').val(response._links.self.href)
       $('#href').val(response._links.self.href)
      gridOptions.api.setRowData(response._embedded.ideas);

    },
    error: function (xhr, status) {
      alert("error");
    }
  };


  $.ajax(settings3);


  $("button").click(function () {

    var formData = { title: $('#title').val(), description: $('#description').val(), content: editor1.getHTMLCode(), tags: ["oneTag2"] };
    var settings = {
      url:  $('#href').val(),
      method: $('#method').val(),
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

var reqSetting = {
  url: "http://localhost:8080/ideas/3c6ea2bd-09f7-48b5-931d-ee6cd7b93c10",
  method: "GET",
  crossDomain: true,
  contentType: "application/json; charset=utf-8",
  dataType: "json",
  success: function (response) {
    $('#href').val(response._links.self.href);
    $('#title').val(response.title);
    $('#description').val(response.description);
    editor1.setHTMLCode(response.content);

  },
  error: function (xhr, status) {
    alert("error");
  }
};