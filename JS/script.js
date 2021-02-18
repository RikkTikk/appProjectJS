"use strict";       //(директива) разработка проводится в современном режиме

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    
if (0<numberOfFilms && numberOfFilms<10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (9<numberOfFilms && numberOfFilms<30) {
    console.log('Вы классический зритель');
} else if (29<numberOfFilms) {
    console.log('Вы киноман!');
} else {
    console.log('Что-то пошло не так');
}   

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genvers: [],
    privat: false,
};

for (let i=0; i<2; i++) {
    const lastNameFilm = prompt("Один из последних просмотренных фильмов?", ''),
        points = +prompt("Насколько оцените его?", '');
    if (lastNameFilm != null && lastNameFilm != '' && lastNameFilm.length < 50 && points != null && points != '') {
        personaMovieDB.movies[lastNameFilm] = points;
    } else {
        i--;
    }
}

console.log(personaMovieDB);
