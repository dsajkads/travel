document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('main').classList.add('fade-in');

    const destinations = document.querySelectorAll('.destination');
    destinations.forEach(destination => {
        destination.addEventListener('mouseover', () => {
            destination.classList.add('slide-in');
        });
        destination.addEventListener('mouseleave', () => {
            destination.classList.remove('slide-in');
        });
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === '1') {
            window.location.href = 'index.html';
        } else if (event.key === '2') {
            window.location.href = 'destinations.html';
        } else if (event.key === '3') {
            window.location.href = 'contact.html';
        }
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Message sent successfully!');
        contactForm.reset();
    });
});
