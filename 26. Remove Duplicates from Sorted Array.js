/*LEETCODE NO ACEPTA LA SOLUCION POR UN RUNTIME ERROR PERO FUNCIONA PERDECTAMENTE */
var removeDuplicates = function(nums) {
    for (var i = 0; i < nums.length - 1; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums [j]) {
                nums[j] = 'X';
            }
        }
    }
    nums = nums.filter(isNotX);
    return nums.length;
}
function isNotX(char) {
    return char != 'X';
}
console.log(removeDuplicates([0, 0, 1, 1, 2, 2, 3, 4, 5]));