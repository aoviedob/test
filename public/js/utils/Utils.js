var Utils = (function (){
    var createStringFromMultiline = function(functionString, args){
        var regEx = /\/\*!\s*(?:\r\n|\n)([\s\S]*?)(?:\r\n|\n)\s*!\*\//;
        var htmlString = regEx.exec(functionString.toString())[1];
        
        for (var name in args) {
            var propertyRegEx = new RegExp('\\{*?' + name + '\\}', '');
            htmlString = htmlString.replace(propertyRegEx, args[name]);
        }

        return htmlString;
    }
    
    return {
        createString: createStringFromMultiline,
    }
})();
