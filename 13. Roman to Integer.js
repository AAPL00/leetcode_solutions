var romanToInt = function(s) {
    var number;
    var numerical_value = [];
    for (var i = 0; i < s.length; i++) {
        switch (s[i]) {
            case 'M' : numerical_value.push(1000); break;
            case 'D' : numerical_value.push(500); break;
            case 'C' : numerical_value.push(100); break;
            case 'L' : numerical_value.push(50); break;
            case 'X' : numerical_value.push(10); break;
            case 'V' : numerical_value.push(5); break;
            case 'I' : numerical_value.push(1); break;
        }
    }
    for (var i = 0; i < numerical_value.length; i++) {
        if (i > 0 && numerical_value[i] > numerical_value[i - 1]) {
            number += numerical_value[i] - 2 * numerical_value[i - 1]
        }
        else {
            number += numerical_value[i];
        }
    }
    return number;
};