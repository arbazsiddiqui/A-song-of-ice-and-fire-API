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

    exports.getCharacterByID = function(char_id) {
        char_id = char_id.toString();
        var url = 'http://www.anapioficeandfire.com/api/characters/' + char_id;
        return httpGet(url);
    }

}();
