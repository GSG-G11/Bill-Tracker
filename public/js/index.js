const signInForm = document.querySelector('.sign-in-form');
const signUpForm = document.querySelector('.sign-up-form');
const signInUpToggleBtn = document.querySelector('.sign-in-up');
const signInUserNameInput = document.querySelector('#user_name');
const signInPasswordInput = document.querySelector('#password');
const signUpUserNameInput = document.querySelector('#new-user-name');
const signUpPasswordInput = document.querySelector('#new-password');
const signUpConfirmNewPasswordInput = document.querySelector('#confirm-new-password');

const toggleContent = (content) => (content === 'New User?' ? 'Sign in?' : 'New User?');
signInUpToggleBtn.addEventListener('click', () => {
  signInUpToggleBtn.textContent = toggleContent(signInUpToggleBtn.textContent);
  signInForm.classList.toggle('disable');
  signUpForm.classList.toggle('disable');
});

const postJsonData = (endpoint, dataObj) => fetch(endpoint, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(dataObj),
})
  .then((res) => res.json());

signInForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const userName = signInUserNameInput.value.trim();
  const password = signInPasswordInput.value.trim();
  postJsonData('/sign-in', { userName, password }).then((data) => {
    if (data.status !== 'error') {
      const signInData = {
        userName: data.data.user_name,
        password: data.data.password,
      };
      localStorage.setItem('signInData', JSON.stringify(signInData));
      location.href = '/home';
    } else {
      alert(data.message);
    }
  });
});

signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const userName = signUpUserNameInput.value.trim();
  const password = signUpPasswordInput.value.trim();
  const confirmPass = signUpConfirmNewPasswordInput.value.trim();
  if (password === confirmPass) {
    postJsonData('/sign-up', { userName, password, confirmPass }).then((data) => {
      if (data.status !== 'error') {
        const signInData = {
          userName: data.data.user_name,
          password: data.data.password,
        };
        localStorage.setItem('signInData', JSON.stringify(signInData));
        location.href = '/home';
      } else {
        alert(data.message);
      }
    });
  } else {
    alert('password and confirm password not match');
  }
});
