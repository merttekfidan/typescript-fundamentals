function stringFunction() {
    console.log('Hello, I am a script');
}
function cal(val1, val2) {
    var total = val1 + val2;
    return total;
}
cal(3, 2);
var universal = cal;
console.log(universal(4, 2));
