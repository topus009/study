/* ЗАДАЧА 3

Шахматная доска.

Напишите программу, создающую строку, содержащую решётку 8х8, в которой линии разделяются символами новой строки.
На каждой позиции либо пробел, либо #. В результате должна получиться шахматная доска.

1 # # # #
2  # # # #
3 # # # #
4  # # # #
5 # # # #
6  # # # #
7 # # # #
8   # # # #

*/

﻿var a = "# # # # ";
var b = " # # # #";
var count = 0;
while (count < 8) {
    console.log(a);
    console.log(b);
    count += 2;
};
