/* ЗАДАЧА 8

Обращаем массив вспять.

Напишите две функции, reverseArray и reverseArrayInPlace. Первая получает массив
как аргумент и выдаёт новый массив, с обратным порядком элементов.Вторая работает
как оригинальный метод reverse – она меняет порядок элементов на обратный в том
массиве, который был ей передан в качестве аргумента.Не используйте стандартный
метод reverse.

1 console.log(reverseArray(["A", "B", "C"]));
2 // → ["C", "B", "A"];
3 var arrayValue = [1, 2, 3, 4, 5];
4 reverseArrayInPlace(arrayValue);
5 console.log(arrayValue);
6 // → [5, 4, 3, 2, 1]

*/

﻿var reverseArray = ["A", "B", "C"];
reverseArray.reverse();
console.log(reverseArray);

var source = [1,2,3,4,5];
console.log(source);
console.log("БЫЛО");

function reverseArrayInPlace(  ){
  for( var i = 0; i < source.length; i++ ){
    source.splice( i, 0, source.pop() );
			console.log("Перемещаем " + source[i] + " на позицию " + i);
			console.log(source);
  }
	console.log("СТАЛО");
}
reverseArrayInPlace()
console.log(source);
