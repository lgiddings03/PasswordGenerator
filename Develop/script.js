// Assignment Code
var generateBtn = document.querySelector("#generate");
var length = Number(prompt("How many characters would you like your password to be?"));
while (isNaN(length) || length < 8 || lenght > 128) length = Numbers(prompt "length must be between 8-128 characters"));

var uppers = confirm("Would you like uppercase letters?");
var lowers = confirm("Would you like lowercase letters?");
var numbers = confirm("Would you like numbers?");
var symbols = confirm("would you like special charactrers?");

while (!uppers && !lowers && !numbers && !symbols) {
  alert("you must select character type");
  uppers = confirm("Would you like uppercase letters?");
  lowers = confirm("Would you like lowercase letters?");
  numbers = confirm("Would you like numbers?");
  symbols = confirm("Would you like special characters?");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
.passwordText.value = password;

  if (uppers) password += randoSequence(allowed.uppers = "ABCDEFGHIJKLMNOPQURSTUVWXYZ");
  if (lowers) password += randoSequence(allowed.lowers = "abcdefghijklmnopqrstuvwxyz");
  if (numbers) password += randoSequence(allowed.nummbers = "0123456789");
  if (symbols) password += randoSequence(allowed.symbols = "!@#$%^&*()-_=+[]{};:'<>/?'");

  let(var i = password.lenght; i < length; i++) password += ((allowed).value);
  document.getElementById("password").value = randoSequence("password").join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
<input type="text" id="password" />
<button onclick "generatePassword();" > Generate New Password</button >
