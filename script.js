
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacterArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"];


document.getElementById("generate").onclick = function () {
  document.getElementById('password').value = "";
  inputCollection();
};

function inputCollection() {
  var passwordLength = prompt("What is the length of the password");
  if (!passwordLength) {
    return;
  }
  passwordLength = Number(passwordLength);
  console.log(passwordLength);
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("INVALID PASSWORD LENGTH \nPlease Enter a number between 8 and 128");
    return;
  } else {
    var inputCapital = window.confirm("Do you want to include UPPER CASE Letters?");
    console.log(inputCapital);

    var inputSmall = window.confirm("Do you want to include LOWER CASE Letters?");
    console.log(inputSmall);

    var inputSpecial = window.confirm("Do you want to include SPECIAL characters?");
    console.log(inputSpecial);
    var inputNumber = window.confirm("Do you want to include NUMBERS ?");
    console.log(inputNumber);

    if ((inputCapital == false) && (inputSmall == false) && (inputSpecial == false) && (inputNumber == false)) {
      window.alert("Password Must contain UPPERCASE letter or LOWERCASE letter or SPECIAL character or NUMBERS");
      return;
    } 

    var generatedPassword = generatePassword(passwordLength, inputCapital, inputSmall, inputSpecial, inputNumber);
    document.getElementById('password').value = generatedPassword;
  }

  return;
}

function generatePassword(passwordLength, inputCapital, inputSmall, inputSpecial, inputNumber) {
  var newPassword = "";
  var i = 0;
  var random;
  console.log((passwordLength));
  console.log(inputCapital);
  console.log(inputSmall);
  console.log(inputSpecial);
  console.log(inputNumber);
  do {
    if ((inputCapital == true) && (i < passwordLength)) {
      random = Math.floor(Math.random() * uppercaseArray.length);
      console.log(random);
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

  } while (i < passwordLength);
  console.log('The newly generated password is: ' + newPassword + ' and LENGTH is: ' + newPassword.length);
  //window.alert(newPassword);
  return newPassword;
}
