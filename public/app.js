var app = function(){
  var url = 'http://www.omdbapi.com/?t=+Planes%2C+Trains+%26+Automobiles&y=1987&plot=full&r=json'
  makeRequest(url, requestComplete);
  var saved = localStorage.selection;

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
  populateList(listing);
}

var populateList = function(listing) {
  var div = document.querySelector('#films');
  var p = document.createElement('p');
  var li = document.createElement('li');
  var img = document.createElement('img')
  img.setAttribute('src', listing.Poster);
  p.innerText = listing.Plot;
  li.innerText = listing.Title;
  div.appendChild(li);
  li.appendChild(img);
  li.append(p);
}

window.onload = app;