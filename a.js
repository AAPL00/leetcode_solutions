var isValid = function(s) {
    var opened = [];
    var closed = [];
    var validated = true;
    for (var i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            opened.push(s[i]);
        }
        else if (s[i] == '[') {
            opened.push(s[i]);
        }
        else if (s[i] == '{') {
            opened.push(s[i]);
        }
        else if (s[i] == ')') {
            closed.push(s[i])
        }
        else if (s[i] == ']') {
            closed.push(s[i]);
        }
        else if (s[i] == '}') {
            closed.push(s[i]);
        }
    }
    if (opened.length == closed.length) {
        validated = false;
    }
    while (opened.is) {
        if (opened.push() != closed.shift()) {
            validated = false;
            break;
        }
    }
    return validated
}