let startIndex = 0;
const apiKey = "AIzaSyAyesH5aiGQBMpFU6HXqziqeSrxRSuJiL8";

const booksStorage = JSON.parse(localStorage.getItem('cart')) ?? [];

export function getBooks(category) {
    const query = `subject:${encodeURIComponent(category)}`;
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}&printType=books&startIndex=${startIndex}&maxResults=6&langRestrict=en`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка связи');
            }
            return response.json();
        })
        .then(data => {
            const booksLayout = document.querySelector(".books__layout");
            booksLayout.innerHTML = '';
            data.items.forEach(book => {
                const bookCard = document.createElement('div');
                bookCard.classList.add('book__card--layout');

                const thumbnail = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : '';
                const author = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : '';
                const title = book.volumeInfo.title;
                const ratingsCount = book.volumeInfo.ratingsCount ? `Ratings: ${book.volumeInfo.ratingsCount}` : '';
                                
                let description = book.volumeInfo.description ? book.volumeInfo.description : '';
                const maxLength = 3 * 60; 
                if (description.length > maxLength) {
                    description = description.substring(0, maxLength) + '...';
                }
                                
                const retailPrice = book.saleInfo && book.saleInfo.listPrice && book.saleInfo.listPrice.amount ? `${book.saleInfo.listPrice.amount} ${book.saleInfo.listPrice.currencyCode}` : '';


                           bookCard.innerHTML = `
                    <img src="${thumbnail}" class="book__card-image" alt="Thumbnail">
                    <div class="book__card-info">
                        <p class="book__author">${author}</p>
                        <p class="book__title">${title}</p>
                        <p class="book__raiting">${ratingsCount}</p>
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
