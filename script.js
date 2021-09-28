// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  
  passwordText.value = password;

} 

//console.log(password);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword()
{

  var lengthEl = prompt("Enter numbers and characters you want for your new password. It must be at least 8 but not more than 128.");
  var lowerEl = confirm("Enter lowercases in your password?");
  var upperEl = confirm("Enter upper cases in your password?");
  var numberEl = confirm("Enter numbers in your password?");
  var symbolEl = confirm("Enter special characters in your password?");


//let generatedPassword = '';


// Return empty for lower, upper, number symbol 
const typesCount = 0;

const typesCountLower = "";
const typesCountUpper = "";
const typesCountNum = "";
const typesCountSymbol = "";



const randomFunc = {

  getRandomLower: function () {

  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);

},
  getRandomUpper: function() {

  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);

},

  getRandomNum: function  () {

  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);

},

getRandomSymbol: function   () {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];

}

};

if (number === true) {
  upper = randomFunc.getRandomUpper();
  typesCount++;

}

if (lower === true) {
  lower = randomFunc.getRandomLower();
  typesCount++;

}

if (upper === true) {
  number = randomFunc.getRandomNum();
  typesCount++;

}

if (symbol === true) {
  symbol= randomFunc.getRandomSymbol();
  typesCount++;

}


let generatedPassword = '';

//random characters
for (let i = 0; i <= (parseInt(length) - typesCount); i++) {
  var randomNum = Math.floor(Math.random() * 4);

generatedPassword += randomNum;

}

generatedPassword += typesCountLower;
generatedPassword += typesCountUpper;
generatedPassword += typesCountNum;
generatedPassword += typesCountSymbol;

   
return generatedPassword;

};

//console.log(getRandomSymbol());