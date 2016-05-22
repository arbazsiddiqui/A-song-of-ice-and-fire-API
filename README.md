# A-song-of-ice-and-fire-API #

## Overview ##
A-song-of-ice-and-fire-API is a Node.js wrapper for accessing [AnApiOfIceAndFire](https://github.com/joakimskoog/AnApiOfIceAndFire).

## Installation ##

The current production release of A-song-of-ice-and-fire-API is available through [npm](https://www.npmjs.com/package/asoiaf-api):

```
npm install asoiaf-api
```

## Usage ##

```javascript
> var asoaif = require('asoiaf-api');
> asoaif.getCharacterByName("Jon Snow");


[ { url: 'http://www.anapioficeandfire.com/api/characters/583',
    name: 'Jon Snow',
    gender: 'Male',
    culture: 'Northmen',
    born: 'In 283 AC',
    died: '',
    titles: [ 'Lord Commander of the Night\'s Watch' ],
    aliases: 
     [ 'Lord Snow',
       'Ned Stark\'s Bastard',
       'The Snow of Winterfell',
       'The Crow-Come-Over',
       'The 998th Lord Commander of the Night\'s Watch',
       'The Bastard of Winterfell',
       'The Black Bastard of the Wall',
       'Lord Crow' ],
    father: '',
    mother: '',
    spouse: '',
    allegiances: [ 'http://www.anapioficeandfire.com/api/houses/362' ],
    books: [ 'http://www.anapioficeandfire.com/api/books/5' ],
    povBooks: 
     [ 'http://www.anapioficeandfire.com/api/books/1',
       'http://www.anapioficeandfire.com/api/books/2',
       'http://www.anapioficeandfire.com/api/books/3',
       'http://www.anapioficeandfire.com/api/books/8' ],
    tvSeries: [ 'Season 1', 'Season 2', 'Season 3', 'Season 4', 'Season 5' ],
    playedBy: [ 'Kit Harington' ] } ]
```
