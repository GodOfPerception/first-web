<!--

/***************************************************************************************/
*    Title: eatlunchbox                                                                *
*    Author: Shashank Shrivastav                                                       *
*    Email: contactshashank10@gmail.com                                                *
*    Date: 2019                                                                        *
*    Code version: 1.0                                                                 *
*    Availability: https://github.com/GodOfPerceptionn                                 *
*                                                                                      *
/***************************************************************************************/
(Version 1.0) [Source code]. https://github.com/GodOfPerception

 -->
<?php
$servername='sql6.freemysqlhosting.net:3306';
$username='sql6459566';
$password='4gHRaAZu3V';
$dbname = "sql6459566";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

 $name = $_POST['name'];
 	 $phone = $_POST['phone'];
	 $email = $_POST['email'];
	 $address = $_POST['address'];
	  $qty = $_POST['quantity'];
	 $sql = "INSERT INTO order (name,phone,email,address,quantity)
	 VALUES ('$name','$phone','$email','$address','$qty')";





if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>