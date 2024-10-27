<?php
// 跨域配置
header("Access-Control-Allow-Origin: *"); // 或者指定来源 "http://localhost:3001"
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Access-Control-Allow-Credentials: true");

// 处理 OPTIONS 预检请求
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// 数据库连接
$servername = "localhost";
$username = "root";
$password = "123456";
$dbname = "MindAtlasCourses";

$conn = new mysqli($servername, $username, $password, $dbname);

// 检查连接是否成功
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// 查询获取用户及其报名情况
$sql = "SELECT Users.FirstName, Users.LastName, Courses.Description, Enrolments.CompletionStatus 
        FROM Enrolments
        JOIN Users ON Enrolments.UserID = Users.UserID
        JOIN Courses ON Enrolments.CourseID = Courses.CourseID";
$result = $conn->query($sql);

// 创建一个数组来存储查询结果
$enrolments = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $enrolments[] = $row;
    }
}

// 将数据转换为 JSON 格式并返回
header('Content-Type: application/json');
echo json_encode($enrolments);

// 关闭数据库连接
$conn->close();
?>
