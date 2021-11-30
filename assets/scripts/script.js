

let button1 = document.querySelector("#button1")
let button2 = document.querySelector("#button2")
let button3 = document.querySelector("#button3")
// let background = document.querySelector(".container")
let sentences = document.querySelector(".sentences")
let under1 = document.querySelector("#under1")
let under2 = document.querySelector("#under2")
let under3 = document.querySelector("#under3")
let body = document.querySelector("body")


function hideButton(button) {
    let p = 1;
    let fadeout = setInterval(function () {
        if (p < 0.1){
            button.style.opacity = 0;
            clearInterval(fadeout);
            return;
        } else {
            button.style.opacity = p;
            p -= p * 0.05;
        }
    }, 25);
    button.classList.add("cursorchange")
}

function showText(phrase) {
    let i = 0.1;  
    let fadein = setInterval(function () {
        if (i >= 1){
            clearInterval(fadein);
            return;
        } else {
            phrase.style.opacity = i;
            i += i * 0.1;
        }
    }, 50);
}

function changeBackgroundColor (color) {
    body.style.backgroundColor = color;
}

function hideButton1 () {
    if (button1 !== 1) {
        hideButton(button1);
        changeBackgroundColor ("#F9AEFF");
        showText(under1);
        button1 = 1;
    }
}

function hideButton2 () {
    if (button2 !== 1) {
        hideButton(button2);
        changeBackgroundColor ("#AEFFB6");
        showText(under2);
        button2 = 1;
    }
}

function hideButton3 () {
    if (button3 !== 1) {
        hideButton(button3);
        changeBackgroundColor ("#FFFCAE");
        showText(under3);
        button3 = 1;
    }
}

button1.onclick = hideButton1;
button2.onclick = hideButton2;
button3.onclick = hideButton3;
