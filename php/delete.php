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

// Check if product ID is provided in the request
if(isset($_GET['product_id'])){
    $productId = $_GET['product_id'];

    // Retrieve the image filename from the database
    $sqlSelect = "SELECT image_id FROM products WHERE product_id = $productId";
    $result = $conn->query($sqlSelect);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $imageFileName = $row['image_id'];

        // Delete the product from the database
        $sqlDelete = "DELETE FROM products WHERE product_id = $productId";

        if ($conn->query($sqlDelete) === TRUE) {
            // Delete the image file from the server
            $targetDirectory = "uploads/";
            $targetFile = $targetDirectory . $imageFileName;

            if (unlink($targetFile)) {
                echo "Product and associated image deleted successfully.";
            } else {
                echo "Error deleting product: " . $conn->error;
            }
        } else {
            echo "Error deleting product: " . $conn->error;
        }
    } else {
        echo "Product not found.";
    }
} else {
    echo "Product ID not provided.";
}

$conn->close();
?>
