function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;

  if (userEntered.length < 6){
    document.getElementById("usernameError").innerHTML="Bad username.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
  }
else{
  document.getElementById("usernameError").innerHTML="Good username.";
  document.getElementById("usernameError").classList.remove("hidden-message");
  document.getElementById("usernameError").classList.add("shown-message");
  //Turn the username items red
  document.getElementById("usernameGroup").classList.add("has-success");
    document.getElementById("usernameGroup").classList.remove("has-error");
}




if (passEntered == "password"){
  document.getElementById("passwordError").innerHTML="Bad password.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-error");
}
else{
  document.getElementById("passwordError").innerHTML="Good password.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-success");
    document.getElementById("passwordGroup").classList.remove("has-error");
}

if (passEntered.length < 6 && passEntered.length > 20){
  document.getElementById("passwordError").innerHTML="Password Must Be At Least 6 Charachters And No Less Than 20.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-error");
}
else{
  document.getElementById("passwordError").innerHTML="Good password.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-success");
    document.getElementById("passwordGroup").classList.remove("has-error");
}

if (passEntered == userEntered.value){
  document.getElementById("passwordError").innerHTML="Password Cannot Be The Same As Username";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-error");
}
else{
  document.getElementById("passwordError").innerHTML="Good password.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-success");
    document.getElementById("passwordGroup").classList.remove("has-error");
}




}
