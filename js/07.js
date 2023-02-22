// Добавь классу Car метод constructor который принимает три параметра:

// brand - марка автомобиля.
// model - модель автомобиля.
// price - цена автомобиля.
// Класс Car должен создавать объект с одноимёнными свойствами brand, model и price, 
// значениями которых должны быть переданные аргументы во время её вызова с оператором new.

// Объявлен класс Car
// У класса Car есть метод constructor
// В результате вызова new Car("Audi", "Q3", 36000) получится объект { brand: "Audi", model: "Q3", price: 36000 }
// В результате вызова new Car("BMW", "X5", 58900) получится объект { brand: "BMW", model: "X5", price: 58900 }
// В результате вызова new Car("Nissan","Murano", 31700) получится объект { brand: "Nissan", model: "Murano", price: 31700 }

class Car {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}

console.log(new Car("Audi", "Q3", 36000));
console.log(new Car("BMW", "X5", 58900));
console.log(new Car("Nissan","Murano", 31700));