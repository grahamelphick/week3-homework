// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", askCriteria);

var passwordLength
var characterCapital
var characterNum
var characterSpecial

// User selection criteria
function askCriteria() {
  passwordLength = prompt("How many characters?");
  characterCapital = confirm("Do you want to use capital letters?");
  characterNum = confirm("Do you want to use numbers?");
  characterSpecial = confirm("Do you want to use special characters?");
}

// Password character options
var lettersCapArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var lettersLowArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specCharArray = ["!", "#", "$", "%", "&", "'", "*", "+", "-", "/", "<", ">", "?", "~"]
var numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

function generatePassword() {
  // How many characters in the password
  parseInt(passwordLength);
  let generatedPassword = "";
  let allSelectedCharactersArr = []
  // Which arrays to use
  if (characterCapital === true) {
    allSelectedCharactersArr.concat(lettersCapArray)
  }

  if (characterNum === true) {
    allSelectedCharactersArr.concat(numArray)
  }

  if (characterSpecial === true) {
    allSelectedCharactersArr.concat(specCharArray)
  }

  for (i = 0; i <= passwordLength; i++) {
    generatedPassword += allSelectedCharactersArr[Math.floor(Math.random() * allSelectedCharactersArr.length)]
  }
  return generatedPassword;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

writePassword()