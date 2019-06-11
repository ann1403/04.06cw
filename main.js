// let array = [];
// p = document.querySelector('.p');
// h1 = document.querySelector('.h1');
// div = document.querySelector('.div');

// function handleClick(event) {
//     alert(event.target.tagName);
// }
// p.addEventListener('click', handleClick);
// h1.addEventListener('click', handleClick);
// div.addEventListener('click', handleClick);

// function emmitToConsole(time) {
//     console.log(time)
// }

// function functionComp(callback, time) {
//     setTimeout(function() { callback(time) }, 5000);
// }

// functionComp(emmitToConsole, 'Text');

// function abe(a) {
//     console.log(a());
// }
// // abe(1);
// // abe([1, 3, 4, 5]);
// // abe({});
// abe(ac);

// function ac() {
//     return 'ac';
// }

// function square(a) {
//     console.log(a * a);
// }


// function cube(a) {
//     console.log(a * a * a);
// }
// cube(3);
// square(3);

// function display(cb) {
//     cb();
// }

// display(function() {
//     console.log('anonnimus');
// });

// (function() {
//     console.log('Я не работаю:(')
// }());
// let element = document.querySelector('.h1');
// let elem1 = document.querySelector('.p');

// function font(e) {
//     e.target.style.backgroundColor = 'red';
// }

// element.addEventListener('click', font);
// elem1.addEventListener('click', font);
// element.addEventListener('mouseover', function(e) {
//     e.target.style.fontSize = 60 + 'px';
// });


let square = document.querySelector('.square');
let square2 = document.querySelector('.square2');
let dot = document.querySelector('.dot');
square.addEventListener('mousemove', function(e) {

    let x = e.offsetX == undefined ? e.layerX : e.offsetX;
    let y = e.offsetY == undefined ? e.layerY : e.offsetY;

    if (x >= 10) {
        dot.style.left = (square.offsetWidth - x) + 'px';
    }
    if (y >= 10) {
        dot.style.top = (square.offsetHeight - y) + 'px';
    }
    console.log(x + 'x' + y);
})