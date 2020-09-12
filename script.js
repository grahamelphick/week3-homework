// Link generate button
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button

var passwordLength
var characterLower
var characterCapital
var characterNum
var characterSpecial

// User selection criteria
function askCriteria() {
  console.log("button clicked")

  passwordLength = parseInt(prompt("How many characters would you like to use? Choose between 8 and 128"));

  console.log('Password Length: ' + passwordLength);

  while (
    isNaN(passwordLength) ||
    passwordLength < 8 || passwordLength > 128
  ) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    passwordLength = prompt("How many characters would you like to use? Choose between 8 and 128");
  }
  characterLower = confirm("Do you want to use lower case letters?")
  characterCapital = confirm("Do you want to use capital letters?");
  characterNum = confirm("Do you want to use numbers?");
  characterSpecial = confirm("Do you want to use special characters?");
  while (characterLower === false && characterCapital === false && characterNum === false && characterSpecial === false) {
    alert("Please choose at least one set of characters to include.");
    characterLower = confirm("Do you want to use lower case letters?")
    characterCapital = confirm("Do you want to use capital letters?");
    characterNum = confirm("Do you want to use numbers?");
    characterSpecial = confirm("Do you want to use special characters?");
  }
  writePassword()
}


// Password character options
var lettersCapArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var lettersLowArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specCharArray = ["!", "#", "$", "%", "&", "'", "*", "+", "-", "/", "<", ">", "?", "~"]
var numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

function generatePassword() {
  // How many characters in the password
  let allSelectedCharactersArr = []

  // Which arrays to use
  if (characterLower === true) {
    allSelectedCharactersArr = allSelectedCharactersArr.concat(lettersLowArray);
  }

  if (characterCapital === true) {
    allSelectedCharactersArr = allSelectedCharactersArr.concat(lettersCapArray);
  }

  if (characterNum === true) {
    allSelectedCharactersArr = allSelectedCharactersArr.concat(numArray);
  }

  if (characterSpecial === true) {
    allSelectedCharactersArr = allSelectedCharactersArr.concat(specCharArray);
  }

  var generatedPassword = "";

  for (i = 0; i < passwordLength; i++) {
    generatedPassword += allSelectedCharactersArr[Math.floor(Math.random() * allSelectedCharactersArr.length)]
    console.log(generatedPassword)
  }
  return generatedPassword
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.textContent = password;
  console.log(password)
}

generateBtn.addEventListener("click", askCriteria)