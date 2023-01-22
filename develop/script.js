// Assignment code here
const capitalLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L","M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "/", "-", ".", ","]
var selected = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
 
  var passwordLength = prompt("Your password needs to be between 8 and 128 characters");
  var lowerCase = confirm("Do you want lowercase letters?");
  var upperCase = confirm("Do you want uppercase letters?");
  var numeric = confirm("Do you want numbers?");
  var special = confirm("Do you want special characters?");
  if (!lowerCase && !upperCase && !numeric && !special) {
    return alert ("Please choose at least one option");
  }
// if statement to check if password length is within range
 if (passwordLength<8||passwordLength>128){
  alert("A valid password must be between 8 and 128 characters long. Please try again.");
 }

  selected = [];

  if(lowerCase == true) {
    selected = [...selected, ...lowerCaseLetters]
  }

  if(upperCase == true) {
    selected = [...selected, ...capitalLetters]
  }

  if(numeric == true) {
    selected = [...selected, ...numbers]
  }

  if(special == true) {
    selected = [...selected, ...specialCharacters]
  }

  var password = ""

  for(i = 0; i < passwordLength; i++) {
    var randomChar = selected[Math.floor(Math.random() * selected.length)];
    password = password + randomChar;
  }

  return password
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
