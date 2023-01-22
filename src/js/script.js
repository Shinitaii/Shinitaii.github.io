const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

const myButton = document.getElementById("btn-back-to-top");
const about = document.getElementById("about-section");
const skill = document.getElementById("skill-section");
const career = document.getElementById("career-section");
const outside = document.getElementById("outside-career-section");

window.onscroll = function () {
  scrollConditions(myButton, 110);
  scrollConditionMiddle(about, 250, 850);
  scrollConditionMiddle(skill, 500, 1500);
  scrollConditions(career, 1250);
  scrollConditions(outside, 1700);
};



function scrollConditions(variable, num1){
  if(document.body.scrollTop > num1 || document.documentElement.scrollTop > num1){
    ifTrue(variable);
  } else {
    ifFalse(variable);
  }
}

function scrollConditionMiddle(variable, num1, num2){
  if((document.body.scrollTop > num1 && document.body.scrollTop <= num2)  || (document.documentElement.scrollTop > num1 && document.documentElement.scrollTop < num2)){
    ifTrue(variable);
  } else {
    ifFalse(variable);
  }
}

function ifTrue(variable){
  variable.style.display = "block";
  variable.style.opacity = 1;
  variable.style.visibility = "visible";
  variable.style.animation = "fadeIn 0.5s";
}

function ifFalse(variable){
  variable.style.animation = "fadeOut 0.6s";
  variable.style.opacity = 0;
  variable.style.visibility = "hidden";
}

myButton.addEventListener("click", backToTop);

function backToTop() {
  window.location = "#";
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}