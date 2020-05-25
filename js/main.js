// Check if IE
if (/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
  $("body").load("../../view/parts/errors/unsupported.phtml");
}

// Load icon
document.onreadystatechange = function () {
  $("body").css("overflow", "hidden");
  const state = document.readyState;
  if (state === "interactive") {
    document.getElementById("content").style.visibility = "hidden";
  } else if (state === "complete") {
    setTimeout(function () {
      $("body").css("overflow", "visible");
      document.getElementById("interactive");
      document.getElementById("load").style.visibility = "hidden";
      document.getElementById("content").style.visibility = "visible";
    }, 100);
  }
};

if (document.getElementById("menu") !== null) {
  // Navbar collapse icon
  const menu = document.querySelector(".menu");
  const hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", function () {
    menu.classList.toggle("extended");
    hamburger.classList.toggle("is-active");
  })

  // Nav menu active switch
  let path = window.location.pathname;
  path = path.replace(/\/$/, "");
  path = decodeURIComponent(path);
  if (path === '') path = '/alle_projecten';
  $(".nav-links li").each(function () {
    const id = $(this).attr('id');
    if (path.substring(0, id.length) === id) {
      $(this).closest('li').addClass('active');
    }
  });
}

// Clock + date
$(document).ready(function () {
  if ($('.footer-large').css('display') !== 'none') {
    clock();
    day();
    date();
  }
});

function clock() {
  $.ajax({
    url: '../view/parts/ajax/time.php',
    success: function (data) {
      $('#clock').html(data);
      setTimeout(function () {
        clock();
      }, 1000);
    },
  });
}

function day() {
  $.ajax({
    url: '../view/parts/ajax/day.php',
    success: function (data) {
      $('#day').html(data);
      setTimeout(function () {
        day();
      }, 60000)
    },
  });
}

function date() {
  $.ajax({
    url: '../view/parts/ajax/date.php',
    success: function (data) {
      $('#date').html(data);
      setTimeout(function () {
        date();
      }, 60000)
    },
  });
}