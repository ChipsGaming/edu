// Области видимости
var foo = 1; // foo - в глобальной области
function add(bar){ // bar - в локальной области функции
  return foo + bar;
}

console.log(add(5));

// Зацепление
function getFun(){
  var foo = 5; // Локально для getFun. Перекрывает своей видимостью глобальную foo

  // Зацепление
  return function(){
    return foo + 2; // Тут видно foo, так как она выше в области видимости
  }
}

console.log(getFun()());

// Запусти все и попробуй объяснить себе, почему все именно так
