var checkNotEmpty2 = function() {
    var employer = document.getElementById('employer'); 
    var job_title = document.getElementById('jobtitle');
    var division = document.getElementById('division'); 
    var work_street_address = document.getElementById('workstreetaddress');
    var work_address_2 = document.getElementById('workaddress2'); 
    var work_city = document.getElementById('workcity');
    var work_state = document.getElementById('workstate'); 
    var work_postal = document.getElementById('workpostal');
    var work_country = document.getElementById('workcountry'); 
    var work_home_phone = document.getElementById('workhomephone');
    var work_mobile_phone = document.getElementById('workmobilephone'); 
    var work_email = document.getElementById('workemail');
    var next_button = document.getElementById('nextBtn');

    if (employer.value) {
        employer.style.border = '1px solid transparent';
        employer.style.boxShadow = '0 0 3px 0 blue';
        document.getElementById("iconemployer").style.background = 'blue';
    } else {
        employer.style.border = '1px solid transparent';
        employer.style.boxShadow = '0 0 3px 0 red';
        document.getElementById("iconemployer").style.background = 'red';
    }

    if (job_title.value) {
        job_title.style.border = '1px solid transparent';
        job_title.style.boxShadow = '0 0 3px 0 blue';
        document.getElementById("iconjobtitle").style.background = 'blue';
    } else {
        job_title.style.border = '1px solid transparent';
        job_title.style.boxShadow = '0 0 3px 0 red';
        document.getElementById("iconjobtitle").style.background = 'red';
    }

    if (division.value) {
        division.style.border = '1px solid transparent';
        division.style.boxShadow = '0 0 3px 0 blue';
        document.getElementById("icondivision").style.background = 'blue';
    } else {
        division.style.border = '1px solid transparent';
        division.style.boxShadow = '0 0 3px 0 red';
        document.getElementById("icondivision").style.background = 'red';
    }

    if (work_street_address.value) {
        work_street_address.style.border = '1px solid transparent';
        work_street_address.style.boxShadow = '0 0 3px 0 blue';
        document.getElementById("iconworkstreetaddress").style.background = 'blue';
    } else {
        work_street_address.style.border = '1px solid transparent';
        work_street_address.style.boxShadow = '0 0 3px 0 red';
        document.getElementById("iconworkstreetaddress").style.background = 'red';
    }

    if (work_city.value) {
        work_city.style.border = '1px solid transparent';
        work_city.style.boxShadow = '0 0 3px 0 blue';
        document.getElementById("iconworkcity").style.background = 'blue';
    } else {
        work_city.style.border = '1px solid transparent';
        work_city.style.boxShadow = '0 0 3px 0 red';
        document.getElementById("iconworkcity").style.background = 'red';
    }

    if (work_state.value) {
        work_state.style.border = '1px solid transparent';
        work_state.style.boxShadow = '0 0 3px 0 blue';
        document.getElementById("iconworkstate").style.background = 'blue';
    } else {
        work_state.style.border = '1px solid transparent';
        work_state.style.boxShadow = '0 0 3px 0 red';
        document.getElementById("iconworkstate").style.background = 'red';
    }

    if (work_postal.value) {
        work_postal.style.border = '1px solid transparent';
        work_postal.style.boxShadow = '0 0 3px 0 blue';
        document.getElementById("iconworkpostal").style.background = 'blue';
    } else {
        work_postal.style.border = '1px solid transparent';
        work_postal.style.boxShadow = '0 0 3px 0 red';
        document.getElementById("iconworkpostal").style.background = 'red';
    }

    if (work_country.value) {
        work_country.style.border = '1px solid transparent';
        work_country.style.boxShadow = '0 0 3px 0 blue';
        document.getElementById("iconworkcountry").style.background = 'blue';
    } else {
        work_country.style.border = '1px solid transparent';
        work_country.style.boxShadow = '0 0 3px 0 red';
        document.getElementById("iconworkcountry").style.background = 'red';
    }

    if (work_mobile_phone.value) {
        work_mobile_phone.style.border = '1px solid transparent';
        work_mobile_phone.style.boxShadow = '0 0 3px 0 blue';
        document.getElementById("iconworkmobilephone").style.background = 'blue';
    } else {
        work_mobile_phone.style.border = '1px solid transparent';
        work_mobile_phone.style.boxShadow = '0 0 3px 0 red';
        document.getElementById("iconworkmobilephone").style.background = 'red';
    }

    if (work_email.value) {
        work_email.style.border = '1px solid transparent';
        work_email.style.boxShadow = '0 0 3px 0 blue';
        document.getElementById("iconworkemail").style.background = 'blue';
    } else {
        work_email.style.border = '1px solid transparent';
        work_email.style.boxShadow = '0 0 3px 0 red';
        document.getElementById("iconworkemail").style.background = 'red';
    }

}