"use strict";
// const User = {
//   name: "mark",
//   email: "mark@example.com",
//   isActive: true,
// };
exports.__esModule = true;
// type myString = string;
function createUser(user) {
    return { name: user.name, email: user.email, isActive: user.isActive };
}
var newUser = createUser({ name: "mark", email: "x@y.com", isActive: true });
console.log(newUser);
function printCoord(pt) {
    console.log("the coordinates's x value is ".concat(pt.x, ", y value is ").concat(pt.y));
}
printCoord({ x: 200, y: 100 });
