// Выполни рефакторинг класса Car так, чтобы свойство brand было приватным и 
// добавь два метода для публичного интерфейса, для чтения и изменения этого свойства.

// getBrand() - возвращает значение приватного свойства brand.
// changeBrand(newBrand) - изменяет значение приватного свойства brand на newBrand.
// Объявлен класс Car
// Свойство brand в классе Car объявлено приватным
// Конструктор класса принимает объект со свойствами brand, model и price
// В результате вызова new Car({ brand: "Audi", model: "Q3", price: 36000 }) получится объект { model: "Q3", price: 36000 }
// В результате вызова new Car({ brand: "bmw", model: "X5", price: 58900 }) получится объект { model: "X5", price: 58900 }
// В результате вызова new Car({ brand: "Nissan", model: "Murano", price: 31700 }) получится объект { model: "Murano", price: 31700 }
// У экземпляра нет публичного свойства brand
// Метод getBrand() возвращает значение приватного свойства brand.
// Метод changeBrand("Honda") изменяет значение приватного свойства brand на "Honda"

class Car {
  #brand;
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }
  getBrand() {
    return this.#brand;
  }

  changeBrand(newBrand) {
    this.#brand = newBrand;
  }

}

console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 }));
console.log(new Car({ brand: "bmw", model: "X5", price: 58900 }));
console.log(new Car({ brand: "Nissan", model: "Murano", price: 31700 }));
