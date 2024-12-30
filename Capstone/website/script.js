$(document).ready(function () {
  var api_key = "563492ad6f917000010000017690ecfff6ab4c5b9dcffa5f3544647c";
  var image = "";

  $("#form").submit(function (event) {
    event.preventDefault();

    var search = $("#search").val();

    imagesearch();
  });
  function imagesearch() {
    $.ajax({
      method: "GET",
      beforeSend: function (xhr) {
        xhr.setRequestHeader("Authorization", api_key);
      },
      url:
        "https://api.pexels.com/v1/search?query=" +
        $("#search").val() +
        "&per_page=6&page=1",

      success: function (data) {
        console.log(data);

        data.photos.forEach((photo) => {
          image = `
                    <img src = "${photo.src.original}" width = "400" height = "300"/>
                    `;
          $("#images").append(image);
        });
      },
      error: function (error) {
        console.error();
      },
    });
  }
});

$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 100) {
      $(".navbar").addClass("apear");
    } else {
      $(".navbar").removeClass("apear");
    }
  });
  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  var typed = new Typed(".typing-2", {
    strings: ["Traveling", "Photography", "Sport", "Designing", "Football"],
    typeSpeed: 90,
    backSpeed: 60,
    loop: true,
  });
});
// members
let currentSlide = 0;

function moveSlides(direction) {
  const slider = document.getElementById("teamSlider");
  const slides = document.querySelectorAll(".team-slide");
  const slideWidth = slides[0].offsetWidth;

  currentSlide += direction;

  // Ensure we don't scroll past the first or last slide
  if (currentSlide < 0) {
    currentSlide = 0;
  } else if (currentSlide >= slides.length) {
    currentSlide = slides.length - 1;
  }

  slider.style.transform = `translateX(-${
    currentSlide * (slideWidth + 150)
  }px)`; // Adjust for margin
}

// JavaScript code for tab switching
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".btn-group .btn");
  const sections = document.querySelectorAll(".prediction-content");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const tab = this.getAttribute("data-tab");
      sections.forEach((section) => {
        section.style.display = "none"; // Hide all sections
      });
      document.getElementById(`${tab}-section`).style.display = "block"; // Show the selected section
    });
  });
});

function showSection(sectionId) {
  const sections = [
    "cereal-section",
    "undernourishment-section",
     "lsmt-section",
     "crop-section",
  ];

  sections.forEach(function (id) {
    if (id === sectionId) {
      document.getElementById(id).style.display = "block";
    } else {
      document.getElementById(id).style.display = "none";
    }
  });
}

document
  .querySelector('a[href="#cerealChangeForm"]')
  .addEventListener("click", function () {
    showSection("cereal-section");
  });

document
  .querySelector('a[href="#undernourishmentForm"]')
  .addEventListener("click", function () {
    showSection("undernourishment-section");
  });
  document
  .querySelector('a[href="#lsmtForm"]')
  .addEventListener("click", function () {
    showSection("lsmt-section");
  });

document
  .querySelector('a[href="#cropYieldForm"]')
  .addEventListener("click", function () {
    showSection("crop-section");
  });
