const signInForm = document.querySelector('.sign-in-form');
const signUpForm = document.querySelector('.sign-up-form');
const signInUpToggleBtn = document.querySelector('.sign-in-up');

const toggleContent = (content) => (content === 'New User?' ? 'Sign in?' : 'New User?');
signInUpToggleBtn.addEventListener('click', () => {
  signInUpToggleBtn.textContent = toggleContent(signInUpToggleBtn.textContent);
  signInForm.classList.toggle('disable');
  signUpForm.classList.toggle('disable');
});

signInForm.addEventListener('submit', (e) => {
  e.preventDefault();
});

signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();
});
