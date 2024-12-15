def two_sum(nums, target):
    result = []
    for index in range(len(nums) - 1):
        for indexplus in range(index + 1, len(nums)):
            if nums[index] + nums[indexplus] == target:
                result.append(index)
                result.append(indexplus)
                return result
    

print(two_sum([1, 2, 3, 4, 5, 6, 7, 8, 9], 5))