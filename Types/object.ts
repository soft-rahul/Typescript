//without type

const printUserDetails = (user: {name: string, age: number}): string => {
    return `Hi, ${user.name}. You are ${user.age} years old!`;
}

console.log(printUserDetails({name: 'RK', age: 23}))

// type alias

type PerfectUser = {
    name: string,
    age: number
}

const printUserDetailsTwo = (user: PerfectUser): string => {
    return `Hi, ${user.name}. You are ${user.age} years old!`;
}

console.log(printUserDetailsTwo({name: 'RK', age: 25}))
