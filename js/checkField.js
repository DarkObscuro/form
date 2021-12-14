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

const checkNotEmptyRedLight = function(id) {
    const elem = document.getElementById(id);
    const labelicon = document.getElementById('icon' + id);
    changeStyle(elem, labelicon, elem.value ? '#fff' : '#fff', elem.value ? 'blue' : 'red');
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

const checkNotEmptyRedDark = function(id) {
    const elem = document.getElementById(id);
    const labelicon = document.getElementById('icon' + id);
    changeStyle(elem, labelicon, elem.value ? '#050032' : '#320000', elem.value ? '#0077ff' : 'red');
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
