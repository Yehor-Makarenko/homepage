// Traits cycle
document.addEventListener('DOMContentLoaded', () => {
  const card = document.getElementById('traitsCard');
  const cardContent = document.getElementById('cardContent');

  if (card && cardContent) {
    card.addEventListener('click', () => {
      cardContent.classList.add('is-fading');

      setTimeout(() => {
        let currentStep = parseInt(card.getAttribute('data-step'), 10);
        let nextStep = currentStep === 3 ? 1 : currentStep + 1;

        card.setAttribute('data-step', nextStep);

        cardContent.classList.remove('is-fading');
      }, 300);
    });
  }
});

// Skills accordion logic
document.addEventListener('DOMContentLoaded', () => {
  const accordionTriggers = document.querySelectorAll(
    '.skills-accordion__trigger',
  );

  accordionTriggers.forEach((trigger) => {
    trigger.addEventListener('click', function () {
      const currentItem = this.parentElement;
      const currentContent = this.nextElementSibling;

      const isOpen = currentItem.classList.contains('is-open');

      document.querySelectorAll('.skills-accordion__item').forEach((item) => {
        item.classList.remove('is-open');
        item.querySelector('.skills-accordion__content').style.maxHeight = null;
      });

      if (!isOpen) {
        currentItem.classList.add('is-open');
        currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
      }
    });
  });
});
