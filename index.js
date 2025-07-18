var randomnumber1=Math.random();
randomnumber1=randomnumber1*6 + 1;
randomnumber1=Math.floor(randomnumber1);

var imageselector1 = "images/dice" + randomnumber1 + ".png";


var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",imageselector1);

var randomnumber2 =Math.floor(Math.random()*6 +1);

var imageselector2 = "images/dice" + randomnumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",imageselector2);


if(randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML = "player 1 wins!!";
}
else if(randomnumber1 < randomnumber2){
    document.querySelector("h1").innerHTML = "player 2 wins!!";
}
else if(randomnumber1 == randomnumber2){
    document.querySelector("h1").innerHTML = "it's a draw!!";
}