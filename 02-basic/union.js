"use strict";
exports.__esModule = true;
var score = 33;
score = 44;
score = "55";
var mark = { name: "Mark", id: 334 };
mark = { userName: "mk", id: 334 };
// function getDbId(id: number | string) {
//   // making some API calls
//   console.log(`DB id is ${id}`);
// }
getDbId(3);
getDbId("3");
function getDbId(id) {
    //    id.toLowerCase() will not work, needs to do check typeof
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
// array
var data = [1, 2, 3, "4", 5, true]; // mixed type
var pi = 3.14;
// pi = 3.145;  wont work
var seatAllotment;
seatAllotment = "aisle";
