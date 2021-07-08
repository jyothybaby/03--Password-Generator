document.getElementById("generate").onclick = function () {
  inputCollection();
};

function inputCollection() {
  var PasswordLength = prompt("What is the length of the password");
  if(!PasswordLength) {
    return;
  }

  PasswordLength = Number(PasswordLength);
  if (PasswordLength < 8 || PasswordLength > 128) {
    window.alert("INVALID PASSWORD LENGTH \nPlease Enter a number between 8 and 128");
    inputCollection();
  } else {
    var inputCapital = window.confirm("Do you want to include UPPER CASE Letters?");
    console.log(inputCapital);

    var inputSmall = window.confirm("Do you want to include LOWER CASE Letters?");
    console.log(inputSmall);

    var inputSpecial = window.confirm("Do you want to include SPECIAL characters?");
    console.log(inputSpecial);
    var inputNumber = window.confirm("Do you want to include NUMBERS ?");
    console.log(inputNumber);

  }
  if((inputCapital==false) && (inputSmall ==false) && (inputSpecial==false) && (inputNumber ==false)) {
    window.alert("Password Must contain UPPERCASE letter or LOWERCASE letter or SPECIAL character or NUMBERS");
    inputCollection();
  }
}

