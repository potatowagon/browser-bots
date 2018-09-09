var minWidth = 0;

class WaveyDivy {
    constructor(div, speed) {
        this.div = div;
        this.xPos = this.div.getBoundingClientRect().x;
        this.speed = speed;
        this.dir = "right";
    }

    move() {
        if (this.dir === "right") {
            if (this.div.getBoundingClientRect().right <= document.documentElement.clientWidth *1.2) {
                this.xPos++;
                this.div.style.left = this.xPos + "px";
            }
            else {
                this.xPos --;
                this.div.style.left = this.xPos + "px";
                this.dir = "left";
            }
        }
        else if (this.dir === "left") {
            if (this.div.getBoundingClientRect().x > minWidth) {
                this.xPos--;
                this.div.style.left = this.xPos + "px";
            }
            else {
                this.xPos ++;
                this.div.style.left = this.xPos + "px";
                this.dir = "right";
            }
        }
    }

    start() {
        var this_ = this;
        this.div.style.left = this.xPos + "px";
        setInterval(function () { this_.move() }, this.speed);
    }
}

var divs = document.getElementsByTagName("*");
var speed = 1;
var varience = 1;
var waveyDivys = [];
var delay = 0;
var delaySpace = 200;
for (let i = 0; i < divs.length; i++) {
    waveyDivys[i] = new WaveyDivy(divs[i], speed + (varience * i ) % 5);
    setTimeout(waveyDivys[i].start(), delay + ((delaySpace * i ) % 50));
}

var deg = 0;
setInterval(function() {
document.getElementsByTagName("body")[0].style.background = "black";
}, 2000);
setInterval(function() {
document.getElementsByTagName("body")[0].style.background = "yellow";
}, 4000);
setInterval(function() {
deg ++;
document.getElementsByTagName("body")[0].style.transform = "rotate("+deg+"deg)";
}, 200);
