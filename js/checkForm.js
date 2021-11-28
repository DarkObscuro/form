var checkFormFields1 = function() {
    var first_name = document.getElementById('firstname'); 
    var last_name = document.getElementById('lastname');
    var emailcheck = ValidateEmail(); 
    var street_address = document.getElementById('streetaddress');
    var city =  document.getElementById('city');
    var citizenship = document.getElementById('citizenship');
    var dob = document.getElementById('dob'); 
    var mobile_phone = document.getElementById('mobilephone');
    var comments = document.getElementById('comments');
    var check = first_name.value && last_name.value && emailcheck && street_address.value && city.value && citizenship.value && dob.value && mobile_phone.value;
    
    if (check) {
        comments.innerHTML = '';
    } else {
        comments.innerHTML = 'Please fill in all the <span style="color: #ff0000">required fields</span>';
    }
    return check;
}

var checkFormFields2 = function() {
    var employer = document.getElementById('employer'); 
    var job_title = document.getElementById('jobtitle');
    var division = document.getElementById('division');
    var comments = document.getElementById('comments');
    var check = employer.value && job_title.value && division.value;

    if (check) {
        comments.innerHTML = '';
    } else {
        comments.innerHTML = 'Please fill in all the <span style="color: #ff0000">required fields</span>';
    }
    return check;
}

function ValidateEmail() 
{
    var elem = document.getElementById("email");
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (elem.value.match(mailformat))
    {
        return (true);
    } else {
        alert("You have entered an invalid email address!");
        return (false);
    }
}