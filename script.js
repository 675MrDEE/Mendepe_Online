document.addEventListener('DOMContentLoaded', function() {
    const books = [
        { title: "A Wolf at the Door & Other Retold Fairy Tales", author: "Ellen Datlow", img: "https://m.media-amazon.com/images/I/81sPppXf7bL._SY425_.jpg", link: "https://mega.nz/file/pHt0kKRA#ZQwDlLtnti3EQyrFjJF0mJzL8A6RuUG0d5GVPRyaYlg" },
        { title: "Animal Farm", author: "George Orwell", img: "https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif", link: "https://mega.nz/file/ITkTWRKS#GWyRKv7LV5UXvXbDd4VjcXBgBqz2nUJyIPdNLeOIauU" },
        { title: "Chinese Fairy Tales and Fantasies", author: "Moss Roberts", img: "https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif", link: "https://mega.nz/file/4W1wUKhQ#eNeLs5f-j1jdcAemYgLqB-8BZa-R69cLSISMvFPmpm4" },
        { title: "Dracula", author: "Bram Stoker", img: "https://m.media-amazon.com/images/I/41Dv6UvxAKL._SY445_SX342_.jpg", link: "https://mega.nz/file/JKNQkYbQ#Wm8x-ff4SMvpb3OIZ5iWkHNcxkwT55RllZIcBLOuO4A" },
        { title: "Gullivers Travels", author: "Johnathan Swift", img: "https://m.media-amazon.com/images/I/91KxvSbU73L._SY425_.jpg", link: "https://mega.nz/file/5PV0SLyK#yA5FVGVdoOVhs3apVUBOcCFKqAA2UXL3t4FZIoMzxho" },
        { title: "The Great Gatsby", author: "Scott Fitzgerald", img: "https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif", link: "https://mega.nz/file/tGMGSDzR#RvHI_JgVjI-n8s0xzB37FRjtgnK9Agoctl5rH59_zs8" },
        { title: "The Old Man and the Sea", author: "Ernest Hemingway", img: "https://m.media-amazon.com/images/I/71KloredONL._SY425_.jpg", link: "https://mega.nz/file/gGtVRZSI#wCCambUfrFWG08b0yo1OBXoIGr32TmfOGm9Pj-must8" },
        { title: "To Kill a Mockingbird", author: "Harper Lee", img: "https://mega.nz/file/gGtVRZSI#wCCambUfrFWG08b0yo1OBXoIGr32TmfOGm9Pj-must8", link: "https://mega.nz/file/hf1lQTpQ#Qv1CRXeekxujXxs9swZzZtjpyRSxCfNedHmJBJa3UJQ" },
        { title: "The Trachtenberg Speed System of Basic Mathematics", author: "Jakow Trachtenberg", img: "https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif", link: "https://mega.nz/file/cStzEI5B#Il2BdSTQ72h0-1WdQn7RkmqJ3ruLAE82owdXGjC8gj8" },
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
