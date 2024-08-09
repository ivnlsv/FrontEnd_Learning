/*! For license information please see main.js.LICENSE.txt */
(()=>{var __webpack_modules__={"./js/books.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getBooks: () => (/* binding */ getBooks)\n/* harmony export */ });\nlet startIndex = 0;\r\nconst apiKey = \"AIzaSyAyesH5aiGQBMpFU6HXqziqeSrxRSuJiL8\";\r\n\r\nconst booksStorage = JSON.parse(localStorage.getItem('cart')) ?? [];\r\n\r\nfunction getBooks(category) {\r\n    const query = `subject:${encodeURIComponent(category)}`;\r\n    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}&printType=books&startIndex=${startIndex}&maxResults=6&langRestrict=en`;\r\n\r\n    fetch(apiUrl)\r\n        .then(response => {\r\n            if (!response.ok) {\r\n                throw new Error('Ошибка связи');\r\n            }\r\n            return response.json();\r\n        })\r\n        .then(data => {\r\n            const booksLayout = document.querySelector(\".books__layout\");\r\n            booksLayout.innerHTML = '';\r\n            data.items.forEach(book => {\r\n                const bookCard = document.createElement('div');\r\n                bookCard.classList.add('book__card--layout');\r\n\r\n                const thumbnail = book.volumeInfo.imageLinks.thumbnail ?? '../img/placeholder.jpg';\r\n                const author = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : '';\r\n                const title = book.volumeInfo.title;\r\n                const averageRating = book.volumeInfo.averageRating;\r\n                const ratingsCount = book.volumeInfo.ratingsCount ? `${book.volumeInfo.ratingsCount} reviews` : '';\r\n                         \r\n                let description = book.volumeInfo.description ? book.volumeInfo.description : '';\r\n                const maxLength = 3 * 60; \r\n                if (description.length > maxLength) {\r\n                    description = description.substring(0, maxLength) + '...';\r\n                }\r\n                                \r\n                const retailPrice = book.saleInfo && book.saleInfo.listPrice && book.saleInfo.listPrice.amount ? `${book.saleInfo.listPrice.amount} ${book.saleInfo.listPrice.currencyCode}` : '';\r\n                let stars = '';\r\n         for (let i = 0; i < averageRating; i++) {\r\n           stars += \r\n           `<span class=\"star\">\r\n                    <svg width=\"12\" height=\"12\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\">\r\n                    <path d=\"M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z\" />\r\n                    </svg>\r\n                \r\n            </span>`;\r\n         }\r\n     \r\n         for (let i = averageRating; i < 5; i++) {\r\n           stars += `<span class=\"grey-star\"><svg width=\"12\" height=\"12\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\">\r\n           <path d=\"M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z\" />\r\n           </svg></span>`;\r\n         }  \r\n\r\n                bookCard.innerHTML = `\r\n                    <img src=\"${thumbnail}\" class=\"book__card-image\" alt=\"Thumbnail\">\r\n                    <div class=\"book__card-info\">\r\n                        <p class=\"book__author\">${author}</p>\r\n                        <p class=\"book__title\">${title}</p>\r\n                        <p class=\"book__raiting\">${stars}&nbsp;${ratingsCount}</p>\r\n                        <p class=\"book__descr\">${description}</p>\r\n                        <p class=\"book__price\">${retailPrice}</p>\r\n                       <button data-id=\"${book.id}\" class='button btn__buy'>${booksStorage.includes(book.id) ? 'In The Cart' : 'Buy Now'}</button>\r\n                    </div>\r\n                `;\r\n                booksLayout.appendChild(bookCard);\r\n            });\r\n            startIndex += 6; \r\n        })\r\n        .catch(error => {\r\n            console.error('Ошибка при загрузке данных:', error);\r\n        });\r\n    }\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    const cartCount = document.querySelector('.cart__count');\r\n    const booksStorage = JSON.parse(localStorage.getItem('cart')) ?? [];\r\n\r\n    function updateCartCount() {\r\n        cartCount.innerText = booksStorage.length;\r\n        if (booksStorage.length > 0) {\r\n            cartCount.style.display = 'block'; \r\n        } else {\r\n            cartCount.style.display = 'none'; \r\n        }\r\n    }\r\n    updateCartCount();\r\n\r\n    const categoryItems = document.querySelectorAll('.category');\r\n    let initialCategory = '';\r\n    categoryItems.forEach(item => {\r\n        if (item.classList.contains('sidebar-active')) {\r\n            initialCategory = item.textContent.trim();\r\n        }\r\n\r\n        item.addEventListener('click', () => {\r\n            document.querySelector('.category.category__active').classList.remove('category__active');\r\n            item.classList.add('category__active');\r\n            const category = item.textContent.trim();\r\n            startIndex = 0; \r\n            getBooks(category);\r\n        });\r\n    });\r\n\r\n    document.addEventListener('click', (event) => {\r\n        if(event.target.classList.contains('btn__buy')) {                  \r\n            const id = event.target.getAttribute('data-id');\r\n                     if (event.target.textContent === 'Buy Now') {                      \r\n                        event.target.textContent = 'In The Cart';\r\n                        event.target.classList.add('button__cart');\r\n                        booksStorage.push(id);\r\n                        localStorage.setItem('cart', JSON.stringify(booksStorage))\r\n                }else { \r\n                    event.target.textContent = 'Buy Now';\r\n                    event.target.classList.remove('button__cart');\r\n                    booksStorage.splice(booksStorage.indexOf(id), 1)\r\n                    }\r\n                localStorage.setItem('cart', JSON.stringify(booksStorage));\r\n                updateCartCount();\r\n        }\r\n    })\r\n        getBooks(initialCategory);\r\n    });     \r\n    const loadMore = document.querySelector('.more'); \r\n    loadMore.addEventListener('click', () => {\r\n        const activeCategory = document.querySelector('.category.category__active').textContent.trim();\r\n        getBooks(activeCategory); \r\n    });\r\n\n\n//# sourceURL=webpack:///./js/books.js?")},"./js/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider.js */ "./js/slider.js");\n/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_slider_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _books_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./books.js */ "./js/books.js");\n/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/main.scss */ "./css/main.scss");\n/* harmony import */ var _css_variables_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/variables.scss */ "./css/variables.scss");\n/* harmony import */ var _css_media_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/media.scss */ "./css/media.scss");\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/index.js?')},"./js/slider.js":()=>{eval('let images = [{\r\n    url: "../img/banner_1.png"\r\n}, {\r\n    url: "../img/banner_2.png"\r\n    \r\n}, {\r\n    url: "../img/banner_3.png"\r\n    \r\n}];\r\n\r\nconst sliderImages = document.querySelector(".slider__images");\r\nconst sliderDots = document.querySelector(".slider__dots");\r\n\r\n  initImages();\r\n  initDots();\r\n  initAutoplay();\r\n\r\nfunction initImages() {\r\n        images.forEach((image, index) => {\r\n          let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;\r\n          sliderImages.innerHTML += imageDiv;\r\n        });\r\n      }\r\nfunction initDots() {\r\n    images.forEach((image, index) => {\r\n      let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;\r\n      sliderDots.innerHTML += dot;\r\n    });\r\n    sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {\r\n      dot.addEventListener("click", function() {\r\n        moveSlider(this.dataset.index);\r\n      })\r\n    })\r\n  }\r\nfunction moveSlider(num) {\r\n    sliderImages.querySelector(".active").classList.remove("active");\r\n     sliderImages.querySelector(".n" + num).classList.add("active");\r\n    sliderDots.querySelector(".active").classList.remove("active");\r\n     sliderDots.querySelector(".n" + num).classList.add("active");\r\n  }\r\nfunction initAutoplay() {\r\n    setInterval(() => {\r\n      let curNumber = +sliderImages.querySelector(".active").dataset.index;\r\n      let nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;\r\n      moveSlider(nextNumber);\r\n    }, 5000);\r\n  }\r\n\r\n  \n\n//# sourceURL=webpack:///./js/slider.js?')},"./css/main.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./css/main.scss?")},"./css/media.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./css/media.scss?")},"./css/variables.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./css/variables.scss?")}},__webpack_module_cache__={};function __webpack_require__(e){var r=__webpack_module_cache__[e];if(void 0!==r)return r.exports;var n=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](n,n.exports,__webpack_require__),n.exports}__webpack_require__.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(r,{a:r}),r},__webpack_require__.d=(e,r)=>{for(var n in r)__webpack_require__.o(r,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},__webpack_require__.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./js/index.js")})();