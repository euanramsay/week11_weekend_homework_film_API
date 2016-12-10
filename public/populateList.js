var PopulateList = function(listing) {
  var div = document.querySelector('#films');
  var p = document.createElement('p');
  var li = document.createElement('li');
  var img = document.createElement('img')
  img.setAttribute('src', listing.Poster);
  p.innerText = listing.Plot;
  li.innerText = listing.Title + listing.Year;
  div.appendChild(li);
  li.appendChild(img);
  li.append(p);
}