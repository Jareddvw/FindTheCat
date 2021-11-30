
let pic1 = document.querySelector("#pic1")
let pic2 = document.querySelector("#pic2")
let pic3 = document.querySelector("#pic3")
let pic4 = document.querySelector("#pic4")
let pic5 = document.querySelector("#pic5")
let pic6 = document.querySelector("#pic6")

let line2 = document.querySelector("#line2")

var clickCount = 0;
var textShown = false;

function hideButton(button) {
    let p = 1;
    let fadeout = setInterval(function () {
        if (p < 0.1){
            button.style.opacity = 0;
            clearInterval(fadeout);
            return;
        }
        button.style.opacity = p;
        p -= p * 0.05;
    }, 25);
    clickCount ++;
}

function showText(phrase) {
    let i = 0.1;  
    let fadein = setInterval(function () {
        if (i >= 1){
            clearInterval(fadein);
            return;
        }
        phrase.style.opacity = i;
        i += i * 0.1;
    }, 50);
    textShown = true;
}

function cheddarLeft () {
    if (clickCount >= 6){
        window.location.replace("index.html")
    }
}

function hidePic(pic) {
    if (!textShown) {
        showText(line2);
    }
    if (pic !== 1){
        hideButton(pic)
        pic.classList.add("cursorchange")
    }
    cheddarLeft()
}

function hidePic1 () {
    hidePic(pic1)
    pic1 = 1
}

function hidePic2 () {
    hidePic(pic2)
    pic2 = 1
}
function hidePic3 () {
    hidePic(pic3)
    pic3 = 1
}
function hidePic4 () {
    hidePic(pic4)
    pic4 = 1
}
function hidePic5 () {
    hidePic(pic5)
    pic5 = 1
}
function hidePic6 () {
    hidePic(pic6)
    pic6 = 1
}


pic1.onclick = hidePic1;
pic2.onclick = hidePic2;
pic3.onclick = hidePic3;
pic6.onclick = hidePic6;
pic4.onclick = hidePic4;
pic5.onclick = hidePic5;