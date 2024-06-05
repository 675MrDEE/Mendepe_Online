document.addEventListener('DOMContentLoaded', function() {
    const accordions = document.querySelectorAll('.accordion');
    accordions.forEach(accordion => {
        accordion.addEventListener('click', function() {
            this.classList.toggle('active');
            const panel = this.nextElementSibling;
            if (panel.style.display === 'block') {
                panel.style.display = 'none';
            } else {
                panel.style.display = 'block';
            }
        });
    });

    // Load links from localStorage if available
    if (localStorage.getItem('links')) {
        const links = JSON.parse(localStorage.getItem('links'));
        links.forEach(addLinkToList);
    }
});

// Function to add a link to the list in the DOM
function addLinkToList(link) {
    // Find the correct category list element in the DOM
    const category = document.getElementById(`${link.category}-category`);
    const list = category.querySelector('ul');

    // Create a new list item
    const listItem = document.createElement('li');

    // Create a link element
    const anchor = document.createElement('a');
    anchor.href = link.url;
    anchor.textContent = `${link.description} - PGK ${link.price}`;

    // Append the link to the list item
    listItem.appendChild(anchor);

    // Append the list item to the list
    list.appendChild(listItem);
}

// Handle form submission to add new links
document.getElementById('link-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const url = document.getElementById('link-url').value;
    const description = document.getElementById('link-description').value;
    const price = document.getElementById('link-price').value;
    const category = document.getElementById('link-category').value;

    const link = { url, description, price, category };
    let links = JSON.parse(localStorage.getItem('links')) || [];
    links.push(link);

    localStorage.setItem('links', JSON.stringify(links));

    addLinkToList(link);

    document.getElementById('link-form').reset();
});

