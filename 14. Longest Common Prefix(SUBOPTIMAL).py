def longest_common_prefix(strs):
    longest_common_prefix = strs[0]
    for index in range(1, len(strs)):
        aux = strs[index]
        if len(longest_common_prefix) > len(aux):
            longest_common_prefix = longest_common_prefix[:len(aux)]
        elif len(longest_common_prefix) < len(strs[index]):
            aux = aux[:len(longest_common_prefix)]
        for a_index in range(len(aux)):
                if longest_common_prefix[a_index] != aux[a_index]:
                    longest_common_prefix = longest_common_prefix[:a_index]
                    break
    return longest_common_prefix


print(longest_common_prefix(["flower","flow","flight"]))
