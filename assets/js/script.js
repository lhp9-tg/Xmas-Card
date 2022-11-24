//RegEx Chiffres & Lettres
RegEx1 = /^[A-Za-z0-9 &éèàù,!?ë.]{0,20}$/;

// Change text

document.querySelector('#inputTextUp').addEventListener('keyup', (element) => {
    // console.log(element.target.value)
    // document.querySelector('#input-text-haut').value
    if (!RegEx1.test(element.target.value)) {
        document.querySelector('.error').textContent = "Veuillez entrer jusqu'à 20 lettres ou chiffres";
    }
    else {
        document.querySelector('.error').textContent = "";
        document.querySelector('.textUp').innerHTML = element.target.value;
    }
})

document.querySelector('#inputTextDown').addEventListener('keyup', (element) => {
    if (!RegEx1.test(element.target.value)) {
        document.querySelector('.error').textContent = "Veuillez entrer jusqu'à 20 lettres ou chiffres";
    }
    else {
        document.querySelector('.error').textContent = "";
        document.querySelector('.textDown').innerHTML = element.target.value;
    }
});

//Change font

document.querySelector('#roboto').addEventListener('click', () => {
    let font = document.querySelector('.textUp');
    font.classList.remove('timesChoice')
    font.classList.remove('trebuchetChoice')
    font.classList.add('robotoChoice');
});

document.querySelector('#times').addEventListener('click', () => {
    let font = document.querySelector('.textUp');
    font.classList.remove('robotoChoice')
    font.classList.remove('trebuchetChoice')
    font.classList.add('timesChoice');
});

document.querySelector('#trebuchet').addEventListener('click', () => {
    let font = document.querySelector('.textUp');
    font.classList.remove('timesChoice')
    font.classList.remove('robotoChoice')
    font.classList.add('trebuchetChoice');
});

// 

document.querySelector('#roboto').addEventListener('click', () => {
    let font = document.querySelector('.textDown');
    font.classList.remove('timesChoice')
    font.classList.remove('trebuchetChoice')
    font.classList.add('robotoChoice');
});

document.querySelector('#times').addEventListener('click', () => {
    let font = document.querySelector('.textDown');
    font.classList.remove('robotoChoice')
    font.classList.remove('trebuchetChoice')
    font.classList.add('timesChoice');
});

document.querySelector('#trebuchet').addEventListener('click', () => {
    let font = document.querySelector('.textDown');
    font.classList.remove('timesChoice')
    font.classList.remove('robotoChoice')
    font.classList.add('trebuchetChoice');
});



// Change color

var colorWell
var defaultColor = "#0000FF";

window.addEventListener("load", startup, false);

function startup() {
    colorWell = document.querySelector("#colorWell");
    colorWell.value = defaultColor;
    colorWell.addEventListener("input", updateFirst, false);
    colorWell.addEventListener("change", updateAll, false);
    colorWell.select();
}

function updateFirst(event) {
    let color = document.querySelector(".container");
  
    if (color) {
        color.style.color = event.target.value;
    }
}

function updateAll(event) {
    document.querySelectorAll("color").forEach(function(color) {
        color.style.color = event.target.value;
    });
  }

//

// Change background

document.querySelector('.bg1').addEventListener('click', () => {
    let backgrd = document.querySelector('.container');
    backgrd.classList.remove('bg2')
    backgrd.classList.remove('bg3')
    backgrd.classList.add('bg1');
});

document.querySelector('.bg2').addEventListener('click', () => {
    let backgrd = document.querySelector('.container');
    backgrd.classList.remove('bg1')
    backgrd.classList.remove('bg3')
    backgrd.classList.add('bg2');
});

document.querySelector('.bg3').addEventListener('click', () => {
    let backgrd = document.querySelector('.container');
    backgrd.classList.remove('bg1')
    backgrd.classList.remove('bg2')
    backgrd.classList.add('bg3');
});

// Change image

let image = document.querySelector('.dynimg');

document.querySelector('.img1').addEventListener('click', () => {
    image.src = "assets/img/gift.png";
});

document.querySelector('.img2').addEventListener('click', () => {
    image.src = "assets/img/santa.png";
});

document.querySelector('.img3').addEventListener('click', () => {
    image.src = "assets/img/xmastree.png";
});