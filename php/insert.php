<!DOCTYPE html> 
<html> 
    <head> 
        <title>CISO Registration</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">
        <link rel="stylesheet" href="../css/darkstyle.css">
    </head> 
  
    <body>
    <h1>CISO Program</h1>

    <div class="main-block">
        <h2>Thank you</h2>
        <hr>
        <div>

            <?php 
            
            $conn = mysqli_connect("localhost", "root", "", "registration_details");
            $errormessage = false;

            // Check connection 
            if($conn === false){ 
                die("ERROR: Could not connect. " 
                . mysqli_connect_error()); 
            }
            
            function checkEmpty($con,$elem) {
                if (isset($_POST[$elem]) && !empty($_POST[$elem])) {
                    return mysqli_real_escape_string($con,$_POST[$elem]);
                }
            }

            function checkStrings($con,$elem) {
                global $errormessage;
                if (isset($_POST[$elem]) && !empty($_POST[$elem]) && preg_match("/^[a-zA-Z-' ]*$/",$_POST[$elem])) {
                    return mysqli_real_escape_string($con,$_POST[$elem]);
                } else {
                    $errormessage = true;
                }
            }

            function setEmpty($con,$elem) {
                if (isset($_POST[$elem]) && !empty($_POST[$elem])) {
                    return mysqli_real_escape_string($con,$_POST[$elem]);
                } else {
                    return mysqli_real_escape_string($con,"");
                }
            }

            function checkPhone($con,$elem) {
                if (isset($_POST[$elem]) && !empty($_POST[$elem])) {
                    $res = preg_replace('/[^0-9.]+/', '', $_POST[$elem]);
                    if (strlen($res) == 10) {
                        return mysqli_real_escape_string($con,$res);
                    }
                }
            }
            
            function checkEmail($con,$elem) {
                if (isset($_POST[$elem]) && !empty($_POST[$elem]) && filter_var($_POST[$elem], FILTER_VALIDATE_EMAIL)) {
                    return mysqli_real_escape_string($con,$_POST[$elem]);
                }
            }

            $stmt = $conn->prepare("INSERT INTO trainees (id,first_name,last_name,email,street_address,city,citizenship,dob,mobile_phone,employer,job_title,division,hear,conference,otherC,why,special) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");

            $stmt->bind_param("sssssssssssssssss",$id,$first_name,$last_name,$email,$street_address,$city,$citizenship,$dob,$mobile_phone,$employer,$job_title,$division,$hear,$conference,$otherC,$why,$special);

            // Taking all values from the form data
            $id = "";
            // Page 1
            $first_name = checkStrings($conn,'firstname'); 
            $last_name = checkStrings($conn,'lastname');
            $email = checkEmail($conn,'email'); 
            $street_address = checkEmpty($conn,'streetaddress');
            $city = checkStrings($conn,'city');
            $citizenship = checkStrings($conn,'citizenship');
            $dob = checkEmpty($conn,'dob'); 
            $mobile_phone = checkPhone($conn,'mobilephone');

            // Page 2
            $employer = checkStrings($conn,'employer'); 
            $job_title = checkStrings($conn,'jobtitle');
            $division = checkStrings($conn,'division'); 
            
            // Page 3
            $hear = setEmpty($conn,'hear');
            $conference = setEmpty($conn,'conference');
            $otherC = setEmpty($conn,'otherC');
            $why = setEmpty($conn,'why');
            $special = setEmpty($conn,'special');

            $stmt->execute();
            if ($errormessage) {
                echo "<p>Something went wrong/<p>";
                echo "<p>Please use only Letters, spaces, dashes and apostrophes for text inputs.</p>";
                echo "<p>Please try again</p>";
            } else {
                echo "<h3>Your registration is complete.</h3>";
            }

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
 