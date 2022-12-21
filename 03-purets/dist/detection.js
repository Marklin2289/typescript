"use strict";
function detectType(val /** | number */) {
    // return val.toLowerCase()
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log("Please provide ID");
        return;
    }
    //   return id.toLowerCase(); wont work
}
function move(animal) {
    if ("swim" in animal) {
        return animal.swim();
    }
    return animal.fly();
}
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
    return false;
}
function logValue(value) {
    if (value instanceof Date) {
        console.log(value.toUTCString());
    }
    else {
        console.log(value.toUpperCase());
    }
}
// type Fish = { swim: () => void };
// type Bird = { fly: () => void };
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    pet;
    return "bird food";
}
