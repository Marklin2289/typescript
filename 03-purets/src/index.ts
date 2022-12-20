// console.log("typescript is available");

// example
class User {
  email: string;
  name: string;
  readonly city: string = "san mateo";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const mark = new User("mark@g.com", "mark");
// mark.city = "Earth";
