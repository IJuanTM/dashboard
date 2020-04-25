// Navbar collapse icon
const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  menu.classList.toggle("extended");
  hamburger.classList.toggle("is-active");
})

// Clock
$(document).ready(function () {
  clock();
  setInterval(clock, 1000);
});

function clock() {
  $.ajax({
    url: '../view/parts/time.php',
    success: function (data) {
      $('#clock').html(data);
    },
  });
}