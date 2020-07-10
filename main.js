const $ = (element) => document.getElementsByClassName(element);
const $id = (element) => document.getElementById(element);
const _ = (document) => document.querySelector.bind(document);

let mouse_x, mouse_y;

window.onmousemove = (event) => {
    mouse_x = event.clientX || event.pageX;
    mouse_y = event.clientY || event.pageY;
};

const ball = $("mouse_follow")[0];

let x = 0;
let y = 0;
let dx = 0;
let dy = 0;
let tx = 0;
let ty = 0;
let key = -1;

const follow_mouse = () => {
    key = requestAnimationFrame(follow_mouse);

    if (!x || !y) {
        x = mouse_x;
        y = mouse_y;
    } else {
        dx = (mouse_x - x) * 0.1;
        dy = (mouse_y - y) * 0.1;

        if (Math.abs(dx) + Math.abs(dy) < 0.1) {
            x = mouse_x;
            y = mouse_y;
        } else {
            x += dx;
            y += dy;
        }
    }

    ball.style.left = `${x}px`;
    ball.style.top = `${y}px`;
};

window.onload = () => follow_mouse();

$id("board").addEventListener("animationend", function () {
    this.style.animation = `hover 5s infinite`;
});