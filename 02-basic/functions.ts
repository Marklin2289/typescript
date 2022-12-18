function addTwo(num: number): number {
  //   num.toUpperCase(); wont work
  return num + 2;
  //   return "hello";
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(
  name: string,
  email: string,
  password: number,
  isPaid: boolean
) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

let myValue = addTwo(5);
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

const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3];
heros.map((hero): string => {
  return `hero is ${hero}`;
  //   return 1;
});

function consoleError(e: string): void {
  //void means nothing
  console.log(e);
}
function handleError(e: string): never {
  // never means never return value
  throw new Error(e);
}

export {};
