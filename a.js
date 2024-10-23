var isValid = function(s) {
    var validated = true;
    for (var i = 0; i < s.length; i++) {c
        if (s[i] == ')') {
            for (var j = i; j >= 0; j-- ) {
                console.log(j);
                if(s[j] == '(') {
                    s[i] = '0';
                    s[j] = '0';
                    break;
                }
                else if (s[j] == '[' | s[j] == '{') {
                    console.log("pene");
                    validated = false;
                    break;
                }
                else if (j == 0) {
                    console.log(3);
                    validated = false;
                    break;
                }
            }
        }
        else if (s[i] == ']') {
            for (var j = i; j >= 0; j-- ) {
                if(s[j] == '[') {
                    console.log("aqui");
                    s[i] = '0';
                    s[j] = '0';
                    break;
                }
                else if (s[j] == '(' | s[j] == '{') {
                    validated = false;
                    break;
                }
                else if (j == 0) {
                    validated = false;
                    break;
                }
            }
        }
        else if (s[i] == '}') {
            for (var j = i; j >= 0; j-- ) {
                if(s[j] == '{') {
                    s[i] = '0';
                    s[j] = '0';
                    break;
                }
                else if (s[j] == '[' | s[j] == '(') {
                    validated = false;
                    break;
                }
                else if (j == 0) {
                    validated = false;
                    break;
                }
            }
        }
    }
    return validated;
};
console.log(isValid("([])"));