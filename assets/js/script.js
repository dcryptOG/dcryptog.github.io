var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("top").style.visibility = "visible";
  } else {
    document.getElementById("top").style.visibility = "hidden";
  }
  prevScrollpos = currentScrollPos;
};