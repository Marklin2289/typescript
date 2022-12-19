interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrail: () => string;
  startTrail(): string;
  getCoupon(couponName: string, value: number): number;
}

const mark: User = {
  dbId: 22,
  email: "mark@example.com",
  userId: 123,
  startTrail: () => {
    return "trail started";
    // return 2;
  },
  getCoupon(name: "mark", off: 10) {
    return 10;
  },
};
mark.email = "m@k.com";

export {};
