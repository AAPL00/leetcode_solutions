def two_sum(nums, target):
    result = []
    for index in range(len(nums) - 1):
        for indexplus in range(index + 1, len(nums)):
            if nums[index] + nums[indexplus] == target:
                result.append(index)
                result.append(indexplus)
                return result