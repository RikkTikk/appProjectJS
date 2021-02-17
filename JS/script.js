"use strict";       //(директива) разработка проводится в современном режиме

//создание обьекта

// const obj = {
//     name: "Joe",
//     age: 25,
//     isMarried: false,
// };

// // console.log(obj.name);  //обращение к конкретному значению объекта происходит через точку или как показано снизу
// console.log(obj["name"]);

// let arr = ['plum.png', 'orange.jpg', 6, 'apple.bpm']
// console.log(arr[0]);

//Создание переменной в которую записывается значение true/false

// const result = confirm("Are you here?");
// console.log(result);

//Похожее по типу запись только с полем для ввода

// const answer = prompt("Вам есть 18?", "18");
// console.log(typeof(answer));

// const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваша фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// console.log(typeof(answers));


//Интерполяция

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);  //ТАкой прием используется с косыми кавычками

// const user = "Ivan";

// alert(`Привет, ${user}`)



//Операторы JS

// console.log('arr' + " - object");
// console.log(4 + " - object");       //Конкатинация
// console.log(4 + +"5");      //Доп плюс перед 5 называется унарным и преобразует строку в число


//Инкремент и декремент

// let incr = 10,
//     decr = 10;

// incr++;     //Когда плюсы ставят до переменной - префиксный, после - постфиксный
// decr--;

// console.log(incr++);
// console.log(--decr);


//Операторы равенства

// console.log(2*4 == '8');        //Сравниваются по значению а не по типу данных
// console.log(2*4 === '8');       //Строгое равно

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", ''),
    lastNameFilm1 = prompt("Один из последних просмотренных фильмов?", ''),
    points1 = +prompt("Насколько оцените его?", ''),
    lastNameFilm2 = prompt("И еще один...", ''),
    points2 = +prompt("Насколько оцените этот фильм?", '');

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genvers: [],
    privat: false,
};

personaMovieDB.movies[lastNameFilm1] = points1;
personaMovieDB.movies[lastNameFilm2] = points2;

console.log(personaMovieDB);
// console.log('Количество просмотренных фильмов - ' + obj.count);
// console.log('Просмотренные фильмы и оценка:');
// console.log(lastNameFilm1 + ' - ' + points1);
// console.log(lastNameFilm2 + ' - ' + points2);


