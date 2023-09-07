import { type } from "os";

// Union Types
const arr: (string | number)[] = []; // Array of string or number

arr.push(101);
arr.push("sourav");
// arr.push(true) // Error

// console.log(arr)

// Union Types with normal variable
let normalVariable: string | number = "Sourav"; // normal variable of string or number

// console.log(normalVariable)

// Union Types with function
function unionTypesFunction(name: string | number) {
  // console.log(name)
}

// unionTypesFunction('Sourav')

// objects

// let objMain: object;
let objMain: {
  name: string;
  age: number;
  hubby: string[];
  isCompleted?: boolean;
};

objMain = {
  name: "Sourav",
  age: 21,
  hubby: ["coding", "cricket"],
  isCompleted: false,
};

// console.log(objMain)

let arrObj: object[];

arrObj = [
  {
    name: "Sourav",
    age: 21,
    hubby: ["coding", "cricket"],
    isCompleted: false,
  },
  {
    name: "Joy",
    age: 23,
    hubby: ["Gardaning", "football"],
    isCompleted: true,
  },
];

// console.table(arrObj);

// dynamic types
let dynamicType: any = "Sourav";
dynamicType = 21;
dynamicType = true;
dynamicType = ["Sourav", 21, true];
dynamicType = {
  name: "Sourav",
  age: 21,
  isCompleted: true,
  hobbies: ["coding", "cricket"],
};

// // funtions

// type objType = {
//   hisName: string;
//   hisAge: number;
// };

// const obj: object = {
//   hisName: "Sourav",
//   hisAge: 21,
// };

// function unionTypesObject({ hisName, hisAge }: objType) {
//   console.log(hisName, hisAge);
// }

// // funtions

// type ukilLoveType = {
//   herName: string;
//   WHAT_IS_SHE_TO_ME: string;
// }

function ukilLove(
  herName: string,
  WHAT_IS_SHE_TO_ME: string,
  myName: string | null = null
): string | boolean {
  // console.log(`I love ${herName} very much. She is my ${WHAT_IS_SHE_TO_ME}.`);
  // console.log(`I am ${myName}.`);
  // return `I love ${herName} very much. She is my ${WHAT_IS_SHE_TO_ME}.`;
  // return 3232;
  return "sourav";
  return true;
}

// ukilLove("rue", "love", 'sourav');

const toFunc = (a: number, b: number): string => {
  return `${a + b}`
};

// console.log(toFunc(2, 3));


// const banoFuc = (a: number, b: number): void => 