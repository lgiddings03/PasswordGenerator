// Assignment Code
var generateBtn = document.querySelector("#generate");
var length = Number(prompt ("How many characters would you like your password to be?"));
while (isNaN(legth)|| lenght < 8 || lenght >128) lenght = Numbers (prompt "length must be between 8-128 characters")); 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
