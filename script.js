function passwordGenerator() {
  let lowerCase = 'abcdefghijklmnopqrstuvwxyz1234567890', upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    specialCharacters = '!#$%&*+,-./:();<=>?@[]^_`{|}~', numerals = '1234567890', characterString = "", generatorString = "" //creates strings to pull characters from and strings to put them into
  //get values through prompts, check them for validity & reprompt if theyre invalid
  let passwordLength
  do {
    passwordLength = window.prompt("Enter number of characters (8-128): ")
  } while (!passwordLength, (passwordLength < 8 || passwordLength > 128));
  let upperCaseInclude
  do {
    upperCaseInclude = window.prompt("Would you like upper-case characters in your password? (yes/no)")
  } while (!upperCaseInclude, !(upperCaseInclude.toLowerCase() == 'yes' || upperCaseInclude.toLowerCase() == 'no'))
  let lowerCaseInclude
  do {
    lowerCaseInclude = window.prompt("Would you like lower-case characters in your password? (yes/no)")
  } while (!lowerCaseInclude, !(lowerCaseInclude.toLowerCase() == 'yes' || lowerCaseInclude.toLowerCase() == 'no'))
  let specialCharactersInclude
  do {
    specialCharactersInclude = window.prompt("Would you like special characters in your password? (yes/no)")
  } while (!specialCharactersInclude, !(specialCharactersInclude.toLowerCase() == 'yes' || specialCharactersInclude.toLowerCase() == 'no'))
  let numeralsInclude
  do {
    numeralsInclude = window.prompt("Would you like numerals in your password? (yes/no)")
  } while (!numerals, !(numeralsInclude.toLowerCase() == 'yes' || numeralsInclude.toLowerCase() == 'no'))
  //take prompts and create characterString based on preferences
  if (lowerCaseInclude.toLowerCase() == 'yes') {
    characterString = characterString.concat(lowerCase)
  } if (upperCaseInclude.toLowerCase() == 'yes') {
    characterString = characterString.concat(upperCase)
  } if (specialCharactersInclude.toLowerCase() == 'yes') {
    characterString = characterString.concat(specialCharacters)
  } if (numeralsInclude.toLowerCase() == 'yes') {
    characterString = characterString.concat(numerals)
  } if (characterString == "") {
    alert("Please select at least one set of characters.")
    passwordGenerator() //checks to make sure at least one character set was seleted. If not, reloads website to reprompt.
  }
  var generateBtn = document.querySelector("#generate")  //targets the button & assigns it a variable
  // Write password to the #password input - this is the function called when the button is clicked
  function writePassword() {
    var password = generatePassword()  //the password variable is created & defined as the content of generatePassword function
    var passwordText = document.querySelector("#password")  //assigns passwordText to the password box on the screen
    passwordText.value = password  // prints the generated password to the screen
  }
  function generatePassword() { //this creates the password
    generatorString = ""
    for (let i = 0; i < passwordLength; i++) {
      let charNumber = Math.floor((Math.random() * characterString.length)) //generates a random number
      slicedChar = characterString[charNumber] //slices out a character from characterString based on random number
      generatorString += slicedChar //adds the sliced out number to the generatorString
    } return generatorString //returns the created password
  }
  // Add event listener to generate button
  generateBtn.addEventListener("click", function () {
    generatePassword()
    writePassword()
  }) //adds click event to button, calls 'writePassword' on click
}
passwordGenerator()