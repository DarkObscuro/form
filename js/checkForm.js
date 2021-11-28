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
        return (false);
    }
}

var checkMail = function(id) {
    const themeCSS = document.querySelector("#theme-link-css");
    var emailcheck = ValidateEmail();
    var elem = document.getElementById(id);
    var labelicon = document.getElementById('icon' + id);
    if (themeCSS.getAttribute("href") == "css/style.css") {
        // ... then switch it to "dark-theme.css"
        if (emailcheck) {
            elem.style.border = '1px solid transparent';
            elem.style.boxShadow = '0 0 3px 0 blue';
            elem.style.background = '#fff';
            elem.style.color = 'blue';
            labelicon.style.background = 'blue';
        } else {
            elem.style.border = '1px solid transparent';
            elem.style.boxShadow = '0 0 3px 0 red';
            elem.style.background = '#fff';
            elem.style.color = 'red';
            labelicon.style.background = 'red';
        }
    // Otherwise...
    } else {
        // ... switch it to "light-theme.css"
        if (emailcheck) {
            elem.style.border = '1px solid transparent';
            elem.style.boxShadow = '0 0 3px 0 #0077ff';
            elem.style.background = '#050032'
            elem.style.color = '#0077ff';
            labelicon.style.background = '#0077ff';
        } else {
            elem.style.border = '1px solid transparent';
            elem.style.boxShadow = '0 0 3px 0 red';
            elem.style.background = '#320000';
            elem.style.color = 'red';
            labelicon.style.background = 'red';
        }
    }
}