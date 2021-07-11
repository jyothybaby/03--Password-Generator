// Arrays initialized for random extraction
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array list of special characters from the OWASP Foundation.
var specialCharacterArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", ".", "`", "~", "|", "<", ">", "=", "-", "_", "'",",", "/", ":", ";", "?", "[", "]"];

// onclick function  for the button "Generate Password"
document.getElementById("generate").onclick = function () {
  inputCollection();
};

//Here the program is collecting all the inputs for generating the output
function inputCollection() {
  var passwordLength = prompt("What is the length of the password ?");
  
  // when user clicks on "cancel" button then the program control exits.
  if (passwordLength == null) {
    return;
  }

  // Checking the passwordlength is Not a number or an empty string
  if (passwordLength == "" || isNaN(passwordLength)) {
    window.alert("This is not a valid input!! Please enter a number.");
    return;
  }
  passwordLength = Number(passwordLength);
  console.log(passwordLength);

  // Checking the number- our expectation is password length should be least 8 characters and no more than 128 characters
  if ((passwordLength < 8) || (passwordLength > 128)) {
    window.alert("INVALID ENTRY!! Please enter a number between 8 and 128.");
    return;
  } else {
    // If password length is good, then collect all the password criterias
    var inputCapital = window.confirm("Do you want to include UPPER CASE Letters ?");
    console.log(inputCapital);

    var inputSmall = window.confirm("Do you want to include LOWER CASE Letters ?");
    console.log(inputSmall);

    var inputSpecial = window.confirm("Do you want to include SPECIAL characters ?");
    console.log(inputSpecial);

    var inputNumber = window.confirm("Do you want to include NUMBERS ?");
    console.log(inputNumber);

    //This is the -ve case scenario. we cannot create a password if all the password criteria are false.
    if ((inputCapital == false) && (inputSmall == false) && (inputSpecial == false) && (inputNumber == false)) {
      window.alert("Password MUST contain atleast ONE of the criteria - UPPERCASE letter or LOWERCASE letter or SPECIAL character or NUMBERS");
      return;
    }

    //Calling function for generating passord
    var generatedPassword = generatePassword(passwordLength, inputCapital, inputSmall, inputSpecial, inputNumber);
    
    //Displaying the output in the HTML file.
    document.getElementById("password").value = generatedPassword;
  }

  return;
}

//Function for password generation
function generatePassword(passwordLength, inputCapital, inputSmall, inputSpecial, inputNumber) {
  var newPassword = "";
  var i = 0;
  var random;
  console.log("Password length: " + passwordLength);
  console.log("UpperCase Selected: " + inputCapital);
  console.log("LowerCase Selected: " + inputSmall);
  console.log("Special char Selected: " + inputSpecial);
  console.log("Numbers Selected: " + inputNumber);
  
  // Based on each criteria, fetch random values until password length is met. Each time incrementing the varible "i" for matching the password length.
  do {
    if ((inputCapital == true) && (i < passwordLength)) {
      random = Math.floor(Math.random() * uppercaseArray.length);
      newPassword += uppercaseArray[random];
      i++
    }
    if ((inputSmall == true) && (i < passwordLength)) {
      random = Math.floor(Math.random() * lowercaseArray.length);
      newPassword += lowercaseArray[random];
      i++
    }

    if ((inputSpecial == true) && (i < passwordLength)) {
      random = Math.floor(Math.random() * specialCharacterArray.length);
      newPassword += specialCharacterArray[random];
      i++
    }
    if ((inputNumber == true) && (i < passwordLength)) {
      random = Math.floor(Math.random() * numbersArray.length);
      newPassword += numbersArray[random];
      i++
    }
    // This loop will execute until this condition become false
  } while (i < passwordLength);

  console.log("The newly generated password is: " + newPassword + " and LENGTH is: " + newPassword.length);

  return newPassword;
}
