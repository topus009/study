/* ЗАДАЧА 1

Треугольник.

Напишите цикл,  выводит такой треугольник:

1 #
2 ##
3 ###
4 ####
5 #####
6 ######
7 #######

*/

﻿var str = "#";
while (str.length <= 7) {
    console.log(str);
    str += "#";
};
