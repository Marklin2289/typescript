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
