// Измени код так, чтобы объект parent стал прототипом для объекта в переменной сhild.

// Объявлена переменная parent
// Значение переменной parent это объект
// Вызов parent.hasOwnProperty("surname") возвращает true
// Вызов parent.hasOwnProperty("heritage") возвращает true
// Объявлена переменная child
// Значение переменной child это объект
// Вызов child.hasOwnProperty("name") возвращает true
// Обращение к child.name возвращает "Jason"
// Вызов child.hasOwnProperty("age") возвращает true
// Обращение к child.age возвращает 27
// Вызов child.hasOwnProperty("surname") возвращает false
// Обращение к child.surname возвращает "Moore"
// Вызов child.hasOwnProperty("heritage") возвращает false
// Обращение к child.heritage возвращает "Irish"
// Вызов parent.isPrototypeOf(child) возвращает true
// Используется метод Object.create()

const parent = {
  name: "Stacey",
  surname: "Moore",
  age: 54,
  heritage: "Irish",
};

const child = Object.create(parent);

child.name = "Jason";
child.age = 27;


console.log(child.hasOwnProperty("name"));
console.log(child.name);
console.log(child.hasOwnProperty("age"));
console.log(child.age);
console.log(child.hasOwnProperty("surname"));
console.log(child.surname);
console.log(child.hasOwnProperty("heritage"));
console.log(child.heritage);
console.log(parent.isPrototypeOf(child));