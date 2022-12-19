// const User: (string | number)[] = ["hc", 1];
let tUser: [string, number, boolean];
tUser = ["hc", 131, true];

let rgb: [number, number, number] = [255, 123, 112];

type User = [number, string];
const newUser: User = [112, "m@k.com"];

newUser[1] = "hc.com";
// newUser.push(true);

export {};
