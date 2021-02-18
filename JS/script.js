"use strict";       //(директива) разработка проводится в современном режиме

const personaMovieDB = {
    count: {},
    movies: {},
    actors: {},
    genvers: [],
    privat: false,
};

for (let k = 0; k < 1; k++) {
    const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');   
    if (0<numberOfFilms && numberOfFilms<10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (9<numberOfFilms && numberOfFilms<30) {
        console.log('Вы классический зритель');
    } else if (29<numberOfFilms) {
        console.log('Вы киноман!');
    } else {
        alert('Что-то пошло не так');
        k--;
    }
    personaMovieDB.count = numberOfFilms;
}

for (let i=0; i<2; i++) {
    const lastNameFilm = prompt("Один из последних просмотренных фильмов?", '');
    if (lastNameFilm == '' || lastNameFilm == null) {
        alert("Поле не должно оставаться пустым!");
        i--;
    } else if (lastNameFilm.length>50) {
        alert("Название фильма не должно превышать 50 символов!");
        i--;
    } else {
        for (let j = 0; j < 1; j++) {
            const points = +prompt("Оцените просмотренный фильм", '');
            if (points == '' || points == null || points == isNaN) {
                alert('Пусто');
                j--;
            } else{
                personaMovieDB.movies[lastNameFilm] = points;
            }   
        } 
    }
}

console.log(personaMovieDB);
