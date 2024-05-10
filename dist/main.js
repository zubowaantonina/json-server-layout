/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/render */ \"./src/modules/render.js\");\n/* harmony import */ var _modules_addUsers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/addUsers */ \"./src/modules/addUsers.js\");\n/* harmony import */ var _modules_removeUsers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/removeUsers */ \"./src/modules/removeUsers.js\");\n/* harmony import */ var _modules_userServise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/userServise */ \"./src/modules/userServise.js\");\n/* harmony import */ var _modules_changePermissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/changePermissions */ \"./src/modules/changePermissions.js\");\n/* harmony import */ var _modules_editUsers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/editUsers */ \"./src/modules/editUsers.js\");\n/* harmony import */ var _modules_filterUsers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/filterUsers */ \"./src/modules/filterUsers.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.userService=new _modules_userServise__WEBPACK_IMPORTED_MODULE_3__.UserService();\r\nuserService.getUsers().then(data => {\r\n    (0,_modules_render__WEBPACK_IMPORTED_MODULE_0__.render)(data);\r\n})\r\n\r\n;(0,_modules_addUsers__WEBPACK_IMPORTED_MODULE_1__.addUsers)();\r\n(0,_modules_removeUsers__WEBPACK_IMPORTED_MODULE_2__.removeUsers)();\r\n(0,_modules_changePermissions__WEBPACK_IMPORTED_MODULE_4__.changePermissions)();\r\n(0,_modules_editUsers__WEBPACK_IMPORTED_MODULE_5__.editUsers)();\r\n(0,_modules_filterUsers__WEBPACK_IMPORTED_MODULE_6__.filterUsers)();\n\n//# sourceURL=webpack://json-sever__lesson/./src/index.js?");

/***/ }),

/***/ "./src/modules/addUsers.js":
/*!*********************************!*\
  !*** ./src/modules/addUsers.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addUsers: () => (/* binding */ addUsers)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\r\n\r\nconst addUsers = () => {\r\n  const form = document.querySelector(\"form\");\r\n  const nameImput = document.querySelector(\"#form-name\");\r\n  const emailImput = document.querySelector(\"#form-email\");\r\n  const childrenImput = document.querySelector(\"#form-children\");\r\n  form.addEventListener(\"submit\", (e) => {\r\n    e.preventDefault();\r\nif(!form.dataset.metod){\r\n    const user = {\r\n        name: nameImput.value,\r\n        email: emailImput.value,\r\n        children: childrenImput.checked,\r\n        permissions: false,\r\n      };\r\n      userService.addUser(user).then(() => {\r\n        userService.getUsers().then((users) => {\r\n          (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users);\r\n          form.reset();\r\n        });\r\n      });\r\n}\r\n   \r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/addUsers.js?");

/***/ }),

/***/ "./src/modules/changePermissions.js":
/*!******************************************!*\
  !*** ./src/modules/changePermissions.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changePermissions: () => (/* binding */ changePermissions)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\r\nconst changePermissions=() => {\r\n    const tBody = document.getElementById(\"table-body\");\r\n    tBody.addEventListener(\"click\", (event) => {\r\n      if (event.target.closest(\"input[type=checkbox]\")) {\r\n        const tr = event.target.closest(\"tr\");\r\n        const input=tr.querySelector(\"input[type=checkbox]\")\r\n        const id = tr.dataset.key;\r\n        console.log(id);\r\n        console.log(input.checked);\r\n        userService.changeUser(id,{permissions:input.checked}).then((res) => {\r\n          userService.getUsers().then((users) => {\r\n            (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users);\r\n          });\r\n        });\r\n      }\r\n    });\r\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/changePermissions.js?");

/***/ }),

/***/ "./src/modules/editUsers.js":
/*!**********************************!*\
  !*** ./src/modules/editUsers.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   editUsers: () => (/* binding */ editUsers)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\r\nconst editUsers = () => {\r\n  const form = document.querySelector(\"form\");\r\n  const nameImput = document.querySelector(\"#form-name\");\r\n  const emailImput = document.querySelector(\"#form-email\");\r\n  const childrenImput = document.querySelector(\"#form-children\");\r\n  const tBody = document.getElementById(\"table-body\");\r\n\r\n  tBody.addEventListener(\"click\", (event) => {\r\n    if (event.target.closest(\".btn-edit\")) {\r\n      const tr = event.target.closest(\"tr\");\r\n      const id = tr.dataset.key;\r\n      console.log(id);\r\n      userService.getUser(id).then((user) => {\r\n        (nameImput.value = user.name),\r\n          (emailImput.value = user.email),\r\n          (childrenImput.checked = user.children);\r\n          form.dataset.metod=id\r\n        console.log(user);\r\n      });\r\n    }\r\n  });\r\n  form.addEventListener(\"submit\", (e) => {\r\n    e.preventDefault();\r\nif(form.dataset.metod){\r\n    const id=form.dataset.metod\r\n    const user = {\r\n        name: nameImput.value,\r\n        email: emailImput.value,\r\n        children: childrenImput.checked,\r\n        permissions: false,\r\n      };\r\n\r\n      userService.editUser(id,user).then(() => {\r\n        userService.getUsers().then((users) => {\r\n          (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users);\r\n          form.reset();\r\n          form.removeAttribute('data-metod');\r\n        });\r\n      });\r\n}\r\n   \r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/editUsers.js?");

/***/ }),

