"use strict";       //(директива) разработка проводится в современном режиме

const arr = [1, 2, 13, 6, 28];

arr.sort(compareNum);   //Использает алгоритм быстрой сортировки
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// arr.pop();  //Удаляет элемент к конце массива
// arr.push(10);   //Добавление элемента в конец массива


// console.log(arr);

//Перебор  элементов

// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`)
// });

//

// const str = prompt("", "");
// const products = str.split(", ");
// //Метод сортировки виде строки
// products.sort();
// console.log(products.join('; '));

//Псевдомассивы - не имеют методов, это просто структура которая хранит данные по порядку