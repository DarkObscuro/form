/********************************************* Light Theme ************************************************************/

var checkNotEmptyBlueLight = function(id) {
    var elem = document.getElementById(id);
    if (elem.value) {
        elem.style.border = '1px solid transparent';
        elem.style.boxShadow = '0 0 3px 0 blue';
    } else {
        elem.style.border = '1px solid #cbc9c9';
        elem.style.boxShadow = '1px 2px 5px rgba(0,0,0,.09)';
    }
}

var checkNotEmptyRedLight = function(id) {
    var elem = document.getElementById(id);
    var labelicon = document.getElementById('icon' + id);
    if (elem.value) {
        elem.style.border = '1px solid transparent';
        elem.style.boxShadow = '0 0 3px 0 blue';
        elem.style.background = '#fff';
        labelicon.style.background = 'blue';
    } else {
        elem.style.border = '1px solid transparent';
        elem.style.boxShadow = '0 0 3px 0 red';
        elem.style.background = '#fff';
        labelicon.style.background = 'red';
    }
}

/********************************************* Dark Theme ************************************************************/

var checkNotEmptyBlueDark = function(id) {
    var elem = document.getElementById(id);
    if (elem.value) {
        elem.style.border = '1px solid transparent';
        elem.style.boxShadow = '0 0 3px 0 #0077ff';
    } else {
        elem.style.border = '1px solid #cbc9c9';
        elem.style.boxShadow = '1px 2px 5px rgba(0,0,0,.09)';
    }
}

var checkNotEmptyRedDark = function(id) {
    var elem = document.getElementById(id);
    var labelicon = document.getElementById('icon' + id);
    if (elem.value) {
        elem.style.border = '1px solid transparent';
        elem.style.boxShadow = '0 0 3px 0 #0077ff';
        elem.style.background = '#050032'
        labelicon.style.background = '#0077ff';
    } else {
        elem.style.border = '1px solid transparent';
        elem.style.boxShadow = '0 0 3px 0 red';
        elem.style.background = '#320000';
        labelicon.style.background = 'red';
    }
}

/********************************************* Blue Switch ************************************************************/

var checkNotEmptyBlue = function(id) {
    const themeCSS = document.querySelector("#theme-link-css");;
    if (themeCSS.getAttribute("href") == "css/style.css") {
        checkNotEmptyBlueLight(id);
    } else {
        checkNotEmptyBlueDark(id);
    }
}

/********************************************* Red Switch ************************************************************/

var checkNotEmptyRed = function(id) {
    const themeCSS = document.querySelector("#theme-link-css");;
    if (themeCSS.getAttribute("href") == "css/style.css") {
        checkNotEmptyRedLight(id);
    } else {
        checkNotEmptyRedDark(id);
    }
}

/********************************************* All Fields ************************************************************/

var checkAllFields = function() {
    var fields = document.getElementsByTagName("input");
    for (let i = 0; i < fields.length; i++) {
        var id = fields[i].id;
        if (fields[i].getAttribute("onkeyup") == 'checkNotEmptyBlue(this.id);') {
            checkNotEmptyBlue(id);
        } else if (fields[i].getAttribute("onkeyup") == 'checkString(this.id);') {
            checkString(id);
        } else if (fields[i].getAttribute("onkeyup") == 'checkNotEmpty(this.id);') {
            checkNotEmpty(id);
        } else if (id == "email") {
            checkMail(id);
        } else if (id == "mobilephone") {
            checkPhone(id);
        } else if (id == "dob") {
            checkDate(id);
        } else {
            checkNotEmptyRed(id);
        }
    }
}
