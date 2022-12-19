let score: number | string = 33;

score = 44;
score = "55";

type User = {
  name: string;
  id: number;
};

type Admin = {
  userName: string;
  id: number;
};

let mark: User | Admin = { name: "Mark", id: 334 };

mark = { userName: "mk", id: 334 };

// function getDbId(id: number | string) {
//   // making some API calls
//   console.log(`DB id is ${id}`);
// }

getDbId(3);
getDbId("3");

function getDbId(id: number | string) {
  //    id.toLowerCase() will not work, needs to do check typeof
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

// array

const data: (number | string | boolean)[] = [1, 2, 3, "4", 5, true]; // mixed type

let pi: 3.14 = 3.14;
// pi = 3.145;  wont work

let seatAllotment: "aisle" | "middle" | "window";
seatAllotment = "aisle";
// seatAllotment = "crew"; cannot

export {};
