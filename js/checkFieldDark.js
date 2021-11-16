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
        elem.style.background = '#320000'
        labelicon.style.background = 'red';
    }
}
