var app = function(){

  // var url = 'http://www.omdbapi.com/?t=+Planes%2C+Trains+%26+Automobiles&y=1987&plot=full&r=json'
  var title = "Father of the Bride";
  var url = 'http://www.omdbapi.com/?t=' + title + '&plot=full&r=json'
  console.log(url);
  makeRequest(url, requestComplete);
  var saved = localStorage.selection;
  new FilmList();

  var selectBox = document.querySelector('select');
  selectBox.onchange = handleSelectChanged;

}

var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = callback;
  request.send();
}

var requestComplete = function() {
  console.log("Success!");
  if (this.status != 200) return;

  var jsonString = this.responseText;
  var listing = JSON.parse(jsonString);
  console.log(listing);
  console.log(listing.Title);
  new PopulateList(listing);
}

var handleSelectChanged = function( event ) {
  console.log( event.target.value );
  var film = countries[event.target.value];
  var pTag = document.querySelector('#select-result');
  pTag.innerText = film.title;
  var filmstring = JSON.stringify(film);
  localStorage.selection = filmstring;
}





window.onload = app;