var asoiaf = function() {
    if (typeof require == 'function') {
        var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
        var exports = module.exports = {};
        var httpGet = function(url)
        {
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", url, false);
            xmlHttp.send(null);
            return JSON.parse(xmlHttp.responseText);
        }
    } else {
        var exports = {};
        var httpGet = $.get;
    }

    //Getters for book

    exports.getBookByID = function(book_id) {
        book_id = book_id.toString();
        var url = 'http://www.anapioficeandfire.com/api/books/' + book_id;
        return httpGet(url);
    }

    exports.getBookByName = function(book_name) {
        var url = 'http://www.anapioficeandfire.com/api/books/?name=' + book_name;
        return httpGet(url);
    }

    exports.getAllBooks = function() {
        var url = 'http://www.anapioficeandfire.com/api/books';
        return httpGet(url);
    }

    //Getters for Character

    exports.getCharacterByID = function(char_id) {
        char_id = char_id.toString();
        var url = 'http://www.anapioficeandfire.com/api/characters/' + char_id;
        return httpGet(url);
    }

    exports.getCharacterByName = function(char_name) {
        var url = 'http://www.anapioficeandfire.com/api/characters/?name=' + char_name;
        return httpGet(url);
    }

    exports.getAllCharacters = function() {
        var url = 'http://www.anapioficeandfire.com/api/characters';
        return httpGet(url);
    }

}();
