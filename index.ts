let hello: string = 'hello';
console.log(hello);

function add(a: number, b: number): number {
  return a + b;
}

let hasValue: boolean = true;
let count: number = 20;

console.log(hasValue);

if (hasValue === true) {
  console.log('hoge')
}

const person:  {
  name: string;
  age: number;
} = {
  name: 'Masahiro',
  age: 23
}

console.log(person.name);

let masahiro: {
  [index: string]: string
} = {
  'first': 'Morinaga',
  'last': 'Masahiro'
}

console.log(masahiro);

const fruits: string[] = ['Apple','Bannana','Grape'];
fruits.push('Melon');

console.log(fruits);

const book: [string, number, boolean] = ['business', 1500, false];