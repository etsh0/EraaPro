// EraaPro HR Analyst Page Scripts
document.addEventListener('DOMContentLoaded', () => {
  // FAQ Accordion Interaction
  const faqButtons = document.querySelectorAll('.faq-btn');

  faqButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const icon = btn.querySelector('i');

      if (content) {
        content.classList.toggle('hidden');
      }
      if (icon) {
        icon.classList.toggle('rotate-180');
      }
    });
  });

  // Payment & Registration Form Submission Handler
  const form = document.getElementById('payment-form');
  const submitBtn = document.getElementById('submit-btn');
  const scriptURL =
    'https://script.google.com/macros/s/AKfycbwI8vn4d1brpBeUdeMtAkXWQKUyGCv3hWDIATSZKHXuLfq9CaoA637ZfBX4oCANoewJcA/exec';

  if (form && submitBtn) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = 'جاري التحويل... <i class="fas fa-spinner fa-spin"></i>';
      submitBtn.disabled = true;
      submitBtn.classList.add('opacity-75', 'cursor-not-allowed');

      const requestBody = new FormData(form);

      fetch(scriptURL, { method: 'POST', body: requestBody })
        .then((response) => {
          window.location.href = 'https://paymob.link/tJtK3';
        })
        .catch((error) => {
          console.error('Error submitting form:', error);
          window.location.href = 'https://paymob.link/tJtK3';
        });
    });
  }
});
