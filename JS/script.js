"use strict";       //(директива) разработка проводится в современном режиме

let numberOfFilms;
    
function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    }
}

start();

function detectPersonalLevel() {
    if (0<numberOfFilms && numberOfFilms<10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (9<numberOfFilms && numberOfFilms<30) {
        console.log('Вы классический зритель');
    } else if (29<numberOfFilms) {
        console.log('Вы киноман!');
    } else {
        console.log('Что-то пошло не так');
    }   
}

detectPersonalLevel();

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genvers: [],
    privat: false,
};



function rememberMyFilms () {
    for (let i=0; i<2; i++) {
        const lastNameFilm = prompt("Один из последних просмотренных фильмов?", ''),
            points = +prompt("Насколько оцените его?", '');
        if (lastNameFilm != null && lastNameFilm != '' && lastNameFilm.length < 50 && points != null && points != '') {
            personaMovieDB.movies[lastNameFilm] = points;
        } else {
            i--;
        }
    }
}

rememberMyFilms();

function writeYourGender() {
    for (let i = 0; i < 3; i++) {
        const likeGenvers = prompt("Какой Ваш любимый жанр фильмов?");
        if (likeGenvers == '' || likeGenvers == null) {
            alert('Поле не должно оставаться пустым!');
            i--;
        } else {
            personaMovieDB.genvers = likeGenvers;
        }
    }
}

writeYourGender();

function showMyDB() {
    if (personaMovieDB.privat === false) {
        console.log(personaMovieDB);
    }
}

showMyDB();


