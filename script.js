document.addEventListener('DOMContentLoaded', function() {
    const books = [
        { title: "A Wolf at the Door & Other Retold Fairy Tales", author: "Ellen Datlow", img: "https://m.media-amazon.com/images/I/81sPppXf7bL._SY425_.jpg", link: "https://mega.nz/file/pHt0kKRA#ZQwDlLtnti3EQyrFjJF0mJzL8A6RuUG0d5GVPRyaYlg" },
        { title: "Animal Farm", author: "George Orwell", img: "https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif", link: "https://mega.nz/file/ITkTWRKS#GWyRKv7LV5UXvXbDd4VjcXBgBqz2nUJyIPdNLeOIauU" },
        { title: "Chinese Fairy Tales and Fantasies", author: "Moss Roberts", img: "https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif", link: "https://mega.nz/file/4W1wUKhQ#eNeLs5f-j1jdcAemYgLqB-8BZa-R69cLSISMvFPmpm4" },
        { title: "Dracula", author: "Bram Stoker", img: "https://m.media-amazon.com/images/I/41Dv6UvxAKL._SY445_SX342_.jpg", link: "https://mega.nz/file/JKNQkYbQ#Wm8x-ff4SMvpb3OIZ5iWkHNcxkwT55RllZIcBLOuO4A" },
        { title: "Gulliver's Travels", author: "Johnathan Swift", img: "https://m.media-amazon.com/images/I/91KxvSbU73L._SY425_.jpg", link: "https://mega.nz/file/5PV0SLyK#yA5FVGVdoOVhs3apVUBOcCFKqAA2UXL3t4FZIoMzxho" },
        { title: "The Great Gatsby", author: "Scott Fitzgerald", img: "https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif", link: "https://mega.nz/file/tGMGSDzR#RvHI_JgVjI-n8s0xzB37FRjtgnK9Agoctl5rH59_zs8" },
        { title: "The Old Man and the Sea", author: "Ernest Hemingway", img: "https://m.media-amazon.com/images/I/71KloredONL._SY425_.jpg", link: "https://mega.nz/file/gGtVRZSI#wCCambUfrFWG08b0yo1OBXoIGr32TmfOGm9Pj-must8" },
        { title: "To Kill a Mockingbird", author: "Harper Lee", img: "https://mega.nz/file/gGtVRZSI#wCCambUfrFWG08b0yo1OBXoIGr32TmfOGm9Pj-must8", link: "https://mega.nz/file/hf1lQTpQ#Qv1CRXeekxujXxs9swZzZtjpyRSxCfNedHmJBJa3UJQ" },
        { title: "The Trachtenberg Speed System of Basic Mathematics", author: "Jakow Trachtenberg", img: "https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif", link: "https://mega.nz/file/cStzEI5B#Il2BdSTQ72h0-1WdQn7RkmqJ3ruLAE82owdXGjC8gj8" },
        { title: "A Tale of Two Cities", author: "Charles Dickens", img: "https://m.media-amazon.com/images/I/51OfxSN93oL._SY445_SX342_.jpg", link: "https://mega.nz/file/8W9TQLKL#OoqVa0FJrZReJMyrDYToVgGrFnJLgAmnoaOPbLUwtj4" },
        { title: "Alice's Adventures in Wonderland", author: "Lewis Carroll", img: "https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif", link: "https://mega.nz/file/oC0ziCRQ#XFl3qh4AMf7DUZJfXeKab3PBW0R5F1F6iN2LudCnQTk" },
        { title: "Things Fall Apart", author: "Chinua Achebe", img: "https://m.media-amazon.com/images/I/91CZnhllpPL._SY425_.jpg", link: "https://mega.nz/file/YXsyHRhB#V8P28_mVQ3lCgjF2Iot96ta-r09Q69yOKxTN4eLg3SE" },
        { title: "The Sheep Pig", author: "Dick King Smith", img: "https://m.media-amazon.com/images/I/41gwOa6aDDL._SY445_SX342_.jpg", link: "https://mega.nz/file/xKNgQA5L#_SfzI8Kf1chnIrKumBbTDmefrpf-ApUgxP--hn2Vv4Q" },
        { title: "Fire & Blook", author: "George R. R. Martin", img: "https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif", link: "https://mega.nz/file/kDUDkQrY#SDXl2xKRdsyg2isi5dC1a1QwcRIH2OpAXstfkhB1RV0" },
        { title: "Flat Stanley (five books bundle)", author: "Jeff Brown", img: "https://m.media-amazon.com/images/I/51hfoLbFh7L._SY445_SX342_.jpg", link: "https://mega.nz/file/MLlxGayA#33Xzp-mg32_BTptvnNtTHa3scn0Z3_WzVUs1U2fl6lU" },
        { title: "Frankenstein", author: "Mary Shelley", img: "https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif", link: "https://mega.nz/file/5e8gwCiR#sFu77nQmJ9K3DqqLV1Xfm3RFu0wbux4H-Hofr_BkZh8" },
        { title: "Great Expectations", author: "Charles Dickens", img: "https://m.media-amazon.com/images/I/41GaIVLE1+L._SY445_SX342_.jpg", link: "https://mega.nz/file/tCUhTKZQ#srdK4YrxyRRiy4t565kIZYzQuYXKou_iaNTmX0lXDMs" },
        { title: "Ivanhoe", author: "Walter Scott", img: "https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif", link: "https://mega.nz/file/NWswgAbS#xb7fac8HqynUjLOVEmCSt4s_2KT24uDY68JUaZUf-2w" },
        { title: "Lord of the Flies", author: "William Golding", img: "https://m.media-amazon.com/images/I/512mrQMBIOL._SY445_SX342_.jpg", link: "https://mega.nz/file/FLNCBSKK#6lqsLoFNHAxzHxOYN_uHdA-d2qDvFo_5RXLJj8o1QzM" },
        { title: "The Crucible", author: "Arthur Miller", img: "https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif", link: "https://mega.nz/file/VDVmhRZb#7BBmNr57ZjIYku9KyfI5nwK0fYyYWBhh0XnP2JEVkz0" },
        { title: "Mythology", author: "Edith Hamilton", img: "https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif", link: "https://mega.nz/file/NDtmWBIZ#DxErMB9c9e1UfaEVhckCoBdhQIY8qNFenQKHgmWV-Yg" },
        { title: "Norse Mythology", author: "Neil Gaiman", img: "https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif", link: "https://mega.nz/file/0ft00KDR#evx8Rd6AsP8r8jLhvg3875AQtfjNH-epD-TcnIb0FBE" },
        { title: "Notes From the Underground", author: "Fyodor Dostoyevsky", img: "https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif", link: "https://mega.nz/file/0LlGiB7A#EGISVoVyDK054ZamUAsxQVSC3y-CJvouoLW-cm8XrgM" },
        { title: "On Time and Water", author: "Andri Snaer Magnason", img: "https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif", link: "https://mega.nz/file/sWNRwTZR#PGyVVhkGJJL7G23P-o8Nan3z8N1bxHKa-Wz0AJpwrMM" },
       { title: "", author: "Author 6", img: "https://via.placeholder.com/150", link: "#" }
        /*{ title: "Book 11", author: "Author 6", img: "https://via.placeholder.com/150", link: "#" }*/

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
