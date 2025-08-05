<?php
// Database connection settings
$servername = "localhost";
$username = "root";  // Default username for Laragon MySQL
$password = "";      // Default password for Laragon MySQL (empty)
$dbname = "tms"; // Replace with your actual database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error); // Show error message if connection fails
} else {
    echo "Connected successfully"; // Show success message if connection is successful
}
?>
