// JavaScript for interactive features

// Form validation logic
const requestForm = document.querySelector('#request-help form');
const offerForm = document.querySelector('#offer-help form');

function validateForm(form) {
    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const helpType = form.querySelector('#help-type').value;
    const message = form.querySelector('#message').value.trim();

    if (!name || !email || !helpType || !message) {
        alert('Please fill out all fields.');
        return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    return true;
}

requestForm.addEventListener('submit', (e) => {
    if (!validateForm(requestForm)) {
        e.preventDefault();
    }
});

offerForm.addEventListener('submit', (e) => {
    if (!validateForm(offerForm)) {
        e.preventDefault();
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Dynamic feedback message after form submission (simulate success)
function simulateSubmission(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for submitting your request/offer! We will get back to you soon.');
        form.reset();
    });
}

simulateSubmission(requestForm);
simulateSubmission(offerForm);
