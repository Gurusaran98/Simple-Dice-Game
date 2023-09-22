//random number for image 1
var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

//Random number convert to image1
var randomImage1 = "./images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", randomImage1);

//Random number for image 2
var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

//Random number convert to image2
var randomImage2 = "./images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", randomImage2);

//In match player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 win ! 🏆";
}

//In match player 2 wins
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "🏆 Player 2 win !";
}

//If match is draw
else {
  document.querySelector("h1").innerHTML = "Draw !";
}

//reload the page for result
function refreshPage() {
  window.location.reload();
}
