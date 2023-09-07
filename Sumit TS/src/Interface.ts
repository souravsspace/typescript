
interface getDataInterface {
  name: string;
  age: number;
}

function getData(data: getDataInterface){
    const bio = `My name is ${data.name} and I am ${data.age} years old.`
    console.log(bio)
    return bio
}

getData({name: 'Sourav', age: 21})

export interface dataSheetInterface {
  herName: string;
  herAge: number | null;
  herIsComplited: boolean;

  getHerName(): string;
  getHerAge(): number | null;
}




