#Suboptimal solution
def mySqrt(self, x):
    number = 1
    while True:
        pow = number * number
        if pow == x:
            break
        elif pow > x:
            number -= 1
            break
        else:
            number += 1
    return number