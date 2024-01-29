<?php
$targetDirectory = "uploads/";
$uploadOk = 1;

// Create the uploads folder if it doesn't exist
if (!file_exists($targetDirectory)) {
    mkdir($targetDirectory, 0777, true);
}

$targetFile = $targetDirectory . basename($_FILES["image"]["name"]);
$imageFileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));

// Check if the file is an actual image
if (isset($_POST["submit"])) { // Changed "submit" to "Upload" to match the HTML form
    $check = getimagesize($_FILES["image"]["tmp_name"]);
    if ($check !== false) {
        echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo '<script>alert("Error: File is not an image."); window.location.reload();</script>';
        $uploadOk = 0;
    }
}

// Allow certain file formats (you can customize this list)
$allowedFormats = array("jpg", "jpeg", "png", "gif");
if (!in_array($imageFileType, $allowedFormats)) {
    echo '<script>alert("Error: Sorry, only JPG, JPEG, PNG, and GIF files are allowed."); window.location.reload();</script>';
    $uploadOk = 0;
}

// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    echo '<script>alert("Error: Sorry, your file was not uploaded."); window.location.reload();</script>';
} else {
    // If everything is ok, try to upload file and insert data into the database
    if (move_uploaded_file($_FILES["image"]["tmp_name"], $targetFile)) {
        // Insert product data into the database
        $productName = $_POST["product-name"];
        $productPrice = $_POST["product-price"]; // Added line to get product price

        // Extract only the file name and extension
        $imageFileName = basename($_FILES["image"]["name"]);

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

        // Insert data into the products table
        $sql = "INSERT INTO products (image_id, product_name, product_price) VALUES ('$imageFileName', '$productName', '$productPrice')"; // Added product price to the query

        if ($conn->query($sql) === TRUE) {
            echo '<script>alert("Successful!"); window.location.href = "../upload.html";</script>';
        } else {
            echo '<script>alert("Error: ' . $conn->error . '");</script>';
        }

        $conn->close();
    } else {
        echo '<script>alert("Error: Sorry, there was an error uploading your file.");</script>';
    }
}
?>
