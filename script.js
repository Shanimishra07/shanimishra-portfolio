var typed = new Typed('.text', {
    strings: ["frontend Developer","Backend Developer", "Web Developer", "Freelancer", "PHP Developer"],
    typeSpeed: 100, 
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function clickButton() {
    const toggleBtn = document.querySelector('.btn-toggle');
    const navbar = document.querySelector('.sidebar');

  toggleBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });
}


function closeButton() {
    const toggleBtn = document.querySelector('.cls-btn');
    const navbar = document.querySelector('.sidebar');

  toggleBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });
}

// this is for scroll to top button
// Get the button
const topBtn = document.querySelector(".top");

// Show button after scrolling down with fade effect
window.onscroll = function () {
  const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

  if (scrollTop > 100) {
    let opacity = Math.min((scrollTop - 100) / 200, 1); // 0 to 1 fade-in
    topBtn.style.opacity = opacity;
    topBtn.style.pointerEvents = "auto";
    topBtn.style.display = "block"; // Ensure it's shown
  } else {
    topBtn.style.opacity = 0;
    topBtn.style.pointerEvents = "none";
    topBtn.style.display = "none"; // Hide when near top
  }
};

// Smooth scroll to top on click
topBtn.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
