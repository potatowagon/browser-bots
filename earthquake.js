
var minWidth = 0;

class WaveyDivy {
    constructor(div, intervalTiming) {
        this.div = div;
        this.xPos = this.div.getBoundingClientRect().x;
        this.intervalTiming = intervalTiming;
        this.dir = "right";
    }

    move() {
        if (this.dir === "right") {
            if (this.div.getBoundingClientRect().right <= Window.outerWidth) {
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
        setInterval(function () { this_.move() }, this.intervalTiming);
    }
}

var divs = document.getElementsByTagName("div");
var base = 100;
var space = 5;
var maxSpace = 1000;
var waveyDivys = [];
var delay = 0;
var delaySpace = 200;
for (let i = 0; i < divs.length; i++) {
    t = base + ((space * i) % maxSpace);
    waveyDivys[i] = new WaveyDivy(divs[i], t);
    setTimeout(waveyDivys[i].start(), delay + ((delaySpace * i ) % 5000));
}
