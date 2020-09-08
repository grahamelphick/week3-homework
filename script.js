// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button


  var passwordLength = prompt("How many characters?");
  var characterCapital = confirm("Do you want to use capital letters?");
  var characterNum = confirm("Do you want to use numbers?");
  var characterSpecial = confirm("Do you want to use special characters?");


  var lettersCapArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var lettersLowArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var specCharArray = ["!", "#", "$", "%", "&", "'", "*", "+", "-", "/", "<", ">", "?", "~"]
  var numArray = []