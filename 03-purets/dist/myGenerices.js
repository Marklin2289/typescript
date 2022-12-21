"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
// identityThree(true);
function identityFour(val) {
    return val;
}
identityFour({
    brand: "Nike",
    type: 321,
});
function getSearchProducts(products) {
    // do some database operations
    const myIndex = 3;
    return products[myIndex]; // means one of the product from array
}
const getMoreSearchProducts = (products) => {
    // do some database operations
    const myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
anotherFunction(3, {
    connection: "connection",
    username: "username",
    password: "password",
});
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(products) {
        this.cart.push(products);
    }
}
