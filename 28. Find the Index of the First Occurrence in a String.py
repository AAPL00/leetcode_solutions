def strStr(needle, haystack):
    index = -1
    completed = False
    if len(needle) == 1:
        for i in range(len(haystack)):
            if needle[0] == haystack[i]:
                index = 1
                break
    else:
        for i in range(0, len(haystack)):
            if haystack[i] == needle[0] and len(needle) <= len(haystack) - i:
                index = i
                for j in range(1, len(needle)):
                    if needle[j] != haystack[i + j]:
                        index = -1
                        break
                    if j == len(needle) - 1 and needle[len(needle) - 1] == haystack[i + j]:
                        completed = True
                if completed == True:
                    break
    return index