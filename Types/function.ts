function sum(num1: number, num2: number): number {
  return num1 + num2;
}

const arrowSum = (num1: number, num2: number): number => num1 + num2;
const greetUser = (name: string = "User"): string => `Hi, ${name}`;
const greetUser2 = (name: string): string => `Hi, ${name}`;

greetUser();
greetUser2("New User");
