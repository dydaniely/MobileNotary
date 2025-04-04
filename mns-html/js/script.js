document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            // --- IMPORTANT ---
            // This code ONLY simulates a submission for demonstration.
            // It DOES NOT actually send an email.
            // You need a backend server or a third-party service
            // (like Formspree, Netlify Forms, EmailJS, etc.)
            // to handle the actual email sending.
            // -------------------

            // Basic validation check (HTML5 'required' handles most)
            // You could add more complex validation here if needed.

            // Get form data (example)
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');

            console.log('Form Submitted (Simulation):');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);

            // Display a success message (simulation)
            formStatus.textContent = 'Thank you for your message! We will get back to you soon.';
            formStatus.className = 'success'; // Apply success style

            // Clear the form after a short delay
            setTimeout(() => {
                contactForm.reset();
                formStatus.textContent = ''; // Clear status message
                formStatus.className = '';
            }, 5000); // Clear after 5 seconds

            // To make this *actually* send an email, you would typically:
            // 1. Send the formData to your backend server endpoint using fetch() or XMLHttpRequest.
            // 2. Your backend server (Node.js, PHP, Python, etc.) would receive the data
            //    and use an email library (like Nodemailer for Node.js) to send the email.
            // OR
            // 1. Configure the form to submit directly to a service like Formspree
            //    by setting the 'action' attribute of the <form> tag.
            //    <form id="contact-form" action="YOUR_FORMSPREE_ENDPOINT" method="POST">

        });
    }
});

// You could add more JS here for things like:
// - A mobile navigation toggle (hamburger menu) if you make the nav more complex
// - Image sliders/carousels
// - Dynamic content loading (though less likely needed for this type of site)
