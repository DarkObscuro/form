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

    return employer.value && job_title.value && division.value && work_street_address.value && work_city.value && work_state.value && work_postal.value && work_country.value && work_mobile_phone.value && work_email.value;
}