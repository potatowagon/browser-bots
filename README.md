# mousehunt_bot
auto toot the horn

//works after focus on horbutton using dev tool
var h = document.getElementsByClassName("hornbutton");
if (h.length != 0) 
{
    h[0].firstChild.click();
}

//loops are jammed somehpw
setInterval(function(){
    if (h.length != 0) 
    {
        h[0].firstChild.click();
    } }, 1000);
