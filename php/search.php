<!-- search.php -->
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Database connection details (update with your own)
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

    // Sanitize user input
    $productName = mysqli_real_escape_string($conn, $_POST["product-name"]);

    // Retrieve data from the products table based on the product name
    $sql = "SELECT * FROM products WHERE product_name LIKE '%$productName%'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Display the image and product details
        while ($row = $result->fetch_assoc()) {
            echo "<h2>Product Details</h2>";
            echo "<p>Name: " . $row["product_name"] . "</p>";
            echo "<p>Price: $" . $row["product_price"] . "</p>";
            echo "<img src='uploads/" . $row["image_id"] . "' alt='Product Image'>";
        }
    } else {
        echo "Product not found.";
    }

    $conn->close();
}
?>
