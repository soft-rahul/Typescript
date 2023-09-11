function sum(num1: number, num2: number) {
    return num1 + num2;
}

const arrowSum = (num1: number, num2: number) => num1 + num2;

const greetUser = (name: string = 'User') => `Hi, ${name}`;
const greetUser2 = (name: string) => `Hi, ${name}`;

greetUser();
greetUser2("New User");