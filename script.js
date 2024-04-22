let red = document.getElementById('rangeRed').value;
let green = document.getElementById('rangeGreen').value;
let blue = document.getElementById('rangeBlue').value;
let color = 'rgb(' + red + ',' + green + ',' + blue + ')';
let hue = document.getElementById("hue").value;
let saturation = document.getElementById("saturation").value;
let lightness = document.getElementById("lightness").value;

function changeColor() {
    red = document.getElementById('rangeRed').value;
    green = document.getElementById('rangeGreen').value;
    blue = document.getElementById('rangeBlue').value;
    color = 'rgb(' + red + ',' + green + ',' + blue + ')';
    let sq = document.getElementsByClassName('selectedColor')[0];
    sq.style.background = color;
    document.getElementById('colorOutput').innerHTML = ": " + color;
}

clrs = ["red", "blue", "white", "black", "green", "yellow", "limegreen", "purple"]

function changeColor2(it) {
    let sq = document.getElementsByClassName('selectedColor')[0];
    sq.style.background = clrs[it];
    document.getElementById('colorOutput').innerHTML = ": " + clrs[it];
}

let goneColors = document.getElementsByClassName('colorForSelect');

function saveColor() {
    const newLi = document.createElement('li');
    const newSq = document.createElement('div');
    newSq.style.width = '50px';
    newSq.style.height = '50px';
    newSq.style.background = color;
    newLi.appendChild(newSq);
    newLi.classList.add('colorForSelect');
    const listOfColors = document.getElementById("user-colors");
    listOfColors.appendChild(newLi);
    clrs.push(color);
    goneColors = document.getElementsByClassName('colorForSelect');

    for(let i = 0; i < goneColors.length; i++){
        goneColors[i].addEventListener("click", function(){
            changeColor2(i);
        });
    }
}


function modifyColor() {
    let currentRed = red;
    let currentGreen = green;
    let currentBlue = blue;
    
    hue = document.getElementById("hue").value;
    saturation = document.getElementById("saturation").value;
    lightness = document.getElementById("lightness").value;
    let sq = document.getElementsByClassName('selectedColor')[0];
    sq.style.background = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    
    color = `rgb(${currentRed}, ${currentGreen}, ${currentBlue})`;
    document.getElementById('colorOutput').innerHTML = ": " + color;
}



for(let i = 0; i < goneColors.length; i++){
    goneColors[i].addEventListener("click", function(){
        changeColor2(i);
    });
}

let button = document.getElementsByClassName('saveButton')[0];
button.addEventListener('click', saveColor);

document.getElementById('rangeRed').addEventListener('input', changeColor);
document.getElementById('rangeGreen').addEventListener('input', changeColor);
document.getElementById('rangeBlue').addEventListener('input', changeColor);

document.getElementById('hue').addEventListener('input', modifyColor);
document.getElementById('saturation').addEventListener('input', modifyColor);
document.getElementById('lightness').addEventListener('input', modifyColor);
