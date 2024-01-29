window.onload = function() {
    // Mobile menu icon
    document.querySelector(".mobile-menu-icon").addEventListener("click", function() {
        document.querySelector("#nav-bar").classList.toggle("active");
    });

    // Close mobile menu when clicking outside the menu icon
    document.querySelector("body").addEventListener("click", function(event) {
        if (!event.target.matches(".mobile-menu-icon") && !event.target.closest("#nav-bar")) {
            document.querySelector("#nav-bar").classList.remove("active");
        }
    });
};

// Handle window resize
window.addEventListener("resize", function() {
    // Ensure that the navigation menu is not active on larger screens
    if (window.innerWidth > 768) {
        document.querySelector("#nav-bar").classList.remove("active");
    }
});



// Fetch product data from the server
fetch('php/get_products.php')
    .then(response => response.json())
    .then(products => {
        const container = document.getElementById('product-container');

        // Dynamically generate product cards
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';

            const imageDiv = document.createElement('div');
            imageDiv.className = 'product-image';

            const image = document.createElement('img');
            image.src = product.image_path;
            image.alt = 'Erorr 404';

            const infoDiv = document.createElement('div');
            infoDiv.className = 'product-info';

            const nameHeading = document.createElement('h2');
            nameHeading.textContent = product.product_name;

            const hr = document.createElement('hr');

            const priceHeading = document.createElement('h3');
            priceHeading.textContent = 'Price: ' + product.product_price; // Adjust this line

            // Append elements to the card
            imageDiv.appendChild(image);
            infoDiv.appendChild(nameHeading);
            infoDiv.appendChild(hr);
            infoDiv.appendChild(priceHeading);

            card.appendChild(imageDiv);
            card.appendChild(infoDiv);

            container.appendChild(card);
        });
    })
    .catch(error => console.error('Error fetching product data:', error));

    //scroll-sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


//set current year to footer
document.addEventListener("DOMContentLoaded", function() {
    // Get the current year
    var currentYear = new Date().getFullYear();

    // Update the copyright year in the HTML
    document.getElementById('copyright').innerHTML = '&copy; ' + currentYear + ' Bliss Cafe. All rights reserved.';
});








      