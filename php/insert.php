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
        
        $stmt = $conn->prepare("INSERT INTO trainees (id,title,first_name,last_name,preferred_name,email,street_address,address_2,city,region,postal,country,citizenship,dob,home_phone,mobile_phone,inter_phone,employer,job_title,division,work_street_address,work_address_2,work_city,work_state,work_postal,work_country,work_home_phone,work_mobile_phone,work_email,uni_1,degree_1,month_from_1,year_from_1,month_to_1,year_to_1,uni_2,degree_2,month_from_2,year_from_2,month_to_2,year_to_2,uni_3,degree_3,month_from_3,year_from_3,month_to_3,year_to_3,hear,conference,otherC,experience,why,cv,NPO,special,pay,bill_first_name,bill_last_name,bill_email,bill_street_address,bill_address_2,bill_city,bill_state,bill_postal,bill_country) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");

        $stmt->bind_param("sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",$id,$title,$first_name,$last_name,$preferred_name,$email,$street_address,$address_2,$city,$region,$postal,$country,$citizenship,$dob,$home_phone,$mobile_phone,$inter_phone,$employer,$job_title,$division,$work_street_address,$work_address_2,$work_city,$work_state,$work_postal,$work_country,$work_home_phone,$work_mobile_phone,$work_email,$uni_1,$degree_1,$month_from_1,$year_from_1,$month_to_1,$year_to_1,$uni_2,$degree_2,$month_from_2,$year_from_2,$month_to_2,$year_to_2,$uni_3,$degree_3,$month_from_3,$year_from_3,$month_to_3,$year_to_3,$hear,$conference,$otherC,$experience,$why,$cv,$NPO,$special,$pay,$bill_first_name,$bill_last_name,$bill_email,$bill_street_address,$bill_address_2,$bill_city,$bill_state,$bill_postal,$bill_country);

        // Taking all values from the form data
        $id = "";
        // Page 1
        $title = checkEmpty($conn,'title');
        $first_name = checkEmpty($conn,'firstname'); 
        $last_name = checkEmpty($conn,'lastname');
        $preferred_name = checkEmpty($conn,'preferredname');
        $email = checkEmpty($conn,'email'); 
        $street_address = checkEmpty($conn,'streetaddress');
        $address_2 = checkEmpty($conn,'address2'); 
        $city = checkEmpty($conn,'city');
        $region = checkEmpty($conn,'region'); 
        $postal = checkEmpty($conn,'postal');
        $country = checkEmpty($conn,'country'); 
        $citizenship = checkEmpty($conn,'citizenship');
        $dob = checkEmpty($conn,'dob'); 
        $home_phone = checkEmpty($conn,'homephone');
        $mobile_phone = checkEmpty($conn,'mobilephone'); 
        $inter_phone = checkEmpty($conn,'interphone');

        // Page 2
        $employer = checkEmpty($conn,'employer'); 
        $job_title = checkEmpty($conn,'jobtitle');
        $division = checkEmpty($conn,'division'); 
        $work_street_address = checkEmpty($conn,'workstreetaddress');
        $work_address_2 = checkEmpty($conn,'workaddress2'); 
        $work_city = checkEmpty($conn,'workcity');
        $work_state = checkEmpty($conn,'workstate'); 
        $work_postal = checkEmpty($conn,'workpostal');
        $work_country = checkEmpty($conn,'workcountry'); 
        $work_home_phone = checkEmpty($conn,'workhomephone');
        $work_mobile_phone = checkEmpty($conn,'workmobilephone'); 
        $work_email = checkEmpty($conn,'workemail');

        // Page 3
        $uni_1 = checkEmpty($conn,'uni1'); 
        $degree_1 = checkEmpty($conn,'degree1');
        $month_from_1 = checkEmpty($conn,'monthfrom1'); 
        $year_from_1 = checkEmpty($conn,'yearfrom1');
        $month_to_1 = checkEmpty($conn,'monthto1'); 
        $year_to_1 = checkEmpty($conn,'yearto1');
        $uni_2 = checkEmpty($conn,'uni2');
        $degree_2 = checkEmpty($conn,'degree2');
        $month_from_2 = checkEmpty($conn,'monthfrom2');
        $year_from_2 = checkEmpty($conn,'yearfrom2');
        $month_to_2 = checkEmpty($conn,'monthto2');
        $year_to_2 = checkEmpty($conn,'yearto2');
        $uni_3 = checkEmpty($conn,'uni3');
        $degree_3 = checkEmpty($conn,'degree3');
        $month_from_3 = checkEmpty($conn,'monthfrom3');
        $year_from_3 = checkEmpty($conn,'yearfrom3');
        $month_to_3 = checkEmpty($conn,'monthto3');
        $year_to_3 = checkEmpty($conn,'yearto3');

        // Page 4
        $hear = checkEmpty($conn,'hear');
        $conference = checkEmpty($conn,'conference');
        $otherC = checkEmpty($conn,'otherC');
        $experience = checkEmpty($conn,'experience');
        $why = checkEmpty($conn,'why');
        $cv = checkEmpty($conn,'cv');
        $NPO = checkEmpty($conn,'NPO');
        $special = checkEmpty($conn,'special');

        // Page 5
        $pay = checkEmpty($conn,'pay');
        $bill_first_name = checkEmpty($conn,'billfirstname');
        $bill_last_name = checkEmpty($conn,'billlastname');
        $bill_email = checkEmpty($conn,'billemail');
        $bill_street_address = checkEmpty($conn,'billstreetaddress');
        $bill_address_2 = checkEmpty($conn,'billaddress2');
        $bill_city = checkEmpty($conn,'billcity');
        $bill_state = checkEmpty($conn,'billstate');
        $bill_postal = checkEmpty($conn,'billpostal');
        $bill_country = checkEmpty($conn,'billcountry');

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
 