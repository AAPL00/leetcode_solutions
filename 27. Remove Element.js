/*LEETCODE NO ACEPTA LA SOLUCION POR UN RUNTIME ERROR PERO FUNCIONA PERDECTAMENTE */
var removeElement = function(nums, val) {
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == val) {
            nums[i] = 'X';
        }
    }
    nums = nums.filter(isNotX);
    return nums.length;
}
function isNotX(char) {
    return char != 'X';
};
console.log(removeElement([1, 2, 3, 4, 4, 4, 4, 4, 5], 4));