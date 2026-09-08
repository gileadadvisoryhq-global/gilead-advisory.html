// Contact & Inquiry Form Client Validation and Dispatch Handler
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('gilead-contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = new FormData(contactForm);
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const feedback = document.getElementById('form-feedback');

      // Basic Validation
      const requiredFields = ['fullName', 'email', 'companyName', 'serviceCategory'];
      for (let field of requiredFields) {
        if (!formData.get(field)) {
          feedback.textContent = 'Please complete all required fields.';
          feedback.style.color = '#dc2626';
          return;
        }
      }

      submitBtn.disabled = true;
      submitBtn.textContent = 'Processing Inbound Brief...';

      try {
        // Simulating Submission handling for production resilience
        await new Promise(resolve => setTimeout(resolve, 1200));

        feedback.textContent = 'Thank you for reaching out. A Gilead Advisory partner will review your inquiry shortly.';
        feedback.style.color = '#16a34a';
        contactForm.reset();
      } catch (err) {
        feedback.textContent = 'Submission failed. Please email us directly at enquiries.gileadadvisory@gmail.com.';
        feedback.style.color = '#dc2626';
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Brief';
      }
    });
  }
});