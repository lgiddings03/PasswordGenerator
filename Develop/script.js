// Assignment Code
function writePassword() {
  var plength = prompt("How many characters would you like your password to be?");
  if (plength < 8 || plength > 128) {
    alert("Password length must be between 8-128!");
    return;
  }
  else {
    var uppers = confirm("Would you like uppercase letters?");
    var lowers = confirm("Would you like lowercase letters?");
    var numbers = confirm("Would you like numbers?");
    var symbols = confirm("would you like special charactrers?");
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function generatePassword(plength,password) {
  var plength = "";
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.plength;
  for ( var i = 0; i < plength; i++ ) {
     plength += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return plength;
}
var generateBtn = document.querySelector("#generate");



// Write password to the #password input


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
