var FilmList = function() {
  var select = document.getElementById('film-list');
    for (i = 0; i < films.length; i++) {
      var option = document.createElement('option');
      var film = films[i];
      option.innerText = film.title;
      option.value = i;
      select.appendChild(option);
    }
  }

// var FilmList = function() {
// var ul = document.querySelector('#list');
// for (i = 0; i < films.length; i++) {
//   var li = document.createElement('li');
//   var a = document.createElement('a');
//   var linkText = document.createTextNode(films[i].title);
//   li.innerText = films[i].title + " " + films[i].year;
//   ul.appendChild(li);
//   li.appendChild(a)
//   a.appendChild(linkText);
//   a.title = films[i].name;
//   a.href = films[i].title;
// }



  console.log(films);


var films = [ {
  "year" : "2016" , "title" : "Billy Lynn's Long Halftime Walk", "character" : "Norm" 
},
{ "year": "2015" , "title" : "Love the Coopers" , "character" : "Rags (voice)"
},
{ "year" : "2015" , "title" : "Home", "character" : "Captain Smek (voice)"
},
{ "year" : "2014" , "title" : "Almost Home" , "character" : "Captain Smek (voice)"
},
{ "year" : "2011" , "title" : "The Big Year" , "character" : "Stu Preissler"
},
{ "year" : "2009" , "title" : "It's Complicated" , "character" : "Adam Schaffer"
},
{ "year" : "2009" , "title" : "The Pink Panther 2" , "character" : "Clouseau"
},
{ "year" : "2008" , "title" : "Baby Mama" , "character" : "Barry"
},
{ "year" : "2006" , "title" : "The Pink Panther" , "character" : "Clouseau"
},
{ "year" : "2005" , "title" : "Cheaper by the Dozen 2", "character" : "Tom Baker"
},
{ "year" : "2005" , "title" : "Shopgirl" , "character" : "Ray Porter"
},
{ "year" : "2003" , "title" : "Cheaper by the Dozen" , "character" : "Tom Baker"
},
{ "year" : "2003" , "title" : "Looney Tunes: Back in Action" , "character" : "Mr. Chairman"
},
{ "year" : "2003" , "title" : "Bringing Down the House" , "character" : "Peter Sanderson"
},
{ "year" : "2001" , "title" : "Novocaine" , "character" : "Frank Sangster"
},
{ year: 2000, title: "Joe Gould's Secret", character: "Charlie Duell"
},
{ year: 1999, title: "Bowfinger", character: "Bowfinger"
},
{ year: 1999, title: "The Out-of-Towners", character: "Henry Clark"
},
{ year: 1998, title: "The Prince of Egypt", character: "Hotep (voice)"
},
{ year: 1997, title: "The Spanish Prisoner", character: "Julian 'Jimmy' Dell"
},
{ year: 1996, title: "Sgt. Bilko", character: "Master Sergeant Ernest G. Bilko"
},
{ year: 1995, title: "Father of the Bride Part II", character: "George Banks"
},
{ year: 1994, title: "Mixed Nuts", character: "Philip"
},
{ year: 1994, title: "A Simple Twist of Fate", character: "Michael McCann"
},
{ year: 1993, title: "And the Band Played On", character: "The Brother"
},
{ year: 1992, title: "Leap of Faith", character: "Jonas Nightengale"
},
{ year: 1992, title: "HouseSitter", character: "Davis"
},
{ year: 1991, title: "Grand Canyon", character: "Davis"
},
{ year: 1991, title: "Father of the Bride", character: "George Banks"
},
{ year: 1991, title: "L.A. Story", character: "Harris K. Telemacher"
},
{ year: 1990, title: "My Blue Heaven", character: "Vincent 'Vinnie' Antonelli"
},
{ year: 1989, title: "Parenthood", character: "Gil"
},
{ year: 1988, title: "Dirty Rotten Scoundrels", character: "Freddy Benson"
},
{ year: 1987, title: "Planes, Trains &amp; Automobiles", character: "Neal Page"
},
{ year: 1987, title: "Roxanne", character: "C. D. Bales"
},
{ year: 1986, title: "Little Shop of Horrors", character: "Orin Scrivello - D.D.S."
},
{ year: 1986, title: "¡Three Amigos!", character: "Lucky Day"
},
{ year: 1985, title: "Movers &amp; Shakers", character: "Fabio Longio"
},
{ year: 1984, title: "All of Me", character: "Roger Cobb"
},
{ year: 1984, title: "The Lonely Guy", character: "Larry"
},
{ year: 1983, title: "The Man with Two Brains", character: "Dr. Michael Hfuhruhurr"
},
{ year: 1982, title: "Dead Men Don't Wear Plaid", character: "Rigby Reardon"
},
{ year: 1982, title: "Twilight Theater", character: "Various Characters"
},
{ year: 1981, title: "Pennies from Heaven", character: "Arthur"
},
{ year: 1979, title: "The Jerk", character: "Navin R. Johnson"
},
{ year: 1979, title: "The Muppet Movie", character: "Insolent Waiter"
},
{ year: 1978, title: "Sgt. Pepper's Lonely Hearts Club Band", character: "Dr. Maxwell Edison"
},
{ year: 1972, title: "Another Nice Mess", character: "Hippie"
}]

