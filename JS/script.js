"use strict";       //(директива) разработка проводится в современном режиме

let str = "some";
let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1,2,3]);

const solider = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
};

const john = {
    health: 100
};

//Старый формат

// john.__proto__ = solider;

// // console.log(john.armor);

// john.sayHello();

//Новый формат

Object.setPrototypeOf(john, solider);
john.sayHello();