// Подробнее про объекты

// Объявление конструктора класса
function Parent(foo){
  this.foo = foo; // this - обращение к объекту
}

// Объявление метода
Parent.prototype.getFoo = function(){ // Методы объявляются в prototype
  return this.foo;
};

var obj = new Parent(5); // Создание объекта данного класса через вызов конструктора
console.log(obj.getFoo()); // Вызов метода. Сначала поиск метода выполняется в obj, затем в prototype

// Объявление конструктора дочернего класса
function Child(foo, bar){
  Parent.prototype.constructor.apply(this, [foo]); // Вызов конструктора родителя

  this.bar = bar;
}
// Наследование
Child.prototype = new Parent;
Child.prototype.constructor = Child;

Child.prototype.getSum = function(){
  return this.foo + this.bar;
};

var obj2 = new Child(1, 2);
