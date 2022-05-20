var inSelection;
var letterSelection;
var specialSelection;
var numSelection;
var mixCase;
var length;
var upArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numArr="0123456789";
var loArr = "abcdefghijklmnopqrstuvwxyz";
var spcArr= "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var passwordContainer="";


// Assignment code here
var randomGenerator = function (array){
  var text = "";
  for (i=0, l=array.length; i<length; i++){
    text+=array.charAt(Math.floor(Math.random()*array.length));
  }
  return (text);
}
var userOptions = function () {
  letterSelection = window.confirm("Do you want letters in your password?");
  if(letterSelection){
    mixCase=window.prompt("Do you want all letters to be UPPERCASE(U), lowercase(l) or MiXeD(m)? Enter U, l or m");
    while(!(mixCase==="u"||mixCase==="U"||mixCase==="l"||mixCase==="L"||mixCase==="m"||mixCase==="M")){
      window.alert("Please choose a valid input!");
      mixCase=window.prompt("Do you want all letters to be UPPERCASE(U), lowercase(l) or MiXeD(m)? Enter U, l or m");
    }
  }
  numSelection = window.confirm("Do you want numbers in your password?");
  specialSelection = window.confirm("Do you want special characters in your password?");
  length = window.prompt("How long do you want the password to be ? Please enter a number between 8 and 128");
  while ((length<8)||(length>128)){
    window.alert("Please choose a number between 8 and 128");
    length = window.prompt("How long do you want the password to be ? Please enter a number between 8 and 128");
  }
}
// Getting user input 
var generatePassword = function () {
 userOptions();
 var text="";
 if(letterSelection){
    if(mixCase==="u"||mixCase==="U"){
      passwordContainer=upArr;
    } else if(mixCase==="l"||mixCase==="L"){
      passwordContainer=loArr;
    } else if(mixCase==="m"||mixCase==="M"){
      passwordContainer=upArr.concat(loArr);
    }
    if(numSelection){
      passwordContainer=passwordContainer.concat(numArr);
    }
    if(specialSelection){
      passwordContainer=passwordContainer.concat(spcArr);
    }
    text= randomGenerator(passwordContainer);
    return(text);
 } else if(numSelection){
    passwordContainer=passwordContainer.concat(numArr);
    if(specialSelection){
      passwordContainer=passwordContainer.concat(spcArr);
    }
    text= randomGenerator(passwordContainer);
    return(text);
 } else if(specialSelection){
    passwordContainer=passwordContainer.concat(spcArr);
    text=randomGenerator(passwordContainer);
    return(text);
 } else {
   window.alert("You need to choose one or more of the options!");
   userOptions();
 }
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordContainer="";
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
