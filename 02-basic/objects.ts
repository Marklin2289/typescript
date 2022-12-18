// const User = {
//   name: "mark",
//   email: "mark@example.com",
//   isActive: true,
// };

// function createUser({ name: string, isPaid: boolean }) {}
// let newUser = { name: "mark", isPaid: true, email: "mark@example.com " };
// createUser(newUser);

// function createCourse(): { name: string; price: number } {
//   return { name: "reactjs", price: 399 };
// }

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

// type myString = string;
function createUser(user: User): User {
  return { name: user.name, email: user.email, isActive: user.isActive };
}

let newUser = createUser({ name: "mark", email: "x@y.com", isActive: true });
console.log(newUser);

type Point = { x: number; y: number };
function printCoord(pt: Point) {
  console.log(`the coordinates's x value is ${pt.x}, y value is ${pt.y}`);
}
printCoord({ x: 200, y: 100 });
export {};
