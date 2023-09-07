// generices
// they are used to make a function more flexible

import { isNull } from "util";

const addId = <T extends object[]>(data: T) => {
  const id = Math.floor(Math.random() * 10000 + 1);
  return { ...data, id };
};

// const result = addId({
//   name: "Sourav",
//   age: 21,
//   countryCode: 'BD',
//   isHe: true
// });
// result.name // no error

// const result = addId("Sourav"); // error because string is not an object
// const result = addId({name:"Sourav"}); // no error because object

// const result = addId([1,2,3,4,5])
// const result = addId([1,2,3,4,5, 'sourav', 'ukil', 101])

const result = addId([{ name: "Sourav", age: 21, countryCode: "BD" }]);

// console.table(result);

// enum
enum pingStatus {
  Failed = "-404, Failed to connect",
  Success = "Connected!",
}

// interface

interface API_RESPONSE_IN<T> {
  type: string;
  ping: pingStatus;
  data: T;
}

const API_RESPONSE: API_RESPONSE_IN<object> = {
  type: "GET",
  ping: pingStatus.Failed,
  data: () => {
    if (pingStatus.Success) {
      return {
        name: "Sourav",
        age: 21,
        countryCode: "BD",
        ping: "Success",
      };
    } else {
      return null;
    }
  },
};

// console.log(API_RESPONSE);
// console.log(API_RESPONSE.data());

let arr = [1, "sourav", { id: 2, name: "ukil" }];

// arr.push(true)

// first Element del == pop
// last Element del == shift
// arr.pop();
// arr.shift();

// first element del == unshift
// last element del == push
// arr.unshift('mina')
// arr.push(3);

arr.push("nila");

console.log(arr);
