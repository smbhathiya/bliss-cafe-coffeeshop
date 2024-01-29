<?php
// Assuming you have a MySQL database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "coffeeshop";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch product data from the database
$sql = "SELECT product_name, image_id, product_price FROM products";
$result = $conn->query($sql);

$products = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        // Combine the base path and image ID to get the full image path
        $row['image_path'] = "php/uploads/" . $row['image_id'];
        // Add "Rs." prefix to product price
        $row['product_price'] = "Rs." . $row['product_price'];
        $products[] = $row;
    }
}

$conn->close();

// Output the product data as JSON
echo json_encode($products);

?>
