// Assignment Code
var generateBtn = document.getElementById("generate");
// var generateBtn = document.getElementById("#password");
let Pswnumbers = "0123456789";
let Pswletters = "abcdefghijklmnopqrstuvwxyz";
let PswUpper= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let PswChar = "!@#$%^&*()";
// let passwordLength =  8 > 128  ;
let passwordInput ="";
var password = "";
var passwordLength2 = "";

// Write password to the #password input

    // function prompt() {

    //     passwordLength2 = prompt( " Password can be from 8 to 128 characters, haw many characters do you want to include? ");
        
    //   if (passwordLength2 < 8 || passwordLength2 > 128  ) {  

    // prompt()

    //     }

    // }

function generatePasswordRand() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

 
  passwordLength2 = prompt( " Password can be from 8 to 128 characters, haw many characters do you want to include? ")
        
      var Pswnumbers2 = confirm( " Do you want to include numbers ? ");
      var Pswletters2 = confirm ( " Do you want to include Lowercase ? ");
      var PswUpper2 = confirm ( " Do you want to include Uppercase ? ");
      var PswChar2 = confirm ( " Do you want to include special characters ? ");
            
     

      if (passwordLength2 < 8 || passwordLength2 > 128  ) {
        passwordInput === passwordLength2, passwordInput += passwordLength2}


     
      if ( Pswnumbers2 === true) {
        passwordInput += Pswnumbers
      }


      if ( Pswletters2 === true) {
        passwordInput += Pswletters
      }

      
      if ( PswUpper2 === true) {
        passwordInput += PswUpper
      }

      if ( PswChar2 === true) {
        passwordInput += PswChar
      }


      console.log(passwordInput) 

      for (var i = 0; i < passwordLength2; i++) {

      var randomNumber = Math.floor(Math.random()* 10 *(passwordLength2.length ));
       console.log (randomNumber)

      password += passwordInput[randomNumber]; console.log(password)

      }

      var TextBox = document.querySelector ("#password") 

      TextBox.value = password; 

      }








//  document.getElementById("password").value;

// Add event listener to generate button

generateBtn.addEventListener("click", generatePasswordRand) 

  //  var writePassword = password; 




    

 



