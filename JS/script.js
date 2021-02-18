"use strict";       //(директива) разработка проводится в современном режиме

let num = 20;

function showFirstMassage(text) {
    console.log(text);
    let num = 10;
}

showFirstMassage("Hi man");
console.log(num);


// function calc(a, b) {
//     return(a +b);
// }

// console.log(calc(4, 5));
// console.log(calc(8, 5));
// console.log(calc(4, 6));


function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);


//======Эта функуия создается только тогда, когда до нее доходит поток кода и ее можно вызвать только после объявления

const logger = function() {
    console.log("Heloo");
};

logger();       //logger в таком случае должно стоять после обьявления функции


//========Стрелочная функция(не имеет контекста вызова)

const calc = (a, b) => { 
    console.log('1');
    return a + b;
};


console.log(calc(4, 5));
console.log(calc(8, 5));
console.log(calc(4, 6));