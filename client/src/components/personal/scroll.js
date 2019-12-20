

window.onscroll = function() {myFunction()};

function myFunction() {
  var scroll = window.scrollY;
  if(scroll > 50){
    document.getElementById ("personal-navbar").style.background = "green";
    document.getElementById ("personal-logo").style.display = "none";
  }
  if(scroll<50){
    document.getElementById ("personal-navbar").style.background = "none";
    document.getElementById ("personal-logo").style.display = "block";
  }
}
