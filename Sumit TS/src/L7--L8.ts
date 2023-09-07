import { dataSheet } from "./dataSheet";


// type dataSheetType = {
//   name: string;
//   age: number | null;
//   isComplited: boolean;
// };

// class userDetails {

//   constructor(
//     public name: string,
//     private age: number ,
//     readonly isComplited: boolean,
//   ){}

//   getAge(age: number){
//     return this.age + age
//   }
// }

// class dataSheet {
//   constructor(
//     public herName: string,
//     readonly herAge: number | null,
//     private herIsComplited: boolean
//   ) {}
//   // public herName: string
//   // private herAge: number | null
//   // private herIsComplited: boolean

//   // constructor({name = 'sourav', age = 21, isComplited = true}: dataSheetType){
//   //   this.herName = name
//   //   this.herAge = age
//   //   this.herIsComplited = isComplited
//   // }
// }

const dataSheet1 = new dataSheet("sourav", 21, true);
const dataSheet2 = new dataSheet("ukil", null, false);

const dataSheetArr: dataSheet[] = [];
dataSheetArr.push(dataSheet1, dataSheet2);

// console.table(dataSheetArr)

// console.log(dataSheet1.herAge) // private property can't access outside of class
// console.log(dataSheet1.herName) // public property can access outside of class

// dataSheet1.herName = 'rue'
// console.log(dataSheet1.herName) // public property can access outside of class

// dataSheet1.herAge = 22
// console.log(dataSheet1.herAge) // private property can't access outside of class

// let userDetails: (
//   id: number,
//   userIn: {
//     name: string;
//     age: number;
//     isComplited?: boolean | null;
//   }
// ) => void;

// userDetails = (id, userIn) => {
//   console.log(
//     `user id is ${id}, name is ${userIn.name} and age is ${userIn.age}, isComplited: ${userIn.isComplited}`
//   );
//   return "ukil";
// };

// userDetails(171, { name: "sourav", age: 21});

// let calc: (a: number, b: string, c: number)=> number

// calc = (a, b, c) => {
//   if(b === 'sourav'){
//     console.log(a - c + 1)
//     return a - c + 1
//   }
//   console.log(a + c)
//   return a + c
// }

// // calc(10, 'sourav', 5)
// calc(10, 'ukil', 5)

// let addItem: (x: number, y: number)=> number

// addItem = (a, b) => {
//   const result = (a + b)/2
//   console.log(result)
//   return result;
// }

// addItem(2, 9)

// type userType = {
//   name: string;
//   age: number;
// };

// const userDetails = (id: (string | number), user: userType) => {
//   console.log(`user id is ${id}, name is ${user.name} and age is ${user.age}`);
// };

// // userDetails(1, { name: "John", age: 25 });

// const sayHello = (user: userType) => {
//   console.log(`Hello ${user.name}, you are ${user.age} years old`);
// };

// sayHello({name: 'Sourav', age: 21})

// const hasError: boolean = false;
// const completed: boolean = true;

// let result: boolean;
// result = completed || hasError; // true always
// console.log(result)

// result = hasError || completed; // if has erorr is true, then true, else completed
// console.log(result)

// result = completed && hasError;
// console.log(result)

// result = hasError && completed;
// console.log(result)
