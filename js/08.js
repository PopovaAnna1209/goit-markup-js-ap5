// Выполни рефакторинг класса Car так, чтобы он принимал один параметр - объект со свойсвами 
// brand, model и price. Деструктуризируй объект в сигнатуре (подписи) конструктора.

// Объявлен класс Car
// У класса Car есть метод constructor
// В результате вызова new Car({ brand: "Audi", model: "Q3", price: 36000 }) получится объект { brand: "Audi", model: "Q3", price: 36000 }
// В результате вызова new Car({ brand: "BMW", model: "X5", price: 58900 }) получится объект { brand: "BMW", model: "X5", price: 58900 }
// В результате вызова new Car({ brand: "Nissan", model: "Murano", price: 31700 }) получится объект { brand: "Nissan", model: "Murano", price: 31700 }

class Car {
    constructor({brand, model, price} = {}) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}

  console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 }));
  console.log(new Car({ brand: "BMW", model: "X5", price: 58900 }));
  console.log(new Car({ brand: "Nissan", model: "Murano", price: 31700 }));