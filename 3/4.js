// Эта функция-фабрика, создающая функции для вывода на экран только четных или 
// только не четных значений переданного им массива
//
// @param {bool} even true - если нужно создать функцию для вывода четных 
// значений, иначе - false
//
// @return {Function} Функция вывода значений.
function builder(even){ // При каждом вызове функции, создается новая переменная-параметр
  return function(arr){
    var result = [];
    for(var i in arr){
      if(even){ // Используется замыкание
        if(arr[i] % 2 == 0){
          console.log(arr[i]);
        }
      }
      else{
        if(arr[i] % 2 != 0){
          console.log(arr[i]);
        }
      }
    }
  }
}

var onlyEven = builder(true);
onlyEven([1,2,3]);

var onlyOdd = builder(false);
onlyOdd([1,2,3]);

// Изучи эту фабрику и объясни как оно работает
