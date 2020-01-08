<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="styles/style.css">
    <link rel="stylesheet" href="styles/bootstrap4.css">

    <title>Document</title>
</head>

<body onload="loadpage()">
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item active">Home</li>
            <!-- <li class="breadcrumb-item active" aria-current="page">maps</li> 
            <li class="breadcrumb-item"><a href="#">Home</a></li>      -->

        </ol>
    </nav>
	<div id="Map" class="box gray">	</div>
	<a href="index2.php"><button>index2</button></a>
	
	
	
	
	
	
	
    <?php 
    $servername = "localhost";
    $username = "root";
    $password = "";
    // Create connection
    $conn = new mysqli($servername, $username, $password,'mydb');

    // Check connection
    if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    }
    ?>







    
	<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBn2Vg4AAKDBSNDYPFy9YWuo2gxXyVQDQc&callback=initMap"></script>
    <script src="scripts/jquery.js"></script>
    <script src="scripts/jsd.js"></script>
    <script src="scripts/stackpath.js"></script>
    <script src="scripts/script.js"></script>
	<script src="scripts/geolocation.js"></script>
	<script src="scripts/Google.js"></script>
	
</body>

</html>