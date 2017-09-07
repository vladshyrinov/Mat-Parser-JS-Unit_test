var parser = {
    mathParser: function (str) {
        var matching = str.match(/\d|[-().*/+]/g);
        
            if (matching === null ||
                matching.length !== str.split(" ").join("").length) {
                return undefined;
            }
        
            var startBracketCounter = 0;
            var endBracketCounter = 0;
        
            for(var i=0; i<str.length; i++) {
                if(str[i] == "(" )
                    startBracketCounter++;
                if(str[i] == ")")
                    endBracketCounter++;
            }
        
            if(startBracketCounter !== endBracketCounter) {
                return undefined;
            }
        
            return +eval(str).toFixed(2);
    }
};

module.exports = parser;