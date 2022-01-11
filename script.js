

const btn = document.getElementById('button');
const rainbow = ['yellowgreen','sandybrown','turquoise','palegreen','cornflowerblue','white','lavenderblush'];

function change() {      
document.body.style.background = rainbow[Math.floor(7 * Math.random())];
}

btn.addEventListener('click', change);


function picture() {

    const image = document.getElementById("myImage");
    
    if (image.src === "sources/Main.png") {
      image.src = "sources/What.png";
    } else {
      image.src = "sources/Main.png";
    } };

const pro = document.getElementById("intro-pic");
pro.addEventListener('click', change);
