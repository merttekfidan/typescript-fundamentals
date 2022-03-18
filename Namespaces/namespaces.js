var myNameSpace;
(function (myNameSpace) {
    myNameSpace.name = 'Maria';
    function displayData(text) {
        return ("Welcome " + text);
    }
    myNameSpace.displayData = displayData;
})(myNameSpace || (myNameSpace = {}));
//console.log(myNameSpace.displayData())
///<reference path='./module1.ts'/>
var thisSpace = myNameSpace.displayData;
console.log(thisSpace('Hello this is Mert'));
// To compile this file use this command
// tsc namespaces --outFile namespaces.js
