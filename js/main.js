// Define url
const baseUrl = window.location.origin + '/';

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

if (document.getElementById("qrcode") !== null) {
  $('#qrcode').qrcode(window.location.href);
}

if (document.getElementById("menu") !== null) {
  // Navbar collapse icon
  const menu = document.querySelector(".menu");
  const fade = document.querySelector('.navbar-fade');
  const hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", function () {
    menu.classList.toggle("extended");
    fade.classList.toggle("extended");
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
  function clock() {
    $.ajax({
      url: baseUrl + 'view/parts/ajax/time.php',
      success: function (data) {
        $("#clock").html(data);
        window.setTimeout(clock, 1000);
      }
    });
  }

  function day() {
    $.ajax({
      url: baseUrl + 'view/parts/ajax/day.php',
      success: function (data) {
        $("#day").html(data);
        window.setTimeout(day, 60000);
      }
    });
  }

  function date() {
    $.ajax({
      url: baseUrl + 'view/parts/ajax/date.php',
      success: function (data) {
        $("#date").html(data);
        window.setTimeout(date, 60000);
      }
    });
  }

  if ($('.footer-large').css('display') !== 'none') {
    clock();
    day();
    date();
  }
});