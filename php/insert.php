<!DOCTYPE html> 
<html> 
    <head> 
        <title>CISO Registration</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">
        <link rel="stylesheet" href="../css/style.css">
    </head> 
  
    <body> 
    <div class="header">
        <h1>CISO Program</h1>
    </div>

    <div class="main-block">
        <h2>Thank you</h2>
        <hr>
        <div>

            <?php 
            
            $conn = mysqli_connect("localhost", "root", "", "registration_details"); 
            // Check connection 
            if($conn === false){ 
                die("ERROR: Could not connect. " 
                . mysqli_connect_error()); 
            }
            
            function checkEmpty($con,$elem) {
                if (isset($_REQUEST[$elem])) {
                    return mysqli_real_escape_string($con,$_REQUEST[$elem]);
                } else {
                    return mysqli_real_escape_string($con,"");
                }
            }
            
            $stmt = $conn->prepare("INSERT INTO trainees (id,first_name,last_name,email,street_address,city,citizenship,dob,mobile_phone,employer,job_title,division,hear,conference,otherC,why,special) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");

            $stmt->bind_param("sssssssssssssssss",$id,$first_name,$last_name,$email,$street_address,$city,$citizenship,$dob,$mobile_phone,$employer,$job_title,$division,$hear,$conference,$otherC,$why,$special);

            // Taking all values from the form data
            $id = "";
            // Page 1
            $first_name = checkEmpty($conn,'firstname'); 
            $last_name = checkEmpty($conn,'lastname');
            $email = checkEmpty($conn,'email'); 
            $street_address = checkEmpty($conn,'streetaddress');
            $city = checkEmpty($conn,'city');
            $citizenship = checkEmpty($conn,'citizenship');
            $dob = checkEmpty($conn,'dob'); 
            $mobile_phone = checkEmpty($conn,'mobilephone');

            // Page 2
            $employer = checkEmpty($conn,'employer'); 
            $job_title = checkEmpty($conn,'jobtitle');
            $division = checkEmpty($conn,'division'); 
            
            // Page 4
            $hear = checkEmpty($conn,'hear');
            $conference = checkEmpty($conn,'conference');
            $otherC = checkEmpty($conn,'otherC');
            $why = checkEmpty($conn,'why');
            $special = checkEmpty($conn,'special');

            $stmt->execute();
            echo "<h3>Your registration is complete.</h3>";

            // Close connection 
            $stmt->close();
            mysqli_close($conn);

            ?> 
        </div>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <hr>
        <div>
            <button type="button" onclick="window.location.href='../index.html'">Done</button>
        </div>
    </div>
    </body> 
</html> 
 