"use strict";       //(директива) разработка проводится в современном режиме

const personalMovieDB = {
    count: {},
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        for (let k = 0; k < 1; k++) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');   
            if (0<personalMovieDB.count && personalMovieDB.count<10) {
                console.log('Просмотрено довольно мало фильмов');
            } else if (9<personalMovieDB.count && personalMovieDB.count<30) {
                console.log('Вы классический зритель');
            } else if (29<personalMovieDB.count) {
                console.log('Вы киноман!');
            } else {
                alert('Введите число!');
                k--;
            }
        }
    },
    rememberMyFilms: function() {
        for (let i=0; i<2; i++) {
            personalMovieDB.movies = prompt("Один из последних просмотренных фильмов?", '');
            if (personalMovieDB.movies == '' || personalMovieDB.movies == null) {
                alert("Поле не должно оставаться пустым!");
                i--;
            } else if (personalMovieDB.movies.length>50) {
                alert("Название фильма не должно превышать 50 символов!");
                i--;
            } else {
                for (let j = 0; j < 1; j++) {
                    const points = +prompt("Оцените просмотренный фильм", '');
                    if (points == '' || points == null || isNaN(points)) {
                        alert('Поле не должно оставаться пустым!');
                        j--;
                    } else{
                        personalMovieDB.movies = points;
                    }   
                } 
            }
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 4; i++) {
            personalMovieDB.genres.push(prompt(`Введите ваши любимые жанры через пробел`).toLowerCase());
            if (personalMovieDB.genres == ' ' || personalMovieDB.genres == null) {
                alert('Поле не должно оставаться пустым!');
                i--;
            } else {
                personalMovieDB.genres.sort();
            } 
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр #${i + 1} - это ${item}`);
        });
    }       
};

    // for (let i = 1; i <= 3; i++) {
    //         let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            // if (genre == '' || genre == null) {
            //     alert('Поле не должно оставаться пустым!');
            //     i--;
            // } else {
            //     personalMovieDB.genres[i - 1] = genre;
            // } 
    //     }
    //     personalMovieDB.genres.forEach((item, i) => {
    //         console.log(`Любимый жанр #${i + 1} - это ${item}`);
    //     });
    // }