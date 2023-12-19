//Kausik - AI

// Period VII

//December 11th, 2023

/*A christmas card*/
  



//musik

var au = new Audio("Music/AllIWantForChristmas.mp3");
au.controls = true;
document.body.appendChild(au);

//the snowfall, moon, el fuego 

var fire = document.createElement("img")
var snowfall = document.createElement("img")
var moon     = document.createElement("img")
var aFloatingRock = document.createElement("div");

snowfall.setAttribute.backgroundImage      = "1000px" 
snowfall.setAttribute.top                  = "600px"  
snowfall.src                               = "Images/FallingSnowTransparent.gif"

moon.setAttribute.backgroundImage          = "1000px"
moon.src                                   = "Images/moon.gif"

aFloatingRock.setAttribute.bottom          = "0px"
aFloatingRock.setAttribute.height          = "400px"
aFloatingRock.setAttribute.width           = "500px"

fire.setAttribute.height = "400px"
fire.setAttribute.width = "500px"
fire.setAttribute.top = "700px" 
fire.src = "Images/fire.gif"

document.body.append(fire)
document.body.append(moon)
document.body.append(snowfall)

// figura

// The Words


var t  = document.createElement("h1");
var t2 = document.createElement("h1")
var t3 = document.createElement("h1")

t.innerHTML  = "Happy Holidays!";
t2.innerHTML = "AAAAAAA!";
t3.innerHTML = "Türkiye";
t.style.color  = "white"; // Set text color to red
t2.style.color = "white";
t3.style.color = "white";
t.style.fontSize  = "4em"; // Set font size to a large value
t2.style.fontsize = "2em"; 
t3.style.fontsize = "2em";
t.style.fontFamily  = "Arial, sans-serif"; // You can replace "Arial, sans-serif" with your preferred font
t2.style.fontFamily = "Arial, sans-serif";
t.style.position  = "absolute"; // Set position to absolute
t2.style.position = "absolute"; 
t3.style.position = "absolute";
t.style.right = "0"; // Align to the right
t2.style.left = "0";
t3.style.left = "5";
t.style.top     = "0"; // Align to the top (adjust as needed)
t2.style.bottom = "0"; 
t3.style.bottom = "5";
document.body.append(t);
document.body.append(t2);
document.body.append(t3);




// Background Color

document.body.style.backgroundColor = "#f04141"; // Replace "#abcdef" with your desired color code

// figura

var hat           = document.createElement("div");
var hat2          = document.createElement("div");
var head          = document.createElement("div");
var bloing        = document.createElement("div");
var bimbo         = document.createElement("div");

hat.style.width           = "0px";
hat2.style.width          = "0px";
bloing.style.width        = "100px";
bimbo.style.width         = "0px";
hat.style.height    = "0px";
hat2.style.height   = "0px";
bloing.style.height = "100px";
bimbo.style.height  = "0px"

hat.style.border = "green 200px solid"
hat.style.position = "absolute ";
hat.style.top = "300px"
hat.style.left = "775px"

bimbo.style.border   = "green 50px solid"
bimbo.style.position = "absolute";
bimbo.style.bottom   = "75px"
bimbo.style.left     = "0px" 

hat2.style.borderLeft = "100px solid transparent";
hat2.style.borderRight = "100px solid transparent";
hat2.style.borderBottom = "200px solid white";
hat2.style.position = "absolute "
hat2.style.top = "320px"
hat2.style.left = "805px"

head.style.width = "500px"
head.style.height = "500px"
head.style.backgroundColor="#c0d442"
head.style.borderRadius= "50%"
head.style.position = "absolute"
head.style.top = "400px"
head.style.left = "875px"

bloing.style.backgroundColor = "#ff0004";
bloing.style.borderRadius = "10px";

document.body.append(hat)
document.body.append(hat2)
document.body.append(head);
document.body.append(bloing);
document.body.append(bimbo)
