const pwOne = document.getElementById("pwOne");
const pwTwo = document.getElementById("pwTwo");
const pwThree = document.getElementById("pwThree");
const pwFour = document.getElementById("pwFour");

const generateEl = document.getElementById("generate");

function getRandomChar() {
  return String.fromCharCode(Math.floor(Math.random() * 94) + 33);
}

function generatedPassword() {
  let generatedpw = "";
  for (let i = 0; i < 12; i++) {
    generatedpw += getRandomChar();
  }
  return generatedpw;
}

generateEl.addEventListener("click", function () {
  pwOne.innerText = generatedPassword();
  pwTwo.innerText = generatedPassword();
  pwThree.innerText = generatedPassword();
  pwFour.innerText = generatedPassword();
});

// function getRandomChar() {
//   return String.fromCharCode(Math.floor(Math.random() * 94) + 33);
// }

// function generatedPassword() {
//   let generatedPW = "";

//   for (let i = 0; i < 12; i++) {
//     generatedPW += getRandomChar();
//   }
//   return generatedPW;
// }
// console.log(generatedPassword());
