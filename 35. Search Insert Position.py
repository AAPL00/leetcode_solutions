def searchInsert(nums, target):
    i = len(nums) // 2
    if nums[i] == target:
        return i
    elif i == 1:
        return nums[i]
    elif nums[i] <= target:
        searchInsert(nums[i:], target)
    elif nums[i] >= target:
        searchInsert(nums[:i], target)


print(searchInsert([1, 2, 3, 4, 5, 6, 7, 8], 7))