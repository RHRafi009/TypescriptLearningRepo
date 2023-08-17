// for any type 
let anyTypeVar: any;
let setValueWithVar: any = 2;
const constantVar: any = 3;

// number variable
let numberVar: number;
numberVar = 2;

let stringVar: string = 'Hi';
let flagVar: boolean = true;

// array declaration
let anyTypeOfArray: any[];
let stringArray: string[] = ['Hi', 'Bob'];

// Object declaration
let car: {
    model: string;
    CC: number
}

car = {
    model: "Toyota Axio X",
    CC: 1500
};

// Function annotation 
let greeting: (name: string) => string;

greeting = function (name: string) {
    return `Hi ${name}`;
}
