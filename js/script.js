
  var mybutton = document.getElementById("Scrolltop")
  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

 function topfunction(){
     window.scrollTo({top: 0, behavior: 'smooth'});

 }