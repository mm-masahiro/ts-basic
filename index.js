"use strict";
var hello = 'hello';
console.log(hello);
function add(a, b) {
    return a + b;
}
var hasValue = true;
var count = 20;
console.log(hasValue);
if (hasValue === true) {
    console.log('hoge');
}
var person = {
    name: 'Masahiro',
    age: 23
};
console.log(person.name);
var masahiro = {
    'first': 'Morinaga',
    'last': 'Masahiro'
};
console.log(masahiro);
var fruits = ['Apple', 'Bannana', 'Grape'];
fruits.push('Melon');
console.log(fruits);
var book = ['business', 1500, false];
var coffeSize;
(function (coffeSize) {
    coffeSize["SHORT"] = "SHORT";
    coffeSize["TALL"] = "TALL";
    coffeSize["GRANDE"] = "GRANDE";
    coffeSize["VENTI"] = "VENTI";
})(coffeSize || (coffeSize = {}));
var coffee = {
    hot: true,
    size: coffeSize.TALL
};
//unionタイプ
var unionType = 10;
unionType = 'hello';
var unionTypes = ['hello', 23, 'acnosc'];
var apple = 'apple';
var clothSize = 'large';
var cloth = {
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
var anotherAdd = add;
var doubleNumber = function (num) { return num * 2; };
//callback関数の型
function doubleAndHandle(num, cb) {
    var doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(2, function (doubleNum) {
    return doubleNum;
});
//unknon型　←any型よりも少し厳しいもの
var unknonInput;
var anyInput;
var text;
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
