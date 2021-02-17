"use strict";       //(директива) разработка проводится в современном режиме

// if (4 == 4) {
//     console.log('Ok!');
// } else {
//     console.log('Error');
// }



// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Ок!');
// }

// //Тернарный оператор

// (num === 50) ? console.log('Ok!') : console.log('Error');

const num = 50;

//Конструкция switch упрощенное использования if и всегда идет на только строгое сравнение (===)

switch (num) {
    case 49: 
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 50:
        console.log('В точку!');
        break;
    default:
        console.log('Не в это раз');
        break;
}