<?php
// Your database connection details
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "coffeeshop";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if product ID, product name, and product price are provided in the request
if(isset($_POST['product_id']) && isset($_POST['product-name']) && isset($_POST['product-price'])){
    $productId = $_POST['product_id'];
    $productName = $_POST['product-name'];
    $productPrice = $_POST['product-price'];

    // Update the product in the database
    $sqlUpdate = "UPDATE products SET product_name = '$productName', product_price = '$productPrice' WHERE product_id = $productId";

    if ($conn->query($sqlUpdate) === TRUE) {
        echo "Product updated successfully.";
    } else {
        echo "Error updating product: " . $conn->error;
    }
} else {
    echo "Product ID, product name, and product price not provided.";
}

$conn->close();
?>
