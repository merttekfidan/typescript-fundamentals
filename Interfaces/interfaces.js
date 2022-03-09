var automobile = {
    brand: 'BMW',
    speed: 100,
    speedMethod: function () {
        console.log("This " + this.brand + " goes " + this.speed + " km/h");
    }
};
function car1(automobile) {
    console.log("This " + automobile.brand + " goes " + automobile.speed + " km per hour");
}
car1(automobile);
var AutomobileClass = /** @class */ (function () {
    function AutomobileClass() {
    }
    AutomobileClass.prototype.speedMethod = function (speed) {
        console.log("Hi my car is goin at " + speed);
    };
    return AutomobileClass;
}());
var carObj = new AutomobileClass;
carObj.speedMethod(200);
