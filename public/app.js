var app = function(){
  var saved = localStorage.selection;
  if (saved != undefined){
    var title = saved.title;
    console.log(saved.title);
    var url = 'http://www.omdbapi.com/?t=' + title + '&plot=full&r=json'
    console.log(url);
    makeRequest(url, requestComplete);
    }
  new FilmList();
  var selectBox = document.querySelector('select');
  selectBox.onchange = handleSelectChanged;

  // var url = 'http://www.omdbapi.com/?t=+Planes%2C+Trains+%26+Automobiles&y=1987&plot=full&r=json'
 
  

  

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
  var film = films[event.target.value];
  var filmstring = JSON.stringify(film);
  localStorage.selection = filmstring;
  var title = film.title;
  var url = 'http://www.omdbapi.com/?t=' + title + '&plot=full&r=json'
  console.log(url);
  makeRequest(url, requestComplete);
}





window.onload = app;