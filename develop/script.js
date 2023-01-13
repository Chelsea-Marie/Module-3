// Assignment code here


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
  var specialCharacters = confirm("Do you want special characters?");
  if (!lowerCase && !upperCase && !numeric && !specialCharacters) {
    return alert ("Please choose at least one option");
  }
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
