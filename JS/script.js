"use strict";       //(директива) разработка проводится в современном режиме

//Task #1

//1)

let x = 5;

alert(++x);

//2)

alert([] + false - null + true);

//3)

let y = 1;

let x = y = 2;

alert(x);

//4)

console.log(alert([] + 1 + 2));

//5)

alert("1",[0]);

//6)

alert(2 && 1 && null && 0 && undefined);

//7)

let a = 5,
    b = 8;

alert(Boolean(!!(a && b) == (a && b)));


//8)

alert(null || 2 && 3 || 4);

//9)

let c = [1, 2, 3],
    d = [1, 2, 3];

alert(Boolean(c == d));

//10)

alert(+"Infinity");

//11)

alert(Boolean("Ёжик" > "яблоко"));

//12)

alert(0 || "" || 2 || undefined || true || false);
