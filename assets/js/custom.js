// $(document).ready(function () {
//   $(".mobile-toggle").click(function () {
//     $(".mobile-toggle").toggleClass("menu-open");
//     $(".open-in-mobile").toggleClass("active");
//   });
// });

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
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
    1320: {
      items: 4,
    },
    1600: {
      items: 5,
    },
  },
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

// Heading-three
// const headingThree = document.querySelector('.h-three');
// const scrollFrom = 1100;
// const scrollTo = 1500;

// window.addEventListener('scroll', () => {
//     const scrollPos = window.scrollY;
//     if (scrollPos >= scrollFrom && scrollPos <= scrollTo) {
//         headingThree.style.transform = `translate3d(0, ${-scrollPos * 0.1}px, 0)`;
//     } else {
//         headingThree.style.transform = 'none';
//     }
// });
// Heading-three


// Heading-four
const headingFour = document.querySelector('.h-four');
const fourscrollFrom = 1100;
const fourscrollTo = 1500;
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    if (scrollPos >= fourscrollFrom && scrollPos <= fourscrollTo) {
        const translateY = (scrollPos - fourscrollFrom) * 0.1;

        headingFour.style.transform = `translate3d(0, ${translateY}px, 0)`;
    } else {
        headingFour.style.transform = 'none';
    }
});

// Heading-four



const headingThree = document.querySelector('.h-three');
const scrollFrom = 1100;
const scrollTo = 1500;

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    if (scrollPos >= scrollFrom && scrollPos <= scrollTo) {
        // Calculate the percentage of scroll within the defined range
        const progress = (scrollPos - scrollFrom) / (scrollTo - scrollFrom);
        // Move the element from top to bottom based on the progress
        headingThree.style.transform = `translate3d(0, ${progress * 100}px, 0)`;
    } else {
        headingThree.style.transform = 'none';
    }
});
