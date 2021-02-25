"use strict";       //(директива) разработка проводится в современном режиме

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};

options.makeTest();

// console.log(options["colors"]["border"])

// console.log(options.name);

// delete options.name;

// console.log(options);

//Перебор свойств внутри обьекта

// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in (options[key])) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }
// }

//Подсчет свойств внутри обьекта

//1) console.log(Object.keys(options).length);

// 2) let counter = 0;
// for (let key in options) {
//     // if (typeof(options[key]) === 'object') {
//     //     for (let i in (options[key])) {
//     //         console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//     //         counter++;
//     //     }
//     // } else {
//     //     console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     // }
// }

// console.log(counter);

//Функции и методы которые есть внутри обьекта

