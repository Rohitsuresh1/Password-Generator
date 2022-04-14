var inSelection;
var upperCase;
var chooseCase
var allUpper;
var allLower;
var mixCase;
var length;
var upArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var loArr = "abcdefghijklmnopqrstuvwxyz";
var charArr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var spcArr= " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var mixArr= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~0123456789";


// Assignment code here
var randomGenerator = function (array){
  var text = "";
  for (i=0, l=array.length; i<length; i++){
    text+=array.charAt(Math.floor(Math.random()*array.length));
  }
  return (text);
}

// Getting user input 
var generatePassword = function () {
  inSelection = window.prompt("Do you want to have a password that is: 1. All numbers, 2. All letters, 3. All special characters or 4. A mix ? Type <1> or <numbers> for all numbers; Type <2> or <letters> for all letters; Type <3> or <special> for all special characters; Type <4> or <mix> for a mix of numbers, letters and special characters");
  length = window.prompt("How long do you want the password to be ? Please enter a number between 6 and 18");
  while ((length<6)||(length>18)){
    window.alert("Please choose a number between 6 and 18");
    length = window.prompt("How long do you want the password to be ? Please enter a number between 6 and 18");
  }
    switch (inSelection){
      case "1":
      case "numbers":
      case "NUMBERS":
        if (!window.confirm("Your password will only contain numbers!"))
        generatePassword();
        var ranLength = 1;
        for (i=0; i<length; i++){
          ranLength*= 10;
        }
        // window.alert(ranLength);
        text = Math.floor(Math.random()*ranLength);
        return (text);
      break;
      case "2":
      case "letters":
      case "LETTERS":
          upperCase = window.confirm("Do you want <UPPER CASE> characters in your password ?");
          if (upperCase){
            mixCase = window.confirm("Do you want a mix of <UPPER> and <lower> case characters ?");
            if (!mixCase){
              allUpper = window.confirm("All charaters in your password will be UPPERCASE! Click <OK> if that is what you want or else click <Cancel>");
              if (!allUpper) generatePassword();
              else text = randomGenerator(upArr);
            }
            else {
              if(!window.confirm("Your password will contain a mix of UPPER and lower case characters!"))
                generatePassword();
              text = randomGenerator(charArr);
            }
          }
          else {
            if(!window.confirm("All characters in your password will be lowercase!"))
              generatePassword();
            text = randomGenerator(loArr);
          }
          return (text);
          break;
      case "3":
      case "special":
      case "SPECIAL":
          text=randomGenerator(spcArr);
          return(text);
      break;
      
      case "4":
      case "mix":
      case "MIX":
          text = randomGenerator(mixArr);
          return (text);
      break;

      default:
       window.alert("Invalid selection, please choose again!");
       generatePassword();
       break;
  }
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
