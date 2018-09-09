```
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
```
