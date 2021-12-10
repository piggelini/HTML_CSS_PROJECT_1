let sendButton = document.querySelector(".send_button"); //Hämtar knappen

sendButton.addEventListener("click", () => { //Lägger in funktion när vi klickar på knappen
  let emailInput = document.querySelector(".input_email");
  let result = emailInput.value.includes("@");

  if (result == "") { //Om användaren inte angett ett @ i inputfältet så skrivs nedan ut.
    alert("Det ser inte ut som att du angett någon mejladress. Prova igen.") 
    emailInput.value = null;
  }
  else {
    return true;
  }
});