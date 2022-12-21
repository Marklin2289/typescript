// // example

// // normal style to define a class :
// // class User {
// //   public email: string;
// //   private name: string;
// //   readonly city: string = "san mateo";
// //   constructor(email: string, name: string) {
// //     this.email = email;
// //     this.name = name;
// //   }
// // }

// // advanced style to define a class
// // class User {
// //   protected _courseCount = 1;
// //   readonly city: string = "san mateo";
// //   constructor(
// //     public email: string,
// //     private name: string,
// //     private userId: number
// //   ) {}

//   private deleteToken() {
//     console.log("Token deleted");
//   }

//   // getter
//   get getAppleEmail(): string {
//     return `apple${this.email}`;
//   }

//   get courseCount(): number {
//     return this._courseCount;
//   }

//   //   setter
//   set courseCount(courseNum) {
//     if (courseNum <= 1) {
//       throw new Error("Course count should be more than 1");
//     }
//     this._courseCount = courseNum;
//   }
// }

// class SubUser extends User {
//   isFamily: boolean = true;
//   changeCourseCount() {
//     this._courseCount = 4;
//   }
// }

// const mark = new User("mark@g.com", "mark", 22);
