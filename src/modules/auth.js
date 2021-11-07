const auth = () => {
  // В класс бы записать всё это...
  const buttonAuth = document.querySelector('.button-auth');
  const modelAuth = document.querySelector('.modal-auth');
  const modalClose = document.querySelector('.close-auth');
  const logInForm = document.getElementById('logInForm');
  const inputLogin = document.getElementById('login');
  const inputPassword = document.getElementById('password');
  const buttonOut = document.querySelector('.button-out');
  const userName = document.querySelector('.user-name');


  const nameinput = document.forms.main.nameInput;

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

    if (login(user)) {
      hideModal(user);
    } else {
      event.preventDefault();
    }
  })
  // validate login
  const validateLogin = loginValue => /^[0-9a-zA-z_\d]{1,12}$/.test(loginValue);

  const login = (user) => {
    if (!validateLogin(user.login)) {
      nameinput.parentElement.insertAdjacentHTML(
        "beforeend",
        `<div class="main-form__error">
          Введите логин
        </div>`
      );
      return false;
    } else {
      return true;
    };

  }
  nameinput.addEventListener("focus", function (event) {
    console.log('focus!')
    if (nameinput.nextElementSibling) {
      nameinput.nextElementSibling.remove();
    }
  });

  const hideModal = (user) => {
    buttonAuth.style.display = 'none';

    buttonOut.style.display = 'flex';
    userName.style.display = 'flex';

    userName.textContent = user.login;
    modelAuth.style.display = 'none';
  }


  if (localStorage.getItem('user')) {
    // login(JSON.parse(localStorage.getItem('user')));
    hideModal(JSON.parse(localStorage.getItem('user')));
  }

};

export default auth;