let x: number | string;
x = 10;
x = '100';

// array 
const ages: (number | string | boolean)[] = [1,2,3,4,'one','two', true];

// literal with union
let gender: 'male' | 'female' | 'other';

gender = "female";
gender = 'male';