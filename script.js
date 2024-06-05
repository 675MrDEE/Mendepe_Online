document.addEventListener('DOMContentLoaded', function() {
    // Load links from localStorage if available
    if (localStorage.getItem('links')) {
        const links = JSON.parse(localStorage.getItem('links'));
        links.forEach(addLinkToList);
    }

    document.getElementById('link-form')?.addEventListener('submit', function(event) {
        event.preventDefault();

        const linkUrl = document.getElementById('link-url').value;
        const linkDescription = document.getElementById('link-description').value;
        const linkPrice = document.getElementById('link-price').value;
        const linkCategory = document.getElementById('link-category').value;

        const linkData = {
            url: linkUrl,
            description: linkDescription,
            price: linkPrice,
            category: linkCategory
        };

        addLinkToList(linkData);

        // Save link to localStorage
        const links = JSON.parse(localStorage.getItem('links')) || [];
        links.push(linkData);
        localStorage.setItem('links', JSON.stringify(links));

        document.getElementById('link-form').reset();
    });

    document.getElementById('search-input')?.addEventListener('input', function() {
        const filter = this.value.toLowerCase();
        const categories = document.querySelectorAll('.category');

        categories.forEach(function(category) {
            const links = category.querySelectorAll('li');

            links.forEach(function(link) {
                const text = link.textContent.toLowerCase();
                if (text.includes(filter)) {
                    link.style.display = '';
                } else {
                    link.style.display = 'none';
                }
            });
        });
    });

    function addLinkToList(linkData) {
        const linkList = document.querySelector(`#${linkData.category}-category ul`);

        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <a href="${linkData.url}" target="_blank">${linkData.description}</a> - PGK ${linkData.price}
        `;

        linkList.appendChild(listItem);
    }

    // Accordion functionality
    const accordions = document.querySelectorAll('.accordion');
    accordions.forEach(function(accordion) {
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
});

