// const AISLE = 0;
// const MIDDLE = 1;
// const WINDOW = 2;

const enum SeatChoice { // put const to make it less code in js
  AISLE = "AISLE",
  MIDDLE = 3,
  WINDOW,
  FOURTH,
}

const hcSeat = SeatChoice.AISLE;

// js code with const enum ...
// var hcSeat = "AISLE" /* SeatChoice.AISLE */;

// js code without const
// var SeatChoice;
// (function (SeatChoice) {
//     SeatChoice["AISLE"] = "AISLE";
//     SeatChoice[SeatChoice["MIDDLE"] = 3] = "MIDDLE";
//     SeatChoice[SeatChoice["WINDOW"] = 4] = "WINDOW";
//     SeatChoice[SeatChoice["FOURTH"] = 5] = "FOURTH";
// })(SeatChoice || (SeatChoice = {}));
// var hcSeat = SeatChoice.AISLE;

export {};
