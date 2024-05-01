



let time = 250,
    currentImageIndex = 0,
    images = document
                .querySelectorAll("#slider img")
    max = images.length;

function nextImage() {

    images[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected")
}

function start() {
    setInterval(() => {
        // troca de image
        nextImage()
    }, time)
}

window.addEventListener("load", start);



// slider2


let Atime = 250,
    AcurrentImageIndex = 0,
    Aimages = document
                .querySelectorAll("#abc2 img")
    Amax = Aimages.length;

function AnextImage() {

    Aimages[AcurrentImageIndex]
        .classList.remove("selec2")

    AcurrentImageIndex++

    if(AcurrentImageIndex >= Amax)
        AcurrentImageIndex = 0

    Aimages[AcurrentImageIndex]
        .classList.add("selec2")
}

function Astart() {
    setInterval(() => {
        // troca de image
        AnextImage()
    }, Atime)
}

window.addEventListener("load", Astart);


// div3

let BAtime = 250,
    BAcurrentImageIndex = 0,
    BAimages = document
                .querySelectorAll("#zxc img")
    BAmax = BAimages.length;

function BAnextImage() {

    BAimages[BAcurrentImageIndex]
        .classList.remove("zxc2")

    BAcurrentImageIndex++

    if(BAcurrentImageIndex >= BAmax)
        BAcurrentImageIndex = 0

    BAimages[BAcurrentImageIndex]
        .classList.add("zxc2")
}

function BAstart() {
    setInterval(() => {
        // troca de image
        BAnextImage()
    }, BAtime)
}

window.addEventListener("load", BAstart);





'use strict';


const abacate = document.querySelector('.btn');

abacate.addEventListener('click', function () {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if (className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }
    console.log('current class name: ' + className);
});
