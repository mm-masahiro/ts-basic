"use strict";
let hello = 'hello';
console.log(hello);
function add(a, b) {
    return a + b;
}
let hasValue = true;
let count = 20;
console.log(hasValue);
if (hasValue === true) {
    console.log('hoge');
}
const person = {
    name: 'Masahiro',
    age: 23
};
console.log(person.name);
let masahiro = {
    'first': 'Morinaga',
    'last': 'Masahiro'
};
console.log(masahiro);
const fruits = ['Apple', 'Bannana', 'Grape'];
fruits.push('Melon');
console.log(fruits);
const book = ['business', 1500, false];
var coffeSize;
(function (coffeSize) {
    coffeSize["SHORT"] = "SHORT";
    coffeSize["TALL"] = "TALL";
    coffeSize["GRANDE"] = "GRANDE";
    coffeSize["VENTI"] = "VENTI";
})(coffeSize || (coffeSize = {}));
const coffee = {
    hot: true,
    size: coffeSize.TALL
};
//unionタイプ
let unionType = 10;
unionType = 'hello';
let unionTypes = ['hello', 23, 'acnosc'];
const apple = 'apple';
let clothSize = 'large';
const cloth = {
    color: 'white',
    size: clothSize
};
//関数に型をつける
function Add(num1, num2) {
    return num1 + num2;
}
function sayHello() {
    console.log('Hello');
}
console.log(sayHello());
const anotherAdd = add;
const doubleNumber = num => num * 2;
//callback関数の型
function doubleAndHandle(num, cb) {
    const doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(2, doubleNum => {
    return doubleNum;
});
//unknon型　←any型よりも少し厳しいもの
let unknonInput;
let anyInput;
let text;
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
function error(message) {
    throw new Error(message);
}
console.log(error('This is an error'));
