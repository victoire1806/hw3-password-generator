/*Assignment Code
var generateBtn = document.querySelector("#generate");

//Write password to the #password input
function writePassword() {  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  
  passwordText.value = password;

} 



//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 
 
 
 
 
 
 /* Generate password character set
function generatePassword() {

    const pwCharTypes = setupPasswordCharacters();
    const pwLength = configPasswordLength();
  
    
    
        return generatePasswordText(pwCharTypes, pwLength);
  
}
*/
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

  //Generate random value for each character type in a array
  const charList = {
    l : randomFunc.getRandomLower(""),
    u : randomFunc.getRandomUpper(""),
    n : randomFunc.getRandomNum(""),
    s : randomFunc.getRandomSymbol(""),
   
  };

  console.log(charList);

  function generatePassword() {

    const pwCharTypes = setupPasswordCharacters();
    const pwLength = configPasswordLength();
  
    
    
        return generatePasswordText(pwCharTypes, pwLength);
  
}

//Setup charater types that is in password selection array
  function setupPasswordCharacters() {
    const charTypes = [
      { desc: "Lower case letters", symb: "l" },
      { desc: "Upper case letters", symb: "u" },
      { desc: "Numbers", symb: "n" },
      { desc: "Symbols", symb: "s" },
    ];
  
    let pwCharTypes = [];

//Pass password selection for each charachter type when prompt
    for (const charType of charTypes) {
        const includeCharSet = confirm(`Include ${charType.desc} in password`);
        if (includeCharSet) {
          pwCharTypes.push(charType.symb);
        }
      }

      if (pwCharTypes.length === 0) {
        alert(
          "Must select at least 1 password character type to generate a password"
        );
        pwCharTypes = setupPasswordCharacters();
      }
    
      return pwCharTypes;
    }

     // Promp for password length
    function configPasswordLength() {
        
        const pwLengthInput = prompt("Enter password length");
        const onlyNum = /^\d+$/.test(pwLengthInput);
      
    let pwLength = Number(pwLengthInput);
        if (!onlyNum || pwLength < 8 || pwLength > 128) {
          alert("Enter a whole number between 8 and 128");
          pwLength = configPasswordLength();
        }
      
        return pwLength;
      }

      function generatePasswordText(pwCharTypes, pwLen) {
        const pwText = []; 

        for (const pwCharType of pwCharTypes) {
            const rChar = randomChoice(charList[pwCharType]);
            pwText.push(rChar);
          }

          for (let c = pwCharTypes.length; c < pwLen; c++) {
            const rCharType = randomChoice(pwCharTypes);
            const rChar = randomChoice(charList[rCharType]);
            pwText.push(rChar);
          }

          return shuffleArray(pwText).join("");
        }

          function randomChoice(array) {
            // Return random choice from input array
            return array[Math.floor(Math.random() * array.length)];
          }

          function shuffleArray(array) {

          for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
          }
          return array;
        }

//Put at the end of code because the DOM control is listening for click response
//to generate write password 
// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
const generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);








 

 
