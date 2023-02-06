const GET = "GET"
const PUT = "PUT"

$(document).ready(function () {

  // setup the grid after the page has finished loading
  const gridDiv = document.querySelector('#myGrid');
  new agGrid.Grid(gridDiv, gridOptions);

  const listing = getReqSettings()
  listing.url = "http://localhost:8080/ideas"
  listing.method = GET
  listing.success = listingSuccess

  $.ajax(listing);


  $("button").click(function () {

    var formData = { title: $('#title').val(), description: $('#description').val(), content: editor1.getHTMLCode(), tags: ["oneTag2"] };
    const saveSettings = getReqSettings()
    saveSettings.url = $('#href').val()
    saveSettings.method = $('#method').val()
    saveSettings.data = JSON.stringify(formData)
    saveSettings.success = (response) => console.log('saved')

    $.ajax(saveSettings);

  });


});

function getReqSettings() {
  const setting = { ...reqSetting }
  return setting
}

const reqSetting = {
  url: null,
  method: null,
  crossDomain: true,
  contentType: "application/json; charset=utf-8",
  dataType: "json",
  data: null,
  success: null,
  error: function (xhr, status) {
    alert("error");
  }
};

const fillFormSuccess = (response) => {
  $('#href').val(response._links.self.href);
  $('#title').val(response.title);
  $('#description').val(response.description);
  editor1.setHTMLCode(response.content);
}

const listingSuccess = (response) => {
  $('#rootHref').val(response._links.self.href)
  $('#href').val(response._links.self.href)
  gridOptions.api.setRowData(response._embedded.ideas);

}

const columnDefs = [
  { field: "title" },
  { field: "description", width: 350, wrapText: true }
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
    $('#method').val(PUT)
    const getOneSettings = getReqSettings()
    getOneSettings.url = params.data._links.self.href;
    getOneSettings.method = GET
    getOneSettings.success = fillFormSuccess
    $.ajax(getOneSettings);
  }
};