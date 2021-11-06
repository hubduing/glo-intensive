const buttonAuth = document.querySelector('.button-auth');
const modelAuth = document.querySelector('.modal-auth');
const modalClose = document.querySelector('.close-auth');
const logInForm = document.getElementById('logInForm');
const inputLogin = document.getElementById('login');
const inputPassword = document.getElementById('password');
const buttonOut = document.querySelector('.button-out');
const userName = document.querySelector('.user-name');


const login = (user) => {
  buttonAuth.style.display = 'none';

  buttonOut.style.display = 'flex';
  userName.style.display = 'flex';

  userName.textContent = user.login;
  modelAuth.style.display = 'none';
}
const logout = () => {
  buttonAuth.style.display = 'flex';

  buttonOut.style.display = 'none';
  userName.style.display = 'none';
  userName.textContent = '';

  localStorage.removeItem('user');

}
buttonOut.addEventListener('click', () => {
  logout();
})
modalClose.addEventListener('click', () => {
  modelAuth.style.display = 'none';
})

buttonAuth.addEventListener('click', () => {
  modelAuth.style.display = 'flex';
})

logInForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // console.dir(inputLogin.value);
  const user = {
    login: inputLogin.value,
    password: inputPassword.value
  }

  localStorage.setItem('user', JSON.stringify(user));

  login(user);
})

if (localStorage.getItem('user')) {
  login(JSON.parse(localStorage.getItem('user')));
}