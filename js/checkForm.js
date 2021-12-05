var checkFormFields1 = function() {
    var firstnamecheck = ValidateString('firstname'); 
    var lastnamecheck = ValidateString('lastname');
    var emailcheck = ValidateEmail();
    var streetaddresscheck = ValidateNotEmpty('streetaddress');
    var citycheck =  ValidateString('city');
    var citizenshipcheck = ValidateNotEmpty('citizenship');
    var dobcheck = ValidateDate(); 
    var phonecheck = ValidatePhone();
    var comments = document.getElementById('comments');
    var check = firstnamecheck && lastnamecheck && emailcheck && streetaddresscheck && citycheck && citizenshipcheck && dobcheck && phonecheck;
    
    if (check) {
        comments.innerHTML = '';
    } else {
        comments.innerHTML = 'Please fill in all the <span style="color: #ff0000">required fields</span>';
    }
    return check;
}

var checkFormFields2 = function() {
    var employercheck = ValidateString('employer'); 
    var jobtitlecheck = ValidateString('jobtitle');
    var divisioncheck = ValidateString('division');
    var comments = document.getElementById('comments');
    var check = employercheck && jobtitlecheck && divisioncheck;

    if (check) {
        comments.innerHTML = '';
    } else {
        comments.innerHTML = 'Please fill in all the <span style="color: #ff0000">required fields</span>';
    }
    return check;
}

/*********************************************************************************************************/

function ValidateEmail() 
{
    var elem = document.getElementById("email");
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return elem.value.match(mailformat);
}

var checkMail = function(id) {
    checkSpecField(id,ValidateEmail());
}

/*********************************************************************************************************/

function ValidateString(id)
{
    var elem = document.getElementById(id);
    var stringformat = /^[a-zA-Z-' ]*$/;
    var nospace = elem.value.replace(/ /g, "");
    return elem.value.match(stringformat) && elem.value != "" && nospace != "";
}

var checkString = function(id) {
    checkSpecField(id,ValidateString(id));
}

/*********************************************************************************************************/

function ValidateNotEmpty(id)
{
    var elem = document.getElementById(id);
    var nospace = elem.value.replace(/ /g, "");
    return elem.value != "" && nospace != "";
}

var checkNotEmpty = function(id) {
    checkSpecField(id,ValidateNotEmpty(id));
}

/*********************************************************************************************************/

function ValidateDate()
{
    var elem = document.getElementById("dob");

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;

    return elem.value <= today && elem.value.length == 10;
}

var checkDate = function(id) {
    checkSpecField(id,ValidateDate());
}

/*********************************************************************************************************/

function ValidatePhone()
{
    var elem = document.getElementById("mobilephone");
    return (elem.value.length == 16);
}

var checkPhone = function(id) {
    checkSpecField(id,ValidatePhone());
}

/*********************************************************************************************************/

var checkSpecField = function(id,func) {
    const themeCSS = document.querySelector("#theme-link-css");
    var check = func;
    var elem = document.getElementById(id);
    var labelicon = document.getElementById('icon' + id);
    if (themeCSS.getAttribute("href") == "css/style.css") {
        if (check) {
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
    } else {
        if (check) {
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