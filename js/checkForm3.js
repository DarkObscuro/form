var checkFormFields3 = function() {
    var uni_1 = document.getElementById('uni1'); 
    var degree_1 = document.getElementById('degree1');
    var month_from_1 = document.getElementById('monthfrom1'); 
    var year_from_1 =  document.getElementById('yearfrom1');
    var month_to_1 = document.getElementById('monthto1'); 
    var year_to_1 = document.getElementById('yearto1');

    return uni_1.value && degree_1.value && month_from_1.value && year_from_1.value && month_to_1.value && year_to_1.value;
}