const myButton = document.getElementById("back-to-top");

myButton.addEventListener("click", function(){
  window.location = "#";
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

window.onscroll = function (){
    scrollConditions(myButton, 20);
}

function scrollConditions(variable, num1){
    if(document.body.scrollTop > num1 || document.documentElement.scrollTop > num1){
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

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
        if(entry.isIntersecting){
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
    });
  });
  
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));