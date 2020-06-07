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

enum coffeSize  {
  SHORT = 'SHORT',
  TALL = 'TALL',
  GRANDE = 'GRANDE',
  VENTI = 'VENTI'
}

const coffee = {
  hot: true,
  size: coffeSize.TALL
}

//unionタイプ
let unionType: number | string = 10;
unionType = 'hello';

let unionTypes: (number | string)[] = ['hello', 23, 'acnosc'];


//リテラル型 =>決まった値のみを取り扱う   constを使うとリテラル型が採用される
//Typeエイリアス
type ClothSize = 'small' | 'medium' | 'large'
const apple: 'apple' = 'apple'

let clothSize: 'small' | 'medium' | 'large' = 'large'
const cloth: {
  color: string;
  size: ClothSize
}
 = {
  color: 'white',
  size: clothSize
}

//関数に型をつける
function Add(num1: number, num2: number): number {
  return num1 + num2
}

function sayHello(): void {
  console.log('Hello');
}

console.log(sayHello());

const anotherAdd: (n1: number, n2: number) => number = add;

const doubleNumber: (num: number) => number = num => num * 2;

//callback関数の型
function doubleAndHandle(num: number, cb: (num: number) => number): void {
  const doubleNum = cb(num * 2)
  console.log(doubleNum);
}

doubleAndHandle(2, doubleNum => {
  return doubleNum
});

//unknon型　←any型よりも少し厳しいもの
let unknonInput: unknown;
let anyInput: any;
let text: string;
unknonInput = 'hello';
unknonInput = 21;
unknonInput = true;
text = anyInput;
//unknown型はなんでも入れることができるが、使うときは注意
//使うときは以下のようにtypeofで使う型を保証する必要がある
if (typeof unknonInput === 'string') {
  text = unknonInput;
}

//never型
function error(message: string): never {
  throw new Error(message);
}
console.log(error('This is an error'));