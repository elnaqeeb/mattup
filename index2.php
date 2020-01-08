<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./styles/style.css">
    <link rel="stylesheet" href="./styles/bootstrap4.css">

    <title>Document</title>
</head>

<body>
	<script></script>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <!-- <li class="breadcrumb-item active" aria-current="page">maps</li> -->

        </ol>
    </nav>
    
     <a href="./php/API.php"> <button>API</button></a>
    <button onclick="addcookie()">add to db</button>
    <button onclick="printlist()">print list</button>
    <button onclick="clearcookie()">clear list</button>

    <div  id="locations"></div>

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

    foreach($_COOKIE as  $key => $val)
    {
        //$lat= explode(",",$val,0);
        //$lon=explode(",",$val,1);
        $query="insert into locations values (null,$val";
        mysqli_query($conn,$query);

        $query2="select * from `locations`";
        if($result=mysqli_query($conn,$query2)){
        $row=  mysqli_fetch_array($result);
        print_r($row);
        }
    }

    ?>
























    <script src="./scripts/jquery.js"></script>
    <script src="./scripts/jsd.js"></script>
    <script src="./scripts/stackpath.js"></script>
    <script src="scripts/script.js"></script>
</body>

</html>