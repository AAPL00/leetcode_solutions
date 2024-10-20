var isPalindrome = function(x) {
    var myString = x.toString();
    var answer = true;
    for (var i = 0; i + 0.5 < myString.length / 2; i++) {
        if (myString[i] != myString[myString.length - 1 - i]) {
            answer = false;
            break;
        }
    }
    return answer;
};