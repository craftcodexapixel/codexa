const contactForm = document.getElementById('contact');
const orderForm = document.getElementById('order');

contactForm.addEventListener('submit', (event) => {
    const name = contactForm.name.value;
    const email = contactForm.email.value;
    const message = contactForm.message.value;

    if (!name || !email || !message) {
        event.preventDefault();
        alert('Please fill in all required fields.');
    }
});

// Add similar validation for the order form
const contactButton = document.getElementById('contactButton');
const contactForm = document.getElementById('contactForm');

if (contactButton && contactForm) {
    contactButton.addEventListener('click', () => {
        contactForm.style.display = contactForm.style.display === 'none' ? 'block' : 'none';
    });
} else {
    console.error('Could not find contactButton or contactForm elements.');
}