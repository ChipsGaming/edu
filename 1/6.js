/*
Если возможно и необходимо, js будет пытаться приводить типы из следующих к следующим:
*/

// Числа
/*
5 -> 5.0
5.5 -> 5

5 -> '5'
-5 -> '-5'
5.5 -> '5.5'
0 -> '0'

5 -> true
-5 -> true
5.5 -> true
0 -> false
*/

// Для приведения к числам используются команды:
console.log(parseInt('5'));
console.log(parseFloat('5.5'));

// Строки
/*
'a' -> 0
'5' -> 5
'5.5' -> 5.5
'5.' -> 5
'0' -> 0
'' -> 0

'a' -> true
'' -> false
*/

// Обычно к строкам приводить не надо, но если очень хочется:
console.log(5 + '');

// Логический
/*
true -> 1
false -> 0

true -> 'true'
false -> 'false'
*/

// Используя операции над типами данных, напиши ниже команды для проверки 
// следующих преобразований:
// логический -> число
// число -> логический
// строку -> число
// строку -> логический
// число -> строку
