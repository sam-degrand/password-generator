// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate password based on user criteria
function generatePassword() {
  var minLength = 8; // minimum password length
  var maxLength = 128; // maximum password length
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var special = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  var password = "";

  // Prompt user for password length
  var passwordLength = prompt("Enter password length (minimum " + minLength + " and maximum " + maxLength + " characters):");
  passwordLength = parseInt(passwordLength);

  // Validate password length input
  while (isNaN(passwordLength) || passwordLength < minLength || passwordLength > maxLength) {
    passwordLength = prompt("Invalid input. Enter password length (minimum " + minLength + " and maximum " + maxLength + " characters):");
    passwordLength = parseInt(passwordLength);
  }

  // Prompt user for character types to include in password
  var includeLowercase = confirm("Include lowercase letters?");
  var includeUppercase = confirm("Include uppercase letters?");
  var includeNumeric = confirm("Include numbers?");
  var includeSpecial = confirm("Include special characters?");

  // Validate at least one character type is selected
  while (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("You must select at least one character type!");
    includeLowercase = confirm("Include lowercase letters?");
    includeUppercase = confirm("Include uppercase letters?");
    includeNumeric = confirm("Include numbers?");
    includeSpecial = confirm("Include special characters?");
  }

  // Build password string based on selected character types
  var allowedChars = "";
  if (includeLowercase) {
    allowedChars += lowercase;
  }
  if (includeUppercase) {
    allowedChars += uppercase;
  }
  if (includeNumeric) {
    allowedChars += numeric;
  }
  if (includeSpecial) {
    allowedChars += special;
  }

  // Generate password
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * allowedChars.length); // generate random index to select character from allowedChars
    password += allowedChars[randomIndex];
  }

  return password;
}
