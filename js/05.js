// Измени код, построив цепочку прототипов так, чтобы объект ancestor был прототипом для parent, 
// а тот в свою очередь был прототипом для child.

// Объявлена переменная ancestor
// Значение переменной ancestor это объект.
// Объявлена переменная parent
// Значение переменной parent это объект.
// Объявлена переменная child
// Значение переменной child это объект.
// Вызов ancestor.isPrototypeOf("parent") возвращает true
// Вызов parent.isPrototypeOf("child") возвращает true
// Вызов ancestor.hasOwnProperty("surname") возвращает true
// Обращение к ancestor.surname возвращает "Dawson"
// Вызов parent.hasOwnProperty("surname") возвращает true
// Обращение к parent.surname возвращает "Moore"
// Вызов child.hasOwnProperty("surname") возвращает false
// Обращение к child.surname возвращает "Moore"
// Вызов ancestor.hasOwnProperty("heritage") возвращает true
// Обращение к ancestor.heritage возвращает "Irish"
// Вызов parent.hasOwnProperty("heritage") возвращает false
// Обращение к parent.heritage возвращает "Irish"
// Вызов child.hasOwnProperty("heritage") возвращает false
// Обращение к child.heritage возвращает "Irish"
// Используется метод Object.create()


const ancestor = {
  name: "Paul",
  age: 83,
  surname: "Dawson",
  heritage: "Irish",
};

const parent = Object.create(ancestor);
parent.name = "Stacey";
parent.surname = "Moore";
parent.age = 54;

const child = Object.create(parent);
child.name = "Jason";
child.age = 27;


console.log(ancestor.isPrototypeOf("parent"));
console.log(parent.isPrototypeOf("child"));
console.log(ancestor.hasOwnProperty("surname"));
console.log(ancestor.surname);
console.log(parent.hasOwnProperty("surname"));
console.log(parent.surname);
console.log(child.hasOwnProperty("surname"));
console.log(child.surname);
console.log(ancestor.hasOwnProperty("heritage"));
console.log(ancestor.heritage);
console.log(parent.hasOwnProperty("heritage"));
console.log(parent.heritage);
console.log(child.hasOwnProperty("heritage"));
console.log(child.heritage);
