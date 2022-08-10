// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
// var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("top").style.visibility = "visible";
//   } else {
//     document.getElementById("top").style.visibility = "hidden";
//   }
//   prevScrollpos = currentScrollPos;
// };

var prevScrollpos = window.pageYOffset;
(window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("top").style.top = "0";
  } else {
    document.getElementById("top").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
})();