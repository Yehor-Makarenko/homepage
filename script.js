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
