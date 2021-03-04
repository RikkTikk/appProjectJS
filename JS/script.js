"use strict";       //(директива) разработка проводится в современном режиме

//Динамическая типизация - возможность одного типа данных превращаться в другой

//To string

//1)

console.log(typeof(String(null)));
console.log(typeof(String(4)));

//2)
console.log(typeof(null + ''));

const num = 5;

console.log("https://vk.com/catalog/" + num);       //Старая версия написания кода(сейчас исп интерполяция)

const fontSize = 26 + "px";

//To Number

//1)

console.log(typeof(Number('4')));       //Уже не исполльзуют

//2)

console.log(typeof(+('5')));        //Современное исполнение через унарный +

//3)
console.log(typeof(parseInt('15px', 10)));


let answer = +prompt("Hello", "");

//To Boolean

//1)

// 0, '', null, undefined, NaN === false

let switcher = null;

if (switcher) {
    console.log('Working...');
}

switcher = 1;

if (switcher) {
    console.log('Working...');
}

//2)
console.log(typeof(Boolean('4')));

//3)
console.log(typeof(!!"44444"));