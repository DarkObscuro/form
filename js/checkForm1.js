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

    return first_name.value && last_name.value && email.value && street_address.value && city.value && region.value && postal.value && country.value && citizenship.value && dob.value && mobile_phone.value;
}