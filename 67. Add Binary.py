def binary_sum(a, b):
    result = bin(int(a, 2) + int(b, 2))[2:]  #El segundo parámetro que se le pasa a a la función int indica la vase en la que
    return result                            #representada la cadena que recibe se usa un splicing al final para eliminar
                                             #el prefijo 0b que añade la función bin(), ni idea que se podía hacer splicing
                                             #con esa sintaxis
print(binary_sum("10101010101", "100010001"))