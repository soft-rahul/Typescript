function sum(num1, num2) {
    return num1 + num2;
}
var arrowSum = function (num1, num2) { return num1 + num2; };
console.log(sum(10, 1));
var greetUser = function (name) {
    if (name === void 0) { name = 'User'; }
    return "Hi, ".concat(name);
};
var greetUser2 = function (name) { return "Hi, ".concat(name); };
greetUser();
greetUser2("New User");
