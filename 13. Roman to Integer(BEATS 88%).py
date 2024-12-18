def roman_to_integer(s):
    number = 0
    prev = float('inf')
    dict = {"M": 1000, "D": 500, "C": 100, "L": 50, "X": 10, "V": 5, "I": 1}
    for char in s:
        if dict[char] <= prev:
            number += dict[char]
            prev = dict[char]
        else:
            number += dict[char] - 2 * prev
            prev = dict[char]
    return number

