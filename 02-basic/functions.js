"use strict";
exports.__esModule = true;
function addTwo(num) {
    //   num.toUpperCase(); wont work
    return num + 2;
    //   return "hello";
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, password, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var myValue = addTwo(5);
console.log(myValue);
getUpper("mark");
signUpUser("Mark", "abc@.com", 123, true);
loginUser("M", "M@m.com");
// function getValue(myVal: number) {
//   if (myVal > 5) {
//     return true;
//   }
//   return "200 OK";
// }
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3];
heros.map(function (hero) {
    return "hero is ".concat(hero);
    //   return 1;
});
function consoleError(e) {
    //void means nothing
    console.log(e);
}
function handleError(e) {
    // never means never return value
    throw new Error(e);
}
