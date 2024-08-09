let startIndex = 0;
const apiKey = "AIzaSyAyesH5aiGQBMpFU6HXqziqeSrxRSuJiL8";

const booksStorage = JSON.parse(localStorage.getItem('cart')) ?? [];

function getBooks(category) {
    const query = `subject:${encodeURIComponent(category)}`;
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}&printType=books&startIndex=${startIndex}&maxResults=6&langRestrict=en`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка соединения');
            }
            return response.json();
        })
        .then(data => {
            const booksLayout = document.querySelector(".books__layout");
            booksLayout.innerHTML = '';
            data.items.forEach(book => {
                const bookCard = document.createElement('div');
                bookCard.classList.add('book__card--layout');

                const thumbnail = book.volumeInfo.imageLinks.thumbnail ?? '../img/placeholder.jpg';
                const author = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : '';
                const title = book.volumeInfo.title;
                const averageRating = book.volumeInfo.averageRating;
                const ratingsCount = book.volumeInfo.ratingsCount ? `${book.volumeInfo.ratingsCount} reviews` : '';
                         
                let description = book.volumeInfo.description ? book.volumeInfo.description : '';
                const maxLength = 3 * 60; 
                if (description.length > maxLength) {
                    description = description.substring(0, maxLength) + '...';
                }
                                
                const retailPrice = book.saleInfo && book.saleInfo.listPrice && book.saleInfo.listPrice.amount ? `${book.saleInfo.listPrice.amount} ${book.saleInfo.listPrice.currencyCode}` : '';
                let stars = '';
         for (let i = 0; i < averageRating; i++) {
           stars += 
           `<span class="star">
                    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <path d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z" />
                    </svg>
                
            </span>`;
         }
     
         for (let i = averageRating; i < 5; i++) {
           stars += `<span class="grey-star"><svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
           <path d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z" />
           </svg></span>`;
         }  

                bookCard.innerHTML = `
                    <img src="${thumbnail}" class="book__card-image" alt="Thumbnail">
                    <div class="book__card-info">
                        <p class="book__author">${author}</p>
                        <p class="book__title">${title}</p>
                        <p class="book__raiting">${stars}&nbsp;${ratingsCount}</p>
                        <p class="book__descr">${description}</p>
                        <p class="book__price">${retailPrice}</p>
                       <button data-id="${book.id}" class='button btn__buy'>${booksStorage.includes(book.id) ? 'In The Cart' : 'Buy Now'}</button>
                    </div>
                `;
                booksLayout.appendChild(bookCard);
            });
            startIndex += 6; 
        })
        .catch(error => {
            console.error('Ошибка при загрузке данных:', error);
        });
    }

document.addEventListener('DOMContentLoaded', () => {
    const cartCount = document.querySelector('.cart__count');
    const booksStorage = JSON.parse(localStorage.getItem('cart')) ?? [];

    function updateCartCount() {
        cartCount.innerText = booksStorage.length;
        if (booksStorage.length > 0) {
            cartCount.style.display = 'block'; 
        } else {
            cartCount.style.display = 'none'; 
        }
    }
    updateCartCount();

    const categoryItems = document.querySelectorAll('.category');
    let initialCategory = '';
    categoryItems.forEach(item => {
        if (item.classList.contains('sidebar-active')) {
            initialCategory = item.textContent.trim();
        }

        item.addEventListener('click', () => {
            document.querySelector('.category.category__active').classList.remove('category__active');
            item.classList.add('category__active');
            const category = item.textContent.trim();
            startIndex = 0; 
            getBooks(category);
        });
    });

    document.addEventListener('click', (event) => {
        if(event.target.classList.contains('btn__buy')) {                  
            const id = event.target.getAttribute('data-id');
                     if (event.target.textContent === 'Buy Now') {                      
                        event.target.textContent = 'In The Cart';
                        event.target.classList.add('button__cart');
                        booksStorage.push(id);
                        localStorage.setItem('cart', JSON.stringify(booksStorage))
                }else { 
                    event.target.textContent = 'Buy Now';
                    event.target.classList.remove('button__cart');
                    booksStorage.splice(booksStorage.indexOf(id), 1)
                    }
                localStorage.setItem('cart', JSON.stringify(booksStorage));
                updateCartCount();
        }
    })
        getBooks(initialCategory);
    });     
    const loadMore = document.querySelector('.more'); 
    loadMore.addEventListener('click', () => {
        const activeCategory = document.querySelector('.category.category__active').textContent.trim();
        getBooks(activeCategory); 
    });
