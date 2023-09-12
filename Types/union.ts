let x: number | string;
x = 10;
x = '100';

// array 
const ages: (number | string | boolean)[] = [1,2,3,4,'one','two', true];
const stuff: number[] | string[] = ['a','b'];

// literal with union
let gender: 'male' | 'female' | 'other';

gender = "female";
gender = 'male';

// Exercise : 1
type SkillLevel  =  "Beginner" | 'Intermediate' | 'Advanced' | 'Expert';
type SkiSchoolStudent = {
    name: string;
    age: number;
    sport: 'ski' | 'snowboard';
    level: SkillLevel;
}