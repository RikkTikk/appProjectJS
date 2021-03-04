"use strict";       //(директива) разработка проводится в современном режиме

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');

//Изменение стилей элементов

box.style.backgroundColor = 'blue';
box.style.width = '500px';

box.style.cssText = `background-color: blue; width: ${num}`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

//основные методы для работы с эл страницы

const div = document.createElement('div');      //Сохрангяет только внутри JS

const text = document.createTextNode('Тут был я');

//Действие с классом

div.classList.add('black');

wrapper.append(div);     //вставляет в конец родителя


wrapper.prepend(div);       //в начало

hearts[0].before(div);
hearts[0].after(div);

circles[0].remove();        //Удаление

hearts[0].replaceWith(circles[0]);      //Замена элементов

// Устаревшие версии
wrapper.appendChild(div);

wrapper.insertBefore(div, hearts[1]);

wrapper.removeChild(hearts[1]);

wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML = "<h1>Hello World!</h1>";     //Можкт работать как с текстом так и со структурой

div.textContent = 'Hello';      //Работает только с текстом

div.insertAdjacentHTML("ввксти 1/4 знаячений", '<h2>Hello</h2>');       //Возможность вставить элемент внутри HTML