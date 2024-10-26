def lengthOfLastWord(s):
    length_of_last_word = 0
    for i in range(1, len(s) + 1):
        if s[-i] == " " and length_of_last_word == 0:
            continue
        elif s[-i] == " ":
            break
        else:
            length_of_last_word += 1
    return length_of_last_word