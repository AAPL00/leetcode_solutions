def is_palindrome(x):
    result = True
    number_str = str(x)
    for index in range(len(number_str)):
        if number_str[index] != number_str[-index - 1]:
            result = False
            break
    return result