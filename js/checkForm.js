var checkFormFields1 = function() {
    var first_name = document.getElementById('firstname'); 
    var last_name = document.getElementById('lastname');
    var email = document.getElementById('email'); 
    var street_address = document.getElementById('streetaddress');
    var address_2 = document.getElementById('address2'); 
    var city =  document.getElementById('city');
    var region = document.getElementById('region'); 
    var postal = document.getElementById('postal');
    var country = document.getElementById('country'); 
    var citizenship = document.getElementById('citizenship');
    var dob = document.getElementById('dob'); 
    var mobile_phone = document.getElementById('mobilephone');
    var comments = document.getElementById('comments');
    var check = first_name.value && last_name.value && email.value && street_address.value && city.value && region.value && postal.value && country.value && citizenship.value && dob.value && mobile_phone.value;

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
    var work_street_address = document.getElementById('workstreetaddress');
    var work_address_2 = document.getElementById('workaddress2'); 
    var work_city = document.getElementById('workcity');
    var work_state = document.getElementById('workstate'); 
    var work_postal = document.getElementById('workpostal');
    var work_country = document.getElementById('workcountry');
    var work_mobile_phone = document.getElementById('workmobilephone'); 
    var work_email = document.getElementById('workemail');
    var comments = document.getElementById('comments');
    var check = employer.value && job_title.value && division.value && work_street_address.value && work_city.value && work_state.value && work_postal.value && work_country.value && work_mobile_phone.value && work_email.value;

    if (check) {
        comments.innerHTML = '';
    } else {
        comments.innerHTML = 'Please fill in all the <span style="color: #ff0000">required fields</span>';
    }
    return check;
}

var checkFormFields3 = function() {
    var uni_1 = document.getElementById('uni1'); 
    var degree_1 = document.getElementById('degree1');
    var month_from_1 = document.getElementById('monthfrom1'); 
    var year_from_1 =  document.getElementById('yearfrom1');
    var month_to_1 = document.getElementById('monthto1'); 
    var year_to_1 = document.getElementById('yearto1');
    var comments = document.getElementById('comments');
    var check = uni_1.value && degree_1.value && month_from_1.value && year_from_1.value && month_to_1.value && year_to_1.value;

    if (check) {
        comments.innerHTML = '';
    } else {
        comments.innerHTML = 'Please fill in all the <span style="color: #ff0000">required fields</span>';
    }
    return check;
}