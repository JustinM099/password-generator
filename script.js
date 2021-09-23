// Assignment Code

let lowerCase = 'abcdefghijklmnopqrstuvwxyz1234567890', upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  specialCharacters = '!#$%&*+,-./:();<=>?@[]^_`{|}~'; //creates strings to pull characters from

let characterString

//get values through prompts
let passwordLength;
do {
  passwordLength = window.prompt("Enter number of characters (8-128): ")
} while (!passwordLength);

let upperCaseInclude;
do {
  upperCaseInclude = window.prompt("Would you like lower-case characters in your password? (yes/no)")
} while (!upperCaseInclude);

let lowerCaseInclude;
do {
  lowerCaseInclude = window.prompt("Would you like upper-case characters in your password? (yes/no)")
} while (!lowerCaseInclude);

let specialCharactersInclude;
do {
  specialCharactersInclude = window.prompt("Would you like special characters in your password? (yes/no)")
} while (!specialCharactersInclude);

let generatorString = ""


if (upperCaseInclude.toLowerCase() == 'yes' && specialCharactersInclude.toLowerCase() == 'yes') {
  characterString = (lowerCase + upperCase + specialCharacters)
}
else if (upperCaseInclude.toLowerCase() == 'yes') {
  characterString = (lowerCase + upperCase)
}
else (
  characterString = lowerCase
)//create string to pull characters from based on user inputs

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
    let charNumber = Math.floor((Math.random() * passwordLength) + 1)

    slicedChar = characterString.slice(charNumber - 1, charNumber)

    generatorString += slicedChar
  }
  return generatorString

}