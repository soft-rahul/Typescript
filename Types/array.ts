const numbers: number[] = [];

numbers.push(1);
numbers.push(2);

const sum2 = (numbers:number[]) :number => {
    let result : number = 0;
    numbers.forEach(number => {
        result = result + number;
    })

    return result;
}