/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./css/main.scss":
/*!***********************!*\
  !*** ./css/main.scss ***!
  \***********************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected character '@' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> @import url(\\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap\\\");\\n| @import url(\\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Nunito+Sans:ital,opsz,wght,YTLC@0,6..12,200..1000,440..540;1,6..12,200..1000,440..540&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Yeseva+One&display=swap\\\");\\n| @import \\\"variables\\\";\");\n\n//# sourceURL=webpack:///./css/main.scss?");

/***/ }),

/***/ "./css/variables.scss":
/*!****************************!*\
  !*** ./css/variables.scss ***!
  \****************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (1:16)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> $font-main-color: #5c6a79;\\n| $items-background-color: #efeef6;\");\n\n//# sourceURL=webpack:///./css/variables.scss?");

/***/ }),

/***/ "./js/books.js":
/*!*********************!*\
  !*** ./js/books.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getBooks: () => (/* binding */ getBooks)\n/* harmony export */ });\nlet startIndex = 0;\r\nconst apiKey = \"AIzaSyAyesH5aiGQBMpFU6HXqziqeSrxRSuJiL8\";\r\n\r\nconst booksStorage = JSON.parse(localStorage.getItem('cart')) ?? [];\r\n\r\nfunction getBooks(category) {\r\n    const query = `subject:${encodeURIComponent(category)}`;\r\n    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}&printType=books&startIndex=${startIndex}&maxResults=6&langRestrict=en`;\r\n\r\n    fetch(apiUrl)\r\n        .then(response => {\r\n            if (!response.ok) {\r\n                throw new Error('Ошибка связи');\r\n            }\r\n            return response.json();\r\n        })\r\n        .then(data => {\r\n            const booksLayout = document.querySelector(\".books__layout\");\r\n            booksLayout.innerHTML = '';\r\n            data.items.forEach(book => {\r\n                const bookCard = document.createElement('div');\r\n                bookCard.classList.add('book__card--layout');\r\n\r\n                const thumbnail = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : '';\r\n                const author = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : '';\r\n                const title = book.volumeInfo.title;\r\n                const ratingsCount = book.volumeInfo.ratingsCount ? `Ratings: ${book.volumeInfo.ratingsCount}` : '';\r\n                                \r\n                let description = book.volumeInfo.description ? book.volumeInfo.description : '';\r\n                const maxLength = 3 * 60; \r\n                if (description.length > maxLength) {\r\n                    description = description.substring(0, maxLength) + '...';\r\n                }\r\n                                \r\n                const retailPrice = book.saleInfo && book.saleInfo.listPrice && book.saleInfo.listPrice.amount ? `${book.saleInfo.listPrice.amount} ${book.saleInfo.listPrice.currencyCode}` : '';\r\n\r\n\r\n                           bookCard.innerHTML = `\r\n                    <img src=\"${thumbnail}\" class=\"book__card-image\" alt=\"Thumbnail\">\r\n                    <div class=\"book__card-info\">\r\n                        <p class=\"book__author\">${author}</p>\r\n                        <p class=\"book__title\">${title}</p>\r\n                        <p class=\"book__raiting\">${ratingsCount}</p>\r\n                        <p class=\"book__descr\">${description}</p>\r\n                        <p class=\"book__price\">${retailPrice}</p>\r\n                       <button data-id=\"${book.id}\" class='button btn__buy'>${booksStorage.includes(book.id) ? 'In The Cart' : 'Buy Now'}</button>\r\n                    </div>\r\n                `;\r\n                booksLayout.appendChild(bookCard);\r\n            });\r\n            startIndex += 6; \r\n        })\r\n        .catch(error => {\r\n            console.error('Ошибка при загрузке данных:', error);\r\n        });\r\n    }\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    const cartCount = document.querySelector('.cart__count');\r\n    const booksStorage = JSON.parse(localStorage.getItem('cart')) ?? [];\r\n\r\n    function updateCartCount() {\r\n        cartCount.innerText = booksStorage.length;\r\n        if (booksStorage.length > 0) {\r\n            cartCount.style.display = 'block'; \r\n        } else {\r\n            cartCount.style.display = 'none'; \r\n        }\r\n    }\r\n    updateCartCount();\r\n\r\n    const categoryItems = document.querySelectorAll('.category');\r\n    let initialCategory = '';\r\n    categoryItems.forEach(item => {\r\n        if (item.classList.contains('sidebar-active')) {\r\n            initialCategory = item.textContent.trim();\r\n        }\r\n\r\n        item.addEventListener('click', () => {\r\n            document.querySelector('.category.category__active').classList.remove('category__active');\r\n            item.classList.add('category__active');\r\n            const category = item.textContent.trim();\r\n            startIndex = 0; \r\n            getBooks(category);\r\n        });\r\n    });\r\n\r\n    document.addEventListener('click', (event) => {\r\n        if(event.target.classList.contains('btn__buy')) {                  \r\n            const id = event.target.getAttribute('data-id');\r\n                     if (event.target.textContent === 'Buy Now') {                      \r\n                        event.target.textContent = 'In The Cart';\r\n                        event.target.classList.add('button__cart');\r\n                        booksStorage.push(id);\r\n                        localStorage.setItem('cart', JSON.stringify(booksStorage))\r\n                }else { \r\n                    event.target.textContent = 'Buy Now';\r\n                    event.target.classList.remove('button__cart');\r\n                    booksStorage.splice(booksStorage.indexOf(id), 1)\r\n                    }\r\n                localStorage.setItem('cart', JSON.stringify(booksStorage));\r\n                updateCartCount();\r\n        }\r\n    })\r\n        getBooks(initialCategory);\r\n    });     \r\n    const loadMore = document.querySelector('.more'); \r\n    loadMore.addEventListener('click', () => {\r\n        const activeCategory = document.querySelector('.category.category__active').textContent.trim();\r\n        getBooks(activeCategory); \r\n    });\r\n\n\n//# sourceURL=webpack:///./js/books.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider.js */ \"./js/slider.js\");\n/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_slider_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _books_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./books.js */ \"./js/books.js\");\n/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/main.scss */ \"./css/main.scss\");\n/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_main_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _css_variables_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/variables.scss */ \"./css/variables.scss\");\n/* harmony import */ var _css_variables_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_variables_scss__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./js/slider.js":
/*!**********************!*\
  !*** ./js/slider.js ***!
  \**********************/
/***/ (() => {

eval("let images = [{\r\n    url: \"../img/banner_1.png\"\r\n}, {\r\n    url: \"../img/banner_2.png\"\r\n    \r\n}, {\r\n    url: \"../img/banner_3.png\"\r\n    \r\n}];\r\n\r\nconst sliderImages = document.querySelector(\".slider__images\");\r\nconst sliderDots = document.querySelector(\".slider__dots\");\r\n\r\n  initImages();\r\n  initDots();\r\n  initAutoplay();\r\n\r\nfunction initImages() {\r\n        images.forEach((image, index) => {\r\n          let imageDiv = `<div class=\"image n${index} ${index === 0? \"active\" : \"\"}\" style=\"background-image:url(${images[index].url});\" data-index=\"${index}\"></div>`;\r\n          sliderImages.innerHTML += imageDiv;\r\n        });\r\n      }\r\nfunction initDots() {\r\n    images.forEach((image, index) => {\r\n      let dot = `<div class=\"slider__dots-item n${index} ${index === 0? \"active\" : \"\"}\" data-index=\"${index}\"></div>`;\r\n      sliderDots.innerHTML += dot;\r\n    });\r\n    sliderDots.querySelectorAll(\".slider__dots-item\").forEach(dot => {\r\n      dot.addEventListener(\"click\", function() {\r\n        moveSlider(this.dataset.index);\r\n      })\r\n    })\r\n  }\r\nfunction moveSlider(num) {\r\n    sliderImages.querySelector(\".active\").classList.remove(\"active\");\r\n     sliderImages.querySelector(\".n\" + num).classList.add(\"active\");\r\n    sliderDots.querySelector(\".active\").classList.remove(\"active\");\r\n     sliderDots.querySelector(\".n\" + num).classList.add(\"active\");\r\n  }\r\nfunction initAutoplay() {\r\n    setInterval(() => {\r\n      let curNumber = +sliderImages.querySelector(\".active\").dataset.index;\r\n      let nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;\r\n      moveSlider(nextNumber);\r\n    }, 5000);\r\n  }\r\n\r\n  \n\n//# sourceURL=webpack:///./js/slider.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;