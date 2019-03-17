var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = colors[Math.floor(Math.random() * 6)];
var colorDisplay = document.getElementById("colorDisplay");
var msgDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function () {
        //grab color of clicked squares
        var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
        if (clickedColor === pickedColor) {
            msgDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            msgDisplay.textContent = "Try Again!";
        }
    });
}

function changeColors(color){
    for(var i =0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function generateRandomColors(num){
    var arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(rgbval());
    }
    return arr;
}

function rgbval() {
    var r = Math.floor(Math.random()* 256);
    var g = Math.floor(Math.random()* 256);
    var b = Math.floor(Math.random()* 256);
    return "rgb("+ r + ", " + g + ", " + b + ")";
}