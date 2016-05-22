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

## API ##

###Characters###

**getCharacterByID**

* Accepts: A string or number representing a character ID.
* Returns: An object containing the character's properties if the character exists.

**getCharacterByName**

* Accepts: A string representing full name of the character.
* Returns: An array of objects containing all the characters with given name.

**getCharactersByCulture**

* Accepts: A string representing the culture of Character.
* Returns: An array of objects containing all the characters with given culture.

**getCharactersByGender**

* Accepts: A string representing the gender of Character.
* Returns: An array of objects containing all the characters with given gender.

**getAllCharacters**

* Returns: An array of objects containing all the characters.

###Houses###

**getHouseByID**

* Accepts: A string or number representing a house ID.
* Returns: An object containing the house's properties if the house exists.

**getHouseByName**

* Accepts: A string representing full name of the house.
* Returns: An array of objects containing all the houses with given name.

**getHouseByRegion**

* Accepts: A string representing the region of the house.
* Returns: An array of objects containing all the houses with given region.

**getHouseByWords**

* Accepts: A string representing the words/saying of the house.
* Returns: An array of objects containing all the houses with given words/saying.

**getAllHouses**

* Returns: An array of objects containing all the houses.

###Books###

**getBookByID**

* Accepts: A string or number representing a book ID.
* Returns: An object containing the book's properties if the book exists.

**getBookByName**

* Accepts: A string representing full name of the book.
* Returns: An array of objects containing all the books with given name.

**getAllBooks**

* Returns: An array of objects containing all the books.