/***/ "./src/modules/filterUsers.js":
/*!************************************!*\
  !*** ./src/modules/filterUsers.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   filterUsers: () => (/* binding */ filterUsers)\n/* harmony export */ });\nconst filterUsers=() => {\r\n   \r\n  const btnIsChildren=document.getElementById('btn-isChildren')\r\n  const btnIsPermissions=document.getElementById('btn-isPermissions')\r\n  const btnIsAll=document.getElementById('btn-isAll')\r\n  btnIsChildren.addEventListener('click', () => {\r\n    userService.filterUsers(\"children\").then((users) => {\r\n        console.log(users);\r\n        // render(users);\r\n        // form.reset();\r\n      });\r\n    console.log(btnIsChildren);\r\n  })\r\n  btnIsPermissions.addEventListener('click', () => {\r\n    console.log(btnIsPermissions);\r\n  })\r\n  btnIsAll.addEventListener('click', () => {\r\n    console.log(btnIsAll);\r\n  })\r\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/filterUsers.js?");

/***/ }),

/***/ "./src/modules/removeUsers.js":
/*!************************************!*\
  !*** ./src/modules/removeUsers.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   removeUsers: () => (/* binding */ removeUsers)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\r\nconst removeUsers = () => {\r\n  const tBody = document.getElementById(\"table-body\");\r\n  tBody.addEventListener(\"click\", (event) => {\r\n    if (event.target.closest(\".btn-remove\")) {\r\n      const tr = event.target.closest(\"tr\");\r\n      const id = tr.dataset.key;\r\n      userService.removeUser(id).then((res) => {\r\n        userService.getUsers().then((users) => {\r\n          (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users);\r\n        });\r\n      });\r\n    }\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/removeUsers.js?");

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\nconst render = (users) => {\r\n  const tBody=document.getElementById('table-body');\r\n  tBody.innerHTML=''\r\n  // console.log(tBody);\r\n  users.forEach(user =>{\r\n  // console.log(user);\r\n  tBody.insertAdjacentHTML(\"beforeend\",`\r\n\r\n <tr data-key=\"${user.id}\">\r\n<th scope=\"row\">${user.id}</th>\r\n<td>${user.name}</td>\r\n<td>${user.email}/td>\r\n<td>${user.children?\"Есть\":\"Нет\"}</td>\r\n<td>\r\n    <div class=\"form-check form-switch\">\r\n        <input class=\"form-check-input\" type=\"checkbox\" role=\"switch\" id=\"form-children\"\r\n        ${user.permissions?\"checked\":\"\"}>\r\n    </div>\r\n</td>\r\n<td>\r\n    <div class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"Basic example\">\r\n        <button type=\"button\" class=\"btn btn-warning btn-edit\">\r\n            <i class=\"bi-pencil-square\"></i>\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-danger btn-remove\">\r\n            <i class=\"bi-person-x\"></i>\r\n        </button>\r\n    </div>\r\n</td>\r\n</tr> \r\n`)\r\n })\r\n\r\n}\r\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/render.js?");

/***/ }),

/***/ "./src/modules/userServise.js":
/*!************************************!*\
  !*** ./src/modules/userServise.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserService: () => (/* binding */ UserService)\n/* harmony export */ });\nclass UserService {\r\n  getUsers() {\r\n    return fetch(\"http://localhost:4545/users\").then((res) => res.json());\r\n  }\r\n\r\n  addUser(user) {\r\n    return fetch(\"http://localhost:4545/users\", {\r\n      method: \"POST\",\r\n      headers: {\r\n        \"Content-Type\": \"application/json\",\r\n      },\r\n      body: JSON.stringify(user),\r\n    }).then((res) => res.json());\r\n  }\r\n  removeUser(id) {\r\n    return fetch(`http://localhost:4545/users/${id}`, {\r\n      method: \"DELETE\",\r\n    }).then((res) => res.json());\r\n  }\r\n changeUser(id, data) {\r\n    return fetch(`http://localhost:4545/users/${id}`, {\r\n      method: \"PATCH\",\r\n      body: JSON.stringify(data),\r\n      headers: {\r\n        \"Content-Type\": \"application/json\",\r\n      },\r\n    }).then((res) => res.json());\r\n  }\r\n  getUser(id) {\r\n    return fetch(`http://localhost:4545/users/${id}`).then((res) => res.json());\r\n  }\r\n  editUser(id, user) {\r\n    return fetch(`http://localhost:4545/users/${id}`, {\r\n        method: \"PUT\",\r\n        body: JSON.stringify(user),\r\n        headers: {\r\n          \"Content-Type\": \"application/json\",\r\n        },\r\n      }).then((res) => res.json());\r\n  }\r\n   filterUsers(filterOption) {\r\n        return fetch(`http://localhost:4545/users?${filterOption}=true`)\r\n        .then(res => res.json());\r\n    } \r\n}\r\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/userServise.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;