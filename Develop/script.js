// Assignment Code
var pass = "";
function writePassword() {
  var plength = prompt("How many characters would you like your password to be?");
  if (plength < 8 || plength > 128) {
    alert("Password length must be between 8-128!");
    return;
  }
  if (plength >= 8 && plength <= 128) {
    var uppers = confirm("Would you like uppercase letters?");
    var lowers = confirm("Would you like lowercase letters?");
    var numbers = confirm("Would you like numbers?");
    var symbols = confirm("would you like special charactrers?");
  }
  if (uppers) password += (uppers = "ABCDEFGHIJKLMNOPQURSTUVWXYZ");
  if (lowers) password += (lowers = "abcdefghijklmnopqrstuvwxyz");
  if (numbers) password += (nummbers = "0123456789");
  if (symbols) password += (symbols = "!@#$%^&*()-_=+[]{};:'<>/?'");

  var password = generatePassword(pass);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(password);
}
function generatePassword(key) {
  var generatedKey = "";
  key, pass;
  for (i = 0; i < pass.length; i++) {
    generatedKey += key.charAt(Math.floor(Math.random() * pass.length));
  }
}
var generateBtn = document.querySelector("#generate");



// Write password to the #password input


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
