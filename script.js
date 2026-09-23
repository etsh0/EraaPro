// EraaPro HR Analyst Page Scripts
document.addEventListener('DOMContentLoaded', () => {
  // FAQ Accordion Interaction — smooth slide animation
  const faqButtons = document.querySelectorAll('.faq-btn');

  faqButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const content = btn.nextElementSibling;
      const isOpen = item && item.classList.contains('faq-open');

      // Close all open items first
      document.querySelectorAll('.faq-item.faq-open').forEach((openItem) => {
        openItem.classList.remove('faq-open');
        const openContent = openItem.querySelector('.faq-content');
        if (openContent) openContent.style.maxHeight = '0';
      });

      // Open clicked item if it was closed
      if (!isOpen && item && content) {
        item.classList.add('faq-open');
        content.style.maxHeight = content.scrollHeight + 'px';
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

  // 4-Phases Roadmap Stepper Interaction
  const roadmapTabs = document.querySelectorAll('.roadmap-tab');
  const phasePanels = document.querySelectorAll('.phase-panel');

  if (roadmapTabs.length > 0 && phasePanels.length > 0) {
    function switchPhase(phaseNumber) {
      roadmapTabs.forEach((tab) => {
        const p = tab.getAttribute('data-phase');
        const badge = tab.querySelector('.tab-badge');
        const title = tab.querySelector('.tab-title');

        if (p === phaseNumber) {
          tab.classList.add('bg-white', 'border-primary', 'shadow-md', 'ring-2', 'ring-primary/20');
          tab.classList.remove('bg-white/80', 'border-slate-200/80', 'shadow-xs');
          if (badge) {
            badge.classList.add('bg-primary', 'text-white');
            badge.classList.remove('bg-slate-100', 'text-slate-500');
          }
          if (title) {
            title.classList.add('text-primary');
            title.classList.remove('text-slate-700');
          }
        } else {
          tab.classList.remove('bg-white', 'border-primary', 'shadow-md', 'ring-2', 'ring-primary/20');
          tab.classList.add('bg-white/80', 'border-slate-200/80', 'shadow-xs');
          if (badge) {
            badge.classList.remove('bg-primary', 'text-white');
            badge.classList.add('bg-slate-100', 'text-slate-500');
          }
          if (title) {
            title.classList.remove('text-primary');
            title.classList.add('text-slate-700');
          }
        }
      });

      phasePanels.forEach((panel) => {
        if (panel.getAttribute('data-panel') === phaseNumber) {
          panel.classList.remove('hidden');
          panel.classList.add('block', 'animate-fade-in-slide');
        } else {
          panel.classList.add('hidden');
          panel.classList.remove('block', 'animate-fade-in-slide');
        }
      });
    }

    roadmapTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const phase = tab.getAttribute('data-phase');
        switchPhase(phase);
      });
    });

    document.querySelectorAll('.roadmap-nav-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetPhase = btn.getAttribute('data-target-phase');
        if (targetPhase) {
          switchPhase(targetPhase);
        }
      });
    });
  }
});
