<?php
// Cross-domain configuration
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Access-Control-Allow-Credentials: true");

// Processing OPTIONS precheck requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// database connection
$servername = "localhost";
$username = "root";
$password = "123456";
$dbname = "MindAtlasCourses";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check whether the connection is successful
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Query and obtain users and their registration status
$sql = "SELECT Users.FirstName, Users.LastName, Courses.Description, Enrolments.CompletionStatus 
        FROM Enrolments
        JOIN Users ON Enrolments.UserID = Users.UserID
        JOIN Courses ON Enrolments.CourseID = Courses.CourseID";
$result = $conn->query($sql);

// Create an array to store the query results
$enrolments = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $enrolments[] = $row;
    }
}

// Converts the data to JSON format and returns it
header('Content-Type: application/json');
echo json_encode($enrolments);

// Close database connection
$conn->close();
?>
