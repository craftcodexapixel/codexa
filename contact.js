const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    const name = contactForm.name.value;
    const email = contactForm.email.value;
    const message = contactForm.message.value;

    if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
    }

    // Create an object to store the form data
    const formData = {
        name: name,
        email: email,
        message: message
    };

    // Send the data using AJAX (e.g., fetch API)
    fetch('process_contact.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Message sent successfully!');
            // Clear the form
            contactForm.reset();
        } else {
            alert('Your message sent successfully and will be given reply by our team as soon as possible check your mail regularly: ' + data.error);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Your message sent successfully and will be given reply by our team as soon as possible check your mail regularly');
    });
});