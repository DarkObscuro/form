var checkNotEmpty1 = function() {
    var title = document.getElementById('title');
    var first_name = document.getElementById('firstname'); 
    var last_name = document.getElementById('lastname');
    var preferred_name = document.getElementById('preferredname');
    var email = document.getElementById('email'); 
    var street_address = document.getElementById('streetaddress');
    var address_2 = document.getElementById('address2'); 
    var city =  document.getElementById('city');
    var region = document.getElementById('region'); 
    var postal = document.getElementById('postal');
    var country = document.getElementById('country'); 
    var citizenship = document.getElementById('citizenship');
    var dob = document.getElementById('dob'); 
    var home_phone = document.getElementById('homephone');
    var mobile_phone = document.getElementById('mobilephone'); 
    var inter_phone = document.getElementById('interphone');
    var next_button = document.getElementById('nextBtn');

    if (first_name.value) {
        first_name.style.border = '1px solid transparent';
        first_name.style.boxShadow = '0 0 3px 0 blue';
        document.getElementById("iconfirstname").style.background = 'blue';
    } else {
        first_name.style.border = '1px solid transparent';
        first_name.style.boxShadow = '0 0 3px 0 red';
        document.getElementById("iconfirstname").style.background = 'red';
    }

    if (last_name.value) {
        last_name.style.border = '1px solid transparent';
        last_name.style.boxShadow = '0 0 3px 0 blue';
        document.getElementById("iconlastname").style.background = 'blue';
    } else {
        last_name.style.border = '1px solid transparent';
        last_name.style.boxShadow = '0 0 3px 0 red';
        document.getElementById("iconlastname").style.background = 'red';
    }

    if (email.value) {
        email.style.border = '1px solid transparent';
        email.style.boxShadow = '0 0 3px 0 blue';
        document.getElementById("iconemail").style.background = 'blue';
    } else {
        email.style.border = '1px solid transparent';
        email.style.boxShadow = '0 0 3px 0 red';
        document.getElementById("iconemail").style.background = 'red';
    }

    if (street_address.value) {
        street_address.style.border = '1px solid transparent';
        street_address.style.boxShadow = '0 0 3px 0 blue';
        document.getElementById("iconstreetaddress").style.background = 'blue';
    } else {
        street_address.style.border = '1px solid transparent';
        street_address.style.boxShadow = '0 0 3px 0 red';
        document.getElementById("iconstreetaddress").style.background = 'red';
    }

    if (city.value) {
        city.style.border = '1px solid transparent';
        city.style.boxShadow = '0 0 3px 0 blue';
        document.getElementById("iconcity").style.background = 'blue';
    } else {
        city.style.border = '1px solid transparent';
        city.style.boxShadow = '0 0 3px 0 red';
        document.getElementById("iconcity").style.background = 'red';
    }

    if (region.value) {
        region.style.border = '1px solid transparent';
        region.style.boxShadow = '0 0 3px 0 blue';
        document.getElementById("iconregion").style.background = 'blue';
    } else {
        region.style.border = '1px solid transparent';
        region.style.boxShadow = '0 0 3px 0 red';
        document.getElementById("iconregion").style.background = 'red';
    }

    if (postal.value) {
        postal.style.border = '1px solid transparent';
        postal.style.boxShadow = '0 0 3px 0 blue';
        document.getElementById("iconpostal").style.background = 'blue';
    } else {
        postal.style.border = '1px solid transparent';
        postal.style.boxShadow = '0 0 3px 0 red';
        document.getElementById("iconpostal").style.background = 'red';
    }

    if (country.value) {
        country.style.border = '1px solid transparent';
        country.style.boxShadow = '0 0 3px 0 blue';
        document.getElementById("iconcountry").style.background = 'blue';
    } else {
        country.style.border = '1px solid transparent';
        country.style.boxShadow = '0 0 3px 0 red';
        document.getElementById("iconcountry").style.background = 'red';
    }

    if (citizenship.value) {
        citizenship.style.border = '1px solid transparent';
        citizenship.style.boxShadow = '0 0 3px 0 blue';
        document.getElementById("iconcitizenship").style.background = 'blue';
    } else {
        citizenship.style.border = '1px solid transparent';
        citizenship.style.boxShadow = '0 0 3px 0 red';
        document.getElementById("iconcitizenship").style.background = 'red';
    }

    if (dob.value) {
        dob.style.border = '1px solid transparent';
        dob.style.boxShadow = '0 0 3px 0 blue';
        document.getElementById("icondob").style.background = 'blue';
    } else {
        dob.style.border = '1px solid transparent';
        dob.style.boxShadow = '0 0 3px 0 red';
        document.getElementById("icondob").style.background = 'red';
    }

    if (mobile_phone.value) {
        mobile_phone.style.border = '1px solid transparent';
        mobile_phone.style.boxShadow = '0 0 3px 0 blue';
        document.getElementById("iconmobilephone").style.background = 'blue';
    } else {
        mobile_phone.style.border = '1px solid transparent';
        mobile_phone.style.boxShadow = '0 0 3px 0 red';
        document.getElementById("iconmobilephone").style.background = 'red';
    }

}