var longestCommonPrefix = function(strs) {
    var prefix = strs[0];
    for (var i = 1; i < strs.length; i++) {
        for (var j = 0; j < prefix.length; j++) {
            if (strs[i][j] == undefined || prefix[j] != strs[i][j]) {
                prefix = prefix.slice(0, j);
                break;
            }
        }
    }
    return prefix;
};