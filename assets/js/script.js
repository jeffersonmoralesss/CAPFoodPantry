const menuButton = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav]');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}

document.querySelectorAll('[data-year]').forEach(el => {
  el.textContent = new Date().getFullYear();
});

const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  const formUrl = document.querySelector('#form-url');
  if (formUrl) {
    formUrl.value = window.location.href.split('?')[0];
  }
}

const topicSelect = document.querySelector('#topic');
if (topicSelect) {
  const requestedTopic = new URLSearchParams(window.location.search).get('topic');
  if (requestedTopic) {
    const matching = [...topicSelect.options].find(option => option.text.toLowerCase().includes(requestedTopic.toLowerCase()));
    if (matching) topicSelect.value = matching.value;
  }
}
