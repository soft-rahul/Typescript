const printUserDetails = (user: {name: string, age: number}): string => {
    return `Hi, ${user.name}. You are ${user.age} years old!`;
}

console.log(printUserDetails({name: 'RK', age: 23}))