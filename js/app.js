var start = new Date().getTime();

document.getElementById("shape").onclick = function()
{
    var end = new Date().getTime();
    document.getElementById("shape").style.display = "none";
    var duration = (end - start)/1000;
    document.getElementById("time").innerHTML = duration + "s";
    setTimeout(doStuffToShape(), 500);
}
function doStuffToShape()
{
    //randomizing size
    var width=Math.floor(Math.random()*200 + 100);
    document.getElementById("shape").style.width = width + "px";
    document.getElementById("shape").style.height = width + "px";


    //randomizing color
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) 
    {
        color += letters[Math.floor(Math.random() * 16)];
    }
    document.getElementById("shape").style.backgroundColor = color;


    //randomizing position
    var top = Math.floor(Math.random()*300 + 100);
    var left = Math.floor(Math.random()*800 + 100);
    document.getElementById("shape").style.top = top + "px";
    document.getElementById("shape").style.left = left + "px";


    //randomizing shape
    if(Math.random()>0.5)
    {
        document.getElementById("shape").style.borderRadius = "50%";
    }
    else
    {
        document.getElementById("shape").style.borderRadius = "0%";
    }

    //making it appear
    start = new Date().getTime();
    document.getElementById("shape").style.display = "block";
}