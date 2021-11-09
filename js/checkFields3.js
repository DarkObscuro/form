var checkNotEmpty3 = function() {
    var uni_1 = document.getElementById('uni1'); 
    var degree_1 = document.getElementById('degree1');
    var month_from_1 = document.getElementById('monthfrom1'); 
    var year_from_1 =  document.getElementById('yearfrom1');
    var month_to_1 = document.getElementById('monthto1'); 
    var year_to_1 = document.getElementById('yearto1');
    var next_button = document.getElementById('nextBtn');

    if (uni_1.value) {
        uni_1.style.border = '1px solid transparent';
        uni_1.style.boxShadow = '0 0 3px 0 blue';
        document.getElementById("iconuni1").style.background = 'blue';
    } else {
        uni_1.style.border = '1px solid transparent';
        uni_1.style.boxShadow = '0 0 3px 0 red';
        document.getElementById("iconuni1").style.background = 'red';
    }

    if (degree_1.value) {
        degree_1.style.border = '1px solid transparent';
        degree_1.style.boxShadow = '0 0 3px 0 blue';
        document.getElementById("icondegree1").style.background = 'blue';
    } else {
        degree_1.style.border = '1px solid transparent';
        degree_1.style.boxShadow = '0 0 3px 0 red';
        document.getElementById("icondegree1").style.background = 'red';
    }

    if (month_from_1.value) {
        month_from_1.style.border = '1px solid transparent';
        month_from_1.style.boxShadow = '0 0 3px 0 blue';
        document.getElementById("iconmonthfrom1").style.background = 'blue';
    } else {
        month_from_1.style.border = '1px solid transparent';
        month_from_1.style.boxShadow = '0 0 3px 0 red';
        document.getElementById("iconmonthfrom1").style.background = 'red';
    }

    if (year_from_1.value) {
        year_from_1.style.border = '1px solid transparent';
        year_from_1.style.boxShadow = '0 0 3px 0 blue';
        document.getElementById("iconyearfrom1").style.background = 'blue';
    } else {
        year_from_1.style.border = '1px solid transparent';
        year_from_1.style.boxShadow = '0 0 3px 0 red';
        document.getElementById("iconyearfrom1").style.background = 'red';
    }

    if (month_to_1.value) {
        month_to_1.style.border = '1px solid transparent';
        month_to_1.style.boxShadow = '0 0 3px 0 blue';
        document.getElementById("iconmonthto1").style.background = 'blue';
    } else {
        month_to_1.style.border = '1px solid transparent';
        month_to_1.style.boxShadow = '0 0 3px 0 red';
        document.getElementById("iconmonthto1").style.background = 'red';
    }

    if (year_to_1.value) {
        year_to_1.style.border = '1px solid transparent';
        year_to_1.style.boxShadow = '0 0 3px 0 blue';
        document.getElementById("iconyearto1").style.background = 'blue';
    } else {
        year_to_1.style.border = '1px solid transparent';
        year_to_1.style.boxShadow = '0 0 3px 0 red';
        document.getElementById("iconyearto1").style.background = 'red';
    }
}