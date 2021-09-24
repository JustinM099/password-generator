// Assignment Code

let lowerCase = 'abcdefghijklmnopqrstuvwxyz1234567890', upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  specialCharacters = '!#$%&*+,-./:();<=>?@[]^_`{|}~', numerals = '1234567890', characterString = "", generatorString = ""; //creates strings to pull characters from and strings to put them into

//get values through prompts, check them for validity & reprompt if theyre invalid
let passwordLength;
do {
  passwordLength = window.prompt("Enter number of characters (8-128): ")
} while (!passwordLength, passwordLength > 128, passwordLength < 8);

let upperCaseInclude;
do {
  upperCaseInclude = window.prompt("Would you like upper-case characters in your password? (yes/no)")
} while (!upperCaseInclude, !(upperCaseInclude.toLowerCase() == 'yes' || upperCaseInclude.toLowerCase() == 'no'));

let lowerCaseInclude;
do {
  lowerCaseInclude = window.prompt("Would you like lower-case characters in your password? (yes/no)")
} while (!lowerCaseInclude, !(lowerCaseInclude.toLowerCase() == 'yes' || lowerCaseInclude.toLowerCase() == 'no'));

let specialCharactersInclude;
do {
  specialCharactersInclude = window.prompt("Would you like special characters in your password? (yes/no)")
} while (!specialCharactersInclude, !(specialCharactersInclude.toLowerCase() == 'yes' || specialCharactersInclude.toLowerCase() == 'no'));

let numeralsInclude;
do {
  numeralsInclude = window.prompt("Would you like numerals in your password? (yes/no)")
} while (!numerals, !(numeralsInclude.toLowerCase() == 'yes' || numeralsInclude.toLowerCase() == 'no'));

if (lowerCaseInclude.toLowerCase() == 'yes') {
  characterString = characterString.concat(lowerCase)
}

if (upperCaseInclude.toLowerCase() == 'yes') {
  characterString = characterString.concat(upperCase)
}

if (specialCharactersInclude.toLowerCase() == 'yes') {
  characterString = characterString.concat(specialCharacters)
}

if (numeralsInclude.toLowerCase() == 'yes') {
  characterString = characterString.concat(numerals)
}

if (characterString == "") {
  alert("Please select at least one set of characters.")
  location.reload()
}

var generateBtn = document.querySelector("#generate"); //targets the button & assigns it a variable



// Write password to the #password input - this is the function called when the button is clicked
function writePassword() {
  var password = generatePassword(); //the password variable is created & defined as the content of generatePassword function
  var passwordText = document.querySelector("#password"); //does this print the password to the textarea?

  passwordText.value = password; //does this assign the value of the textarea to the content of the password variable?

}

// Add event listener to generate button
generateBtn.addEventListener("click", function () {
  generatePassword();
  writePassword();
}); //adds click event to button, calls 'writePassword' on click

function generatePassword() {
  generatorString = ""
  for (let i = 0; i < passwordLength; i++) {
    let charNumber = Math.floor((Math.random() * characterString.length) + 1)
    slicedChar = characterString.slice(charNumber - 1, charNumber)

    generatorString += slicedChar
  }
  return generatorString

}