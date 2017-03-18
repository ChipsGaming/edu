// Циклы
var i = 0;
while(i < 10){ // Условие цикла
  console.log(i); // Тело цикла
}

var i = 0;
do{
  console.log(i); // Тело цикла
}while(i < 10); // Условие цикла

for(var i = 0; i < 10; i++){ // Условие цикла
  console.log(i); // Тело цикла
}

var arr = [1,2,3];
for(var i in arr){ // Генератор
  console.log(arr[i]); // Тело фикла
}
