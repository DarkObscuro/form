var checkNotEmptyBlue = function(id) {
    var elem = document.getElementById(id);
    if (elem.value) {
        elem.style.border = '1px solid transparent';
        elem.style.boxShadow = '0 0 3px 0 blue';
    } else {
        elem.style.border = '1px solid #cbc9c9';
        elem.style.boxShadow = '1px 2px 5px rgba(0,0,0,.09)';
    }
}

var checkNotEmptyRed = function(id) {
    var elem = document.getElementById(id);
    var labelicon = document.getElementById('icon' + id);
    if (elem.value) {
        elem.style.border = '1px solid transparent';
        elem.style.boxShadow = '0 0 3px 0 blue';
        labelicon.style.background = 'blue';
    } else {
        elem.style.border = '1px solid transparent';
        elem.style.boxShadow = '0 0 3px 0 red';
        labelicon.style.background = 'red';
    }
}