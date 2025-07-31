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
  