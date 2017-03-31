function register(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  alert(userEntered +" "+ passEntered);

}

function validateUsername(){

  var userEntered = document.getElementById("user").value;

  if (userEntered.length < 6){
    document.getElementById("usernameError").innerHTML="Bad username.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
    document.getElementById("usernameGroup").classList.remove("has-success");
  }

  else if (userEntered.indexOf(" ") != -1){
    document.getElementById("usernameError").innerHTML="Bad username.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
    document.getElementById("usernameGroup").classList.remove("has-success");
  }


  else {
  document.getElementById("usernameError").innerHTML="Good username.";
  document.getElementById("usernameError").classList.add("hidden-message");
  document.getElementById("usernameError").classList.remove("shown-message");
  //Turn the username items red
  document.getElementById("usernameGroup").classList.add("has-success");
    document.getElementById("usernameGroup").classList.remove("has-error");
  }
}


function validatePassword(){

  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;



  if (passEntered.toLowerCase() == "password"){
    document.getElementById("passwordError").innerHTML="Bad password.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
      document.getElementById("passwordGroup").classList.remove("has-success");
  }


  else if (passEntered.length < 6){
    document.getElementById("passwordError").innerHTML="Password Must Be At Least 6 Charachters.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
    document.getElementById("passwordGroup").classList.remove("has-success");
  }
  else if (passEntered.length > 20){
    document.getElementById("passwordError").innerHTML="Password Must Be Less Than 20 Charachters.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
      document.getElementById("passwordGroup").classList.add("has-error");
      document.getElementById("passwordGroup").classList.remove("has-success");
  }

  else if (passEntered == userEntered){
    document.getElementById("passwordError").innerHTML="Password Cannot Be The Same As Username";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
    document.getElementById("passwordGroup").classList.remove("has-success");
  }

  else {
    document.getElementById("passwordError").innerHTML="Good Password";
    document.getElementById("passwordError").classList.add("hidden-message");
    document.getElementById("passwordError").classList.remove("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-success");
    document.getElementById("passwordGroup").classList.remove("has-error");

  }

}
