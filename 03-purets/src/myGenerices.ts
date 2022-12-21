const score: Array<number> = [];
const names: Array<String> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}
// identityThree(true);
function identityFour<T>(val: T): T {
  return val;
}

interface Bottle {
  brand: string;
  type: number;
}

identityFour<Bottle>({
  brand: "Nike",
  type: 321,
});

function getSearchProducts<T>(products: T[]): T {
  // do some database operations
  const myIndex = 3;
  return products[myIndex]; // means one of the product from array
}

const getMoreSearchProducts = <T>(products: T[]): T => {
  // do some database operations
  const myIndex = 4;
  return products[myIndex];
};
