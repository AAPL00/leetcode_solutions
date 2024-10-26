def plusOne(digits):
    number_string = ""
    for number in digits:
        number_string += str(number)
    integer = int(number_string)
    integer += 1
    number_string = str(integer)
    list = []
    for char in number_string:
        list.append(int(char))
    return list