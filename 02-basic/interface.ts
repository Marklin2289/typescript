interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrail: () => string;
  startTrail(): string;
  getCoupon(couponName: string, value: number): number;
}

interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "TA" | "learner";
}

const mark: Admin = {
  dbId: 22,
  email: "mark@example.com",
  userId: 123,
  role: "admin",
  startTrail: () => {
    return "trail started";
    // return 2;
  },
  getCoupon(name: "mark", off: 10) {
    return 10;
  },
  githubToken: "github",
};
mark.email = "m@k.com";

export {};
