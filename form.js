
function ValidateEmail()
{
    console.log ("Validating email");    
    var email1 = document.getElementById("email1");
    //var setmb = document.getElementsByClassName("setmb0");
    console.log(email1.value);
    var mailformat = /^([\w\-\.]+)@([\w\-]+)\.([a-z]{2,3}(\.[a-z]{2,3})?)$/;
    if(email1.value.match(mailformat))
    {
        console.log("match");
        email1_error.textContent = "";
        return true;
    }
    else
    {
        console.log("not matched") ;
        email1.style.marginBottom = 0 + "px";
        email1_error.textContent = "eg: myname@email.com / my-name@email.co.in";
        //email1.setCustomValidity("Eg:myname@email.com/my-name@email.co.in");
        document.form1.email1.focus();
        return false;
    }
}


function ValidatePhone()
{
    var phone1 = document.getElementById("phone1");
    console.log(phone1.value);
    var phoneformat = /^([0-9]{3})([^\S\t\n\r]|[\.-])?([0-9]{3})([\.-])?([^\S\t\n\r]|[\.-])?([0-9]{4})$/;
    if(phone1.value.match(phoneformat))
    {
        console.log("match");
        phone1_error.textContent = "";
        return true;
    }
        else
    {
        console.log("not matched") ;
        phone1_error.textContent = "Only numbers are allowed. Should contain 10 digits.";

        //email1.setCustomValidity("Eg:myname@email.com/my-name@email.co.in");
        document.form1.phone1.focus();
        return false;
    }
}


function ChkStrength(password) {
    var password_strength = document.getElementById("password-text");

    //TextBox left blank.
    if (password.length == 0) {
      password_strength.innerHTML = "";
      return;
    }

    //Regular Expressions.
    var regex = new Array();
    regex.push("[A-Z]"); //Uppercase Alphabet.
    regex.push("[a-z]"); //Lowercase Alphabet.
    regex.push("[0-9]"); //Digit.
    //regex.push("[$@$!%*#?&]"); //Special Character.
    regex.push("[!@#$%^&*]");
    var passed = 0;

    //Validate for each Regular Expression.
    for (var i = 0; i < regex.length; i++) {
      if (new RegExp(regex[i]).test(password)) {
        passed++;
      }
    }

    //Display status.
    var strength = "";
    switch (passed) {
      case 0: strength = "";
      case 1: strength = "";
      case 2: 
            strength = "<small class='progress-bar bg-danger' style='width: 40% '>Weak </small>";
        break;
      case 3:
        strength = "<small class='progress-bar bg-warning' style='width: 60% '>Medium </small>";
        break;
      case 4:
          if(password.length < 8)
          {
            strength = "<small class='progress-bar bg-warning' style='width: 60% '>Medium </small>";
            
          }
          else
          {
            strength = "<small class='progress-bar bg-success' style='width: 100% '>Strong </small>";

          }
        break;

    }
    password_strength.innerHTML = strength;

  }

  function ValidatePwd_Login()
  {
      var pass1 = document.getElementById("pass1");
  
      console.log(pass1.value);
      var passformat = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;
      if(pass1.value.match(passformat))
      {
          console.log("match");
          pass1_error_Login.textContent = "";
          return true;
      }
          else
      {
          console.log("not matched") ;
          //pass1.style.maxWidth = "240px";
          pass1_error_Login.textContent = "Should Contain atleast a special character, Capital letter,small letter and number. Minimum 8 characters ";
  
          //email1.setCustomValidity("Eg:myname@email.com/my-name@email.co.in");
          document.form1.pass1.focus();
          return false;
      }
  }

  function ValidatePwd()
  {
      var pass1 = document.getElementById("pass1");
      ChkStrength(pass1.value);
  
      console.log(pass1.value);
      var passformat = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;
      if(pass1.value.match(passformat))
      {
          console.log("match");
          pass1_error.textContent = "";
          return true;
      }
          else
      {
          console.log("not matched") ;
          pass1_error.textContent = "Should Contain atleast a special character, Capital letter,small letter and number. Minimum 8 characters ";
  
          //email1.setCustomValidity("Eg:myname@email.com/my-name@email.co.in");
          document.form1.pass1.focus();
          return false;
      }
  }

function resetStrength()
{
    var password_strength = document.getElementById("password-text");
    password_strength.innerHTML = "";
}

function ComparePwd (){
    var pass1 = document.getElementById("pass1");
    var pass2 = document.getElementById("pass2");
    

    console.log("comparing password");
    if(pass1.value != pass2.value)
    {
        pass2_error.textContent = "Passwords don't match ";
        document.form1.pass2.focus();

        return false;

    }
    else{
        pass2_error.textContent = "";
        console.log(" password Match");

        return true;
    }
}



function Validate()
{

    console.log("function called");
    var email_b = ValidateEmail();
    var phone_b = ValidatePhone();
    var pass1_b = ValidatePwd();
    var pass2_b = ComparePwd();
    resetStrength();
    console.log(email_b,phone_b, pass1_b, pass2_b);

    if(email_b && phone_b && pass1_b && pass2_b)
    {
        return true;

    }
    else
    {
        return false;
    }
    
}

function ValidateLogin()
{

    console.log("Login function called");

    var email_b = ValidateEmail();
    var pass1_b = ValidatePwd_Login();
    console.log(email_b, pass1_b);
    //alert(email_b, pass1_b);
    if(email_b && pass1_b )
    {
        return true;

    }
    else
    {
        return false;
    }
    
}

//  window.onload = function() {
//     ValidateEmail();
//     ValidatePhone();
//     ValidatePwd();

//   };
var el = document.getElementById("form1");


  if(el)
  {
    el.onsubmit = function(e) { e.preventDefault(); };

//     el.addEventListener('submit', function(event) {
//         //window.addEventListener("beforeunload", () => { debugger }, false);

//         event.preventDefault();
//         //event.stopImmediatePropagation();

//         //alert("default prevented");
//     });
  }
  

    