let myButton = document.getElementById("topButton");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    myButton.style.display = "block";
    
  } else {
    myButton.style.display = "none";
      
  }
  
}

function topFunction() {
  document.documentElement.scrollTop = 0;

}
