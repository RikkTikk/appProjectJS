"use strict";       //(директива) разработка проводится в современном режиме

const str = "test";

// console.log(str[2] = 'd');      //Такая схема замены буквы НЕ работает

console.log(str.toUpperCase());
console.log(str);

//==========Поиск подстроки

const fruit = 'Some fruit';

console.log(fruit.indexOf('fruit'));

//====Вырезание

const logg = 'hello world';

console.log(logg.slice(6, 10));
console.log(logg.slice(6));

console.log(logg.substring(6, 10));     //Нельзя использовать отрец

console.log(logg.substring(6, 5));     //Вторым значение в скобках указывается длинна сколько нужно отрезать

//=====Медоды Math.

const num = 12.2;
console.log(Math.round(num));       //Округление

const test = '12.2px';
console.log(parseInt(test));        //перевод в другую систему счисления
console.log(parseFloat(test));      //Возврат строки в десятичном варианте



