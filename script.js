document.addEventListener('DOMContentLoaded', function() {
    const books = [
        { title: "Book 1", author: "Author 1", img: "https://via.placeholder.com/150", link: "#" },
        { title: "Book 2", author: "Author 2", img: "https://via.placeholder.com/150", link: "#" },
        { title: "Book 3", author: "Author 3", img: "https://via.placeholder.com/150", link: "#" },
        { title: "Book 4", author: "Author 4", img: "https://via.placeholder.com/150", link: "#" },
        { title: "Book 5", author: "Author 5", img: "https://via.placeholder.com/150", link: "#" },
        { title: "Book 6", author: "Author 6", img: "https://via.placeholder.com/150", link: "#" },
        { title: "Book 7", author: "Author 6", img: "https://via.placeholder.com/150", link: "#" },
        { title: "Book 8", author: "Author 6", img: "https://via.placeholder.com/150", link: "#" },
        { title: "Book 9", author: "Author 6", img: "https://via.placeholder.com/150", link: "#" },
        { title: "Book 10", author: "Author 6", img: "https://via.placeholder.com/150", link: "#" },
        { title: "Book 11", author: "Author 6", img: "https://via.placeholder.com/150", link: "#" }

    ];

    const bookList = document.querySelector('.book-list');
    const searchBar = document.getElementById('search-bar');

    function displayBooks(booksToDisplay) {
        bookList.innerHTML = '';
        booksToDisplay.forEach(book => {
            const bookDiv = document.createElement('div');
            bookDiv.className = 'book';

            bookDiv.innerHTML = `
                <img src="${book.img}" alt="${book.title}">
                <h3>${book.title}</h3>
                <p>by ${book.author}</p>
                <a href="${book.link}" download>Download</a>
            `;

            bookList.appendChild(bookDiv);
        });
    }

    // Initial display of books
    displayBooks(books);

    // Filter books based on search query
    searchBar.addEventListener('input', function(event) {
        const query = event.target.value.toLowerCase();
        const filteredBooks = books.filter(book => 
            book.title.toLowerCase().includes(query) || 
            book.author.toLowerCase().includes(query)
        );
        displayBooks(filteredBooks);
    });
});



// tab switch effects

const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
    
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget);
              target.classList.remove('active'); 
               
tabContents.forEach(tabContent => {
    tabContent.classList.remove('active');
});

tabs.forEach(tab => {
    tab.classList.remove('active');
});
tab.classList.add('active');
target.classList.add('active');
    });
});
