var twoSum = function(nums, target) {
    var answer = [0, 0];
    for (var i = 0; i < nums.length - 1; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                answer[0] = i;
                answer[1] = j;
            }
        }
    }
    return answer;
}