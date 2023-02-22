// Добавь классу Car два метода.

// getPrice() - возвращает значение свойства price из объекта который его будет вызывать.
// changePrice(newPrice) - обновляет значение свойства price у объекта который его будет вызывать на newPrice.
// В классе Car объявлен метод getPrice
// Метод getPrice возвращает значение свойства price экземпляра класса который его вызывает
// В классе Car объявлен метод changePrice
// Метод changePrice изменяет значение свойства price экземпляра класса который его вызывает

class Car {
    constructor({ brand, model, price } = {}) {
      this.brand = brand;
      this.model = model;
      this.price = price;
    }

    getPrice() {
        return this.price;
    }

    changePrice(newPrice){
        return this.price = newPrice;
    }
  }
