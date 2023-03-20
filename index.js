// var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
//
// var randomImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
//
// var randomImageSource = "images/" + randomImage; //images/dice1.png - images/dice6.png
//
// var img1 = document.querySelectorAll("img")[0];
//
// img1.setAttribute("src", randomImageSource);
//
//
// var randomNumber2 = Math.floor(Math.random() * 6) + 1;
//
// var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
//
// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);








var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(randomNumber1>randomNumber2){
  document.querySelector('H1').innerHTML="🕉️Player 1 Wins";
}
else if(randomNumber2>randomNumber1){
  document.querySelector('H1').innerHTML="🕉️Player 2 Wins";
}
else document.querySelector('H1').innerHTML="🕉️Draw🕉️";
