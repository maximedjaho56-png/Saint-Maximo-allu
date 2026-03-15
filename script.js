// script.js

// Smooth Scrolling
const scrollToSection = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href');
    const targetPosition = document.querySelector(targetId).offsetTop;
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
};

const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', scrollToSection);
});

// Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    let valid = true;
    const inputs = form.querySelectorAll('input[required]');
    inputs.forEach(input => {
        if (!input.value) {
            valid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    if (!valid) {
        event.preventDefault();
        alert('Please fill out all required fields.');
    }
});

// Interactive Features
const buttons = document.querySelectorAll('.interactive-button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Button clicked!');
    });
});