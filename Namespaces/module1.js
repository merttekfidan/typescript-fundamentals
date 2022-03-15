var myNameSpace;
(function (myNameSpace) {
    myNameSpace.name = 'Maria';
    function displayData() {
        return ("Welcome " + myNameSpace.name);
    }
    myNameSpace.displayData = displayData;
})(myNameSpace || (myNameSpace = {}));
console.log(myNameSpace.displayData());
