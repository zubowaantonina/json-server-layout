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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/render */ \"./modules/render.js\");\n/* harmony import */ var _modules_addUsers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/addUsers */ \"./modules/addUsers.js\");\n/* harmony import */ var _modules_userServise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/userServise */ \"./modules/userServise.js\");\n\r\n\r\n\r\n\r\n\r\nwindow.userService=new _modules_userServise__WEBPACK_IMPORTED_MODULE_2__.UserService();\r\nuserService.getUsers().then(data => {\r\n    (0,_modules_render__WEBPACK_IMPORTED_MODULE_0__.render)(data);\r\n})\r\n\r\n;(0,_modules_addUsers__WEBPACK_IMPORTED_MODULE_1__.addUsers)();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/addUsers.js":
/*!*****************************!*\
  !*** ./modules/addUsers.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addUsers: () => (/* binding */ addUsers)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./modules/render.js\");\n\r\n\r\nconst addUsers = () => {\r\n    const form = document.querySelector(\"form\");\r\n    const nameImput = document.querySelector(\"#form-name\");\r\n    const emailImput = document.querySelector(\"#form-email\");\r\n    const childrenImput = document.querySelector(\"#form-children\");\r\n    form.addEventListener(\"submit\", (e) => {\r\n        e.preventDefault();\r\n\r\n        const user = {\r\n            name: nameImput.value,\r\n            email: emailImput.value,\r\n            children: childrenImput.checked,\r\n            permissions: false\r\n        }\r\n        // userService.addUser(user).then((user) => {\r\n        //     userService.getUsers().then(users => {\r\n        //         render(users)\r\n        //     })\r\n        // })\r\n        console.log(user);\r\n\r\n    });\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/addUsers.js?");

/***/ }),

/***/ "./modules/render.js":
/*!***************************!*\
  !*** ./modules/render.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\nconst render = (users) => {\r\n  const tBody=document.getElementById('table-body');\r\n  // console.log(tBody);\r\n  users.forEach(user =>{\r\n  // console.log(user);\r\n  tBody.insertAdjacentHTML(\"beforeend\",`\r\n\r\n <tr>\r\n<th scope=\"row\">${user.id}</th>\r\n<td>${user.name}</td>\r\n<td>${user.email}/td>\r\n<td>${user.children?\"Есть\":\"Нет\"}</td>\r\n<td>\r\n    <div class=\"form-check form-switch\">\r\n        <input class=\"form-check-input\" type=\"checkbox\" role=\"switch\" id=\"form-children\"\r\n        ${user.permissions?\"checked\":\"\"}>\r\n    </div>\r\n</td>\r\n<td>\r\n    <div class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"Basic example\">\r\n        <button type=\"button\" class=\"btn btn-warning\">\r\n            <i class=\"bi-pencil-square\"></i>\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-danger\">\r\n            <i class=\"bi-person-x\"></i>\r\n        </button>\r\n    </div>\r\n</td>\r\n</tr> \r\n`)\r\n })\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./modules/render.js?");

/***/ }),

/***/ "./modules/userServise.js":
/*!********************************!*\
  !*** ./modules/userServise.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserService: () => (/* binding */ UserService)\n/* harmony export */ });\n\r\n\r\nclass UserService {\r\n    getUsers() {\r\n        return fetch('http://localhost:4545/users').then(res => res.json());\r\n    };\r\n    // addUser(user) {\r\n    //     return fetch('http://localhost:4545/users', {\r\n    //         method: 'POST',\r\n    //         headers: { \r\n    //             \"Content-Type\": \"application/json\",\r\n    //         },\r\n    //         body: JSON.stringify(user)\r\n\r\n    //     }).then(res => res.json());\r\n    // }\r\n}\r\n\n\n//# sourceURL=webpack:///./modules/userServise.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;