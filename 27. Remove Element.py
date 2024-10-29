def removeElement(nums, val):
    list = []
    for i in range(len(nums)):
        if nums[i] == val:
            list.append(i)
    for i in range(len(list)) :
        nums.pop(list[i] - i)
    return len(nums)