// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  

  passwordText.value = password;

} 

//console.log(writePassword());

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//console.log()



const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const lowerEl = document.getElementById('lower');
const upperEl = document.getElementById('upper');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');




const randomFunc = {

    lower: getRandomLower, 
    upper: getRandomUpper,
    number: getRandomNum,
    symbol: getRandomSymbol,

}

//Generate listener
generateEl.addEventListener("click", () => { 

  const length = +lengthEl.value;

  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbercaseEl.checked;
  const hasSymbol = symbolscaseEl.checked;

resultEl.innerText = generatePassword(
  
  hasLower, 
  hasUpper, 
  hasNumber, 
  hasSymbol, 
  length
  
  );

});

function generatePassword(lower, upper, number, symbol, length){


let generatedPassword = '';

const typesCount = lower + upper + number + symbol;


const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter
(
  item => Object.values(item)[0]
  
);

if(typesCount ==0){

  return '';
}

for(let i = 0; i < length; i += typesCount){
typesArr.forEach(type => {
        const funcName = Oject.keys(type)[0];
        
        
        generatedPassword += randomFunc[funcName]();

        
    });

  }
 
}



function getRandomLower() {

  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);

}

function getRandomUpper() {

  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);

}

function getRandomNum() {

  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);

}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];

}

//console.log(getRandomSymbol());