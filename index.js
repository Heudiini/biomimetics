function welcome() {
  let firstName = prompt("What is your first name?");

  let kappale = document.querySelector(".parag");
  kappale.innerHTML = "Hi " + firstName + "!  <strong>Lets keep coding!</strong>";
}

let applyButton = document.querySelector(".js");
applyButton.addEventListener("click", welcome);
///////////////////////////////////////////////
function moreAbout() {
  let more = document.querySelector(".info");
  more.innerHTML =
    "The term Biomimetic architecture refers to the study and application of construction principles which are found in natural environments and species, and are translated into the design of sustainable solutions for architecture. <strong>Biomimetic architecture uses nature as a model,</strong> measure and mentor for providing architectural solutions across scales, which are inspired by natural organisms that have solved similar problems in nature. </br><em> -Wikipedia </em>";
}

let btn2 = document.querySelector(".myButton");
btn2.addEventListener("click", moreAbout);
