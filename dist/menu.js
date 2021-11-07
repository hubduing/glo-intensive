/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/auth */ \"./src/modules/auth.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n\r\n\r\n\r\n(0,_modules_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBa0M7QUFDQTtBQUNsQztBQUNBLHlEQUFJO0FBQ0oseURBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG8taW50ZW5zaXZlLWNvcHktd2VicGFjay8uL3NyYy9tZW51LmpzP2FiMDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF1dGggZnJvbSAnLi9tb2R1bGVzL2F1dGgnO1xyXG5pbXBvcnQgbWVudSBmcm9tICcuL21vZHVsZXMvbWVudSc7XHJcblxyXG5hdXRoKCk7XHJcbm1lbnUoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/menu.js\n");

/***/ }),

/***/ "./src/modules/auth.js":
/*!*****************************!*\
  !*** ./src/modules/auth.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst auth = () => {\r\n  // В класс бы записать всё это...\r\n  const buttonAuth = document.querySelector('.button-auth');\r\n  const modelAuth = document.querySelector('.modal-auth');\r\n  const modalClose = document.querySelector('.close-auth');\r\n  const logInForm = document.getElementById('logInForm');\r\n  const inputLogin = document.getElementById('login');\r\n  const inputPassword = document.getElementById('password');\r\n  const buttonOut = document.querySelector('.button-out');\r\n  const userName = document.querySelector('.user-name');\r\n\r\n\r\n  const nameinput = document.forms.main.nameInput;\r\n\r\n  const logout = () => {\r\n    buttonAuth.style.display = 'flex';\r\n\r\n    buttonOut.style.display = 'none';\r\n    userName.style.display = 'none';\r\n    userName.textContent = '';\r\n\r\n    localStorage.removeItem('user');\r\n  }\r\n\r\n  buttonOut.addEventListener('click', () => {\r\n    logout();\r\n  })\r\n\r\n  modalClose.addEventListener('click', () => {\r\n    modelAuth.style.display = 'none';\r\n  })\r\n\r\n  buttonAuth.addEventListener('click', () => {\r\n    modelAuth.style.display = 'flex';\r\n  })\r\n\r\n  logInForm.addEventListener('submit', (event) => {\r\n    event.preventDefault();\r\n    // console.dir(inputLogin.value);\r\n    const user = {\r\n      login: inputLogin.value,\r\n      password: inputPassword.value\r\n    }\r\n\r\n    localStorage.setItem('user', JSON.stringify(user));\r\n\r\n    if (login(user)) {\r\n      hideModal(user);\r\n    } else {\r\n      event.preventDefault();\r\n    }\r\n  })\r\n  // validate login\r\n  const validateLogin = loginValue => /^[0-9a-zA-z_\\d]{1,12}$/.test(loginValue);\r\n\r\n  const login = (user) => {\r\n    if (!validateLogin(user.login)) {\r\n      nameinput.parentElement.insertAdjacentHTML(\r\n        \"beforeend\",\r\n        `<div class=\"main-form__error\">\r\n          Введите логин\r\n        </div>`\r\n      );\r\n      return false;\r\n    } else {\r\n      return true;\r\n    };\r\n\r\n  }\r\n  nameinput.addEventListener(\"focus\", function (event) {\r\n    console.log('focus!')\r\n    if (nameinput.nextElementSibling) {\r\n      nameinput.nextElementSibling.remove();\r\n    }\r\n  });\r\n\r\n  const hideModal = (user) => {\r\n    buttonAuth.style.display = 'none';\r\n\r\n    buttonOut.style.display = 'flex';\r\n    userName.style.display = 'flex';\r\n\r\n    userName.textContent = user.login;\r\n    modelAuth.style.display = 'none';\r\n  }\r\n\r\n\r\n  if (localStorage.getItem('user')) {\r\n    // login(JSON.parse(localStorage.getItem('user')));\r\n    hideModal(JSON.parse(localStorage.getItem('user')));\r\n  }\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHVEQUF1RCxLQUFLO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG8taW50ZW5zaXZlLWNvcHktd2VicGFjay8uL3NyYy9tb2R1bGVzL2F1dGguanM/ZTdiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhdXRoID0gKCkgPT4ge1xyXG4gIC8vINCSINC60LvQsNGB0YEg0LHRiyDQt9Cw0L/QuNGB0LDRgtGMINCy0YHRkSDRjdGC0L4uLi5cclxuICBjb25zdCBidXR0b25BdXRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1hdXRoJyk7XHJcbiAgY29uc3QgbW9kZWxBdXRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWF1dGgnKTtcclxuICBjb25zdCBtb2RhbENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWF1dGgnKTtcclxuICBjb25zdCBsb2dJbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nSW5Gb3JtJyk7XHJcbiAgY29uc3QgaW5wdXRMb2dpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbicpO1xyXG4gIGNvbnN0IGlucHV0UGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQnKTtcclxuICBjb25zdCBidXR0b25PdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLW91dCcpO1xyXG4gIGNvbnN0IHVzZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXItbmFtZScpO1xyXG5cclxuXHJcbiAgY29uc3QgbmFtZWlucHV0ID0gZG9jdW1lbnQuZm9ybXMubWFpbi5uYW1lSW5wdXQ7XHJcblxyXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgIGJ1dHRvbkF1dGguc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuXHJcbiAgICBidXR0b25PdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIHVzZXJOYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB1c2VyTmFtZS50ZXh0Q29udGVudCA9ICcnO1xyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XHJcbiAgfVxyXG5cclxuICBidXR0b25PdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBsb2dvdXQoKTtcclxuICB9KVxyXG5cclxuICBtb2RhbENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgbW9kZWxBdXRoLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfSlcclxuXHJcbiAgYnV0dG9uQXV0aC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIG1vZGVsQXV0aC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gIH0pXHJcblxyXG4gIGxvZ0luRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBjb25zb2xlLmRpcihpbnB1dExvZ2luLnZhbHVlKTtcclxuICAgIGNvbnN0IHVzZXIgPSB7XHJcbiAgICAgIGxvZ2luOiBpbnB1dExvZ2luLnZhbHVlLFxyXG4gICAgICBwYXNzd29yZDogaW5wdXRQYXNzd29yZC52YWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xyXG5cclxuICAgIGlmIChsb2dpbih1c2VyKSkge1xyXG4gICAgICBoaWRlTW9kYWwodXNlcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gIH0pXHJcbiAgLy8gdmFsaWRhdGUgbG9naW5cclxuICBjb25zdCB2YWxpZGF0ZUxvZ2luID0gbG9naW5WYWx1ZSA9PiAvXlswLTlhLXpBLXpfXFxkXXsxLDEyfSQvLnRlc3QobG9naW5WYWx1ZSk7XHJcblxyXG4gIGNvbnN0IGxvZ2luID0gKHVzZXIpID0+IHtcclxuICAgIGlmICghdmFsaWRhdGVMb2dpbih1c2VyLmxvZ2luKSkge1xyXG4gICAgICBuYW1laW5wdXQucGFyZW50RWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgICAgXCJiZWZvcmVlbmRcIixcclxuICAgICAgICBgPGRpdiBjbGFzcz1cIm1haW4tZm9ybV9fZXJyb3JcIj5cclxuICAgICAgICAgINCS0LLQtdC00LjRgtC1INC70L7Qs9C40L1cclxuICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfTtcclxuXHJcbiAgfVxyXG4gIG5hbWVpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBjb25zb2xlLmxvZygnZm9jdXMhJylcclxuICAgIGlmIChuYW1laW5wdXQubmV4dEVsZW1lbnRTaWJsaW5nKSB7XHJcbiAgICAgIG5hbWVpbnB1dC5uZXh0RWxlbWVudFNpYmxpbmcucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGhpZGVNb2RhbCA9ICh1c2VyKSA9PiB7XHJcbiAgICBidXR0b25BdXRoLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgYnV0dG9uT3V0LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICB1c2VyTmFtZS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG5cclxuICAgIHVzZXJOYW1lLnRleHRDb250ZW50ID0gdXNlci5sb2dpbjtcclxuICAgIG1vZGVsQXV0aC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH1cclxuXHJcblxyXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKSB7XHJcbiAgICAvLyBsb2dpbihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpKTtcclxuICAgIGhpZGVNb2RhbChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpKTtcclxuICB9XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXV0aDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/auth.js\n");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  const cardsMenu = document.querySelector('.cards-menu');\r\n\r\n  const changeTitle = (restaurant) => {\r\n    const restaurantTitle = document.querySelector('.restaurant-title');\r\n    const restaurantRating = document.querySelector('.rating');\r\n    const restaurantPrice = document.querySelector('.price');\r\n    \r\n    restaurantTitle.textContent = restaurant.name;\r\n    restaurantRating.textContent = restaurant.stars;\r\n    restaurantPrice.textContent = restaurant.price;\r\n\r\n  }\r\n\r\n  const renderItems = (data) => {\r\n    data.forEach(({description, id, image, name, price}) => {\r\n\r\n      const card = document.createElement('div');\r\n      card.classList.add('card');\r\n      \r\n      card.innerHTML = `\r\n        <img src=\"${image}\" alt=\"${name}\" class=\"card-image\" />\r\n        <div class=\"card-text\">\r\n          <div class=\"card-heading\">\r\n            <h3 class=\"card-title card-title-reg\">${name}</h3>\r\n          </div>\r\n          <div class=\"card-info\">\r\n            <div class=\"ingredients\">\r\n              ${description}\r\n            </div>\r\n          </div>\r\n          <div class=\"card-buttons\">\r\n            <button class=\"button button-primary button-add-cart\">\r\n              <span class=\"button-card-text\">В корзину</span>\r\n              <span class=\"button-cart-svg\"></span>\r\n            </button>\r\n            <strong class=\"card-price-bold\">${price} ₽</strong>\r\n          </div>\r\n      `;\r\n      cardsMenu.append(card); \r\n    });\r\n  }\r\n\r\n  if (localStorage.getItem('restaurant')) {\r\n    const restaurant = JSON.parse(localStorage.getItem('restaurant'));\r\n\r\n    changeTitle(restaurant);\r\n\r\n    fetch(`https://practice-7d984-default-rtdb.firebaseio.com/db/${restaurant.products}`)\r\n    .then((response) => response.json())\r\n    .then((data) => renderItems(data))\r\n    .catch((error) => {\r\n      console.log(error)\r\n    })\r\n  } else {\r\n\r\n    window.location.href = '/';\r\n  }\r\n\r\n  \r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9tZW51LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsb0NBQW9DO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsTUFBTSxTQUFTLEtBQUs7QUFDeEM7QUFDQTtBQUNBLG9EQUFvRCxLQUFLO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxPQUFPO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRSxvQkFBb0I7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2xvLWludGVuc2l2ZS1jb3B5LXdlYnBhY2svLi9zcmMvbW9kdWxlcy9tZW51LmpzPzJmYWQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbWVudSA9ICgpID0+IHtcclxuICBjb25zdCBjYXJkc01lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHMtbWVudScpO1xyXG5cclxuICBjb25zdCBjaGFuZ2VUaXRsZSA9IChyZXN0YXVyYW50KSA9PiB7XHJcbiAgICBjb25zdCByZXN0YXVyYW50VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdGF1cmFudC10aXRsZScpO1xyXG4gICAgY29uc3QgcmVzdGF1cmFudFJhdGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYXRpbmcnKTtcclxuICAgIGNvbnN0IHJlc3RhdXJhbnRQcmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmljZScpO1xyXG4gICAgXHJcbiAgICByZXN0YXVyYW50VGl0bGUudGV4dENvbnRlbnQgPSByZXN0YXVyYW50Lm5hbWU7XHJcbiAgICByZXN0YXVyYW50UmF0aW5nLnRleHRDb250ZW50ID0gcmVzdGF1cmFudC5zdGFycztcclxuICAgIHJlc3RhdXJhbnRQcmljZS50ZXh0Q29udGVudCA9IHJlc3RhdXJhbnQucHJpY2U7XHJcblxyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVuZGVySXRlbXMgPSAoZGF0YSkgPT4ge1xyXG4gICAgZGF0YS5mb3JFYWNoKCh7ZGVzY3JpcHRpb24sIGlkLCBpbWFnZSwgbmFtZSwgcHJpY2V9KSA9PiB7XHJcblxyXG4gICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xyXG4gICAgICBcclxuICAgICAgY2FyZC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGltZyBzcmM9XCIke2ltYWdlfVwiIGFsdD1cIiR7bmFtZX1cIiBjbGFzcz1cImNhcmQtaW1hZ2VcIiAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRleHRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRpbmdcIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzPVwiY2FyZC10aXRsZSBjYXJkLXRpdGxlLXJlZ1wiPiR7bmFtZX08L2gzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1pbmZvXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmdyZWRpZW50c1wiPlxyXG4gICAgICAgICAgICAgICR7ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1idXR0b25zXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gYnV0dG9uLXByaW1hcnkgYnV0dG9uLWFkZC1jYXJ0XCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJidXR0b24tY2FyZC10ZXh0XCI+0JIg0LrQvtGA0LfQuNC90YM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJidXR0b24tY2FydC1zdmdcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVwiY2FyZC1wcmljZS1ib2xkXCI+JHtwcmljZX0g4oK9PC9zdHJvbmc+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgYDtcclxuICAgICAgY2FyZHNNZW51LmFwcGVuZChjYXJkKTsgXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVzdGF1cmFudCcpKSB7XHJcbiAgICBjb25zdCByZXN0YXVyYW50ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVzdGF1cmFudCcpKTtcclxuXHJcbiAgICBjaGFuZ2VUaXRsZShyZXN0YXVyYW50KTtcclxuXHJcbiAgICBmZXRjaChgaHR0cHM6Ly9wcmFjdGljZS03ZDk4NC1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb20vZGIvJHtyZXN0YXVyYW50LnByb2R1Y3RzfWApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChkYXRhKSA9PiByZW5kZXJJdGVtcyhkYXRhKSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9KVxyXG4gIH0gZWxzZSB7XHJcblxyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLyc7XHJcbiAgfVxyXG5cclxuICBcclxufVxyXG5leHBvcnQgZGVmYXVsdCBtZW51Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/menu.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/menu.js");
/******/ 	
/******/ })()
;