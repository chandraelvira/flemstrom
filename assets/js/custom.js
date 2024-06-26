$(document).ready(function () {
  $(".humburger").click(function () {
    $(".humburger").toggleClass("menu-open");
    // $(".open-in-mobile").toggleClass("active");
  });

$(".brand-slide").owlCarousel({
  loop: true,
  margin: 15,
  nav: false,
  rtl: false,
  dots: false,
  autoplay: true,
  slideTransition: "linear",
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  autoplaySpeed: 3000,
  autoplayHoverPause: false,
  responsive: {
    0: {
      autoplay: true,
      items: 3,
    },
    600: {
      autoplay: true,
      items: 4,
    },
    1000: {
      autoplay: true,
      items: 5,
    },
    1320: {
      autoplay: true,
      items: 6,
    },
    1600: {
      autoplay: true,
      items: 6,
    },
  },
});
});

// Video play-pause
$(document).ready(function () {
  var video = document.getElementById("myVideo");
  var playPauseBtn = $("#playPauseBtn");

  playPauseBtn.on("click", function () {
    if (video.paused) {
      video.play();
      playPauseBtn.html('<i class="fa-solid fa-pause"></i>'); // Change to pause icon
    } else {
      video.pause();
      playPauseBtn.html('<i class="fa-solid fa-play"></i>');
    }
  });
});
// Video play-pause

// Heading-one
const headingOne = document.querySelector(".h-one");

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  headingOne.style.transform = `translate3d(0, ${-scrollPos * 0.6}px, 0)`;
});
// Heading-one

// Heading-two
const headingTwo = document.querySelector(".h-two");

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  headingTwo.style.transform = `translate3d(0, ${scrollPos * 0.6}px, 0)`; //
});
// Heading-two

// Subcontent
const subContent = document.querySelector(".sub-content");

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  subContent.style.transform = `translate3d(0, ${scrollPos * 0.6}px, 0)`; // Reverse the direction
});
// Subcontent

// Heading-three $ four

const hThree = document.querySelector('.h-three');
const hFour = document.querySelector('.h-four');

let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollDirection = scrollTop > lastScrollTop? 'down' : 'up';

  if (scrollDirection === 'down') {
    hThree.style.transform = 'translateY(0px)';
    hFour.style.transform = 'translateY(0px)';
  } else {
    hThree.style.transform = 'translateY(-170px)';
    hFour.style.transform = 'translateY(190px)';
  }

  lastScrollTop = scrollTop;
});

hThree.style.transition = 'transform 0.5s ease-in-out';
hFour.style.transition = 'transform 0.5s ease-in-out';
