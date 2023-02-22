// Выполни рефакторинг класса Car. Добавь публичное статическое свойство 
// MAX_PRICE со значением 50000 - максимально допустимая цена автомобиля.

// Добавь сеттеру price проверку передаваемого значения параметра newPrice. 
// Если оно больше чем MAX_PRICE, сеттер ничего не делает, а если меньше или равно, то перезаписывает цену автомобиля.

// Объявлен класс Car
// У класса Car есть статическое свойство MAX_PRICE
// Значение статического свойства MAX_PRICE это число 50000
// У экземпляра нет свойства MAX_PRICE
// В классе Car объявлен геттер price
// В классе Car объявлен сеттер price
// Вызов сеттера price у экземпляра класса, со значением аргумента меньше чем значение MAX_PRICE, изменяет свойство #price
// Вызов сеттера price у экземпляра класса, со значением аргумента больше чем значение MAX_PRICE, не изменяет свойство #price

class Car {
  static MAX_PRICE = 50000;
  
  #MAX_PRICE;
  #price;

  constructor({ price }) {
    this.#price = price;
    this.#MAX_PRICE = 50000;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (newPrice <= this.#MAX_PRICE) {
    this.#price = newPrice;
    }
    return this.#price;
  }
}

const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000

 