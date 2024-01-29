function previewImage() {
    const input = document.getElementById('image');
    const preview = document.getElementById('preview');
    const previewContainer = document.getElementById('preview-container');

    const file = input.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            preview.src = e.target.result;
            previewContainer.style.display = 'block';
        };

        reader.readAsDataURL(file);
    } else {
        preview.src = '';
        previewContainer.style.display = 'none';
    }
}

function displaySearchResults() {
    const searchInput = document.getElementById('search');
    const productNameInput = document.getElementById('product-name');
    const productPriceInput = document.getElementById('product-price');
    const previewImage = document.getElementById('preview');
    const previewContainer = document.getElementById('preview-container');

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const result = JSON.parse(xhr.responseText);

                if (result.length > 0) {
                    productNameInput.value = result[0].product_name;
                    productPriceInput.value = result[0].product_price;

                    // Check if image_id is present in the result
                    if (result[0].image_id) {
                        // Adjust the path to navigate up one level and then into the "php" folder
                        previewImage.src = '../php/uploads/' + result[0].image_id;
                        previewContainer.style.display = 'block';
                    } else {
                        // Display a placeholder image when image_id is not found
                        previewImage.src = 'path_to_placeholder_image.jpg';
                        previewContainer.style.display = 'block';
                    }
                } else {
                    // Clear form fields and hide preview if no results
                    productNameInput.value = '';
                    productPriceInput.value = '';
                    previewImage.src = '';
                    previewContainer.style.display = 'none';
                }
            } else {
                console.error('Error fetching search results. Status:', xhr.status);
                // Handle the error as needed
            }
        }
    };

    xhr.open('POST', 'php/search.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('search=' + encodeURIComponent(searchInput.value));

    return false; // Prevent the default form submission
}

