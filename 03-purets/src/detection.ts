function detectType(val: number | string /** | number */) {
  // return val.toLowerCase()
  if (typeof val === "string") {
    return val.toLowerCase();
  }
  return val + 3;
}

function provideId(id: string | number) {
  if (!id) {
    console.log("Please provide ID");
    return;
  }
  //   return id.toLowerCase(); wont work
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
  return animal.fly();
}

interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccount(account: User | Admin) {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
  return false;
}

function logValue(value: Date | string) {
  if (value instanceof Date) {
    console.log(value.toUTCString());
  } else {
    console.log(value.toUpperCase());
  }
}

// type Fish = { swim: () => void };
// type Bird = { fly: () => void };
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet;
    return "fish food";
  }
  pet;
  return "bird food";
}
