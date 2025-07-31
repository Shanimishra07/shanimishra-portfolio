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
  // Get the button
  const topBtn = document.querySelector(".top");

  // Show button after scrolling down
  window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  };

  // Optional: Smooth scroll to top
  topBtn.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

