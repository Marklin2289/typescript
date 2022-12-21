"use strict";
// example
// normal style to define a class :
// class User {
//   public email: string;
//   private name: string;
//   readonly city: string = "san mateo";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
// advanced style to define a class
class User {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._courseCount = 1;
        this.city = "san mateo";
    }
    deleteToken() {
        console.log("Token deleted");
    }
    // getter
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    //   setter
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const mark = new User("mark@g.com", "mark", 22);
