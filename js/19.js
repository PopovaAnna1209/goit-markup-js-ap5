// Добавь классу Admin метод constructor, который принимает один параметр - 
// объект настроек с двумя свойствами email и accessLevel. Добавь классу 
// Admin публичное свойство accessLevel, значение которого будет передаваться при вызове конструктора.

// Чтобы показать как будет использоваться класс Admin мы добавили инициализацию экземпляра под объявлением класса.

// Объявлен класс Admin
// Класс Admin наследует от класса User
// У класса Admin есть публичное статическое свойство AccessLevel
// У класса Admin есть метод constructor с параметром в виде объекта {email, accessLevel}
// У класса Admin в конструкторе для свойства email используется обращение к конструктору родительского класса
// Обращение к Admin.AccessLevel.BASIC возвращает строку "basic"
// Обращение к Admin.AccessLevel.SUPERUSER возвращает строку "superuser"

class User {
    email;
  
    constructor(email) {
      this.email = email;
    }
  
    get email() {
      return this.email;
    }
  
    set email(newEmail) {
      this.email = newEmail;
    }
  }
  
  class Admin extends User {
   
    static AccessLevel = {
      BASIC: "basic",
      SUPERUSER: "superuser",
    };
  
    constructor({email, accessLevel}) {
        super(email);
        this.accessLevel = accessLevel;
        
  }
}

  const mango = new Admin({
    email: "mango@mail.com",
    accessLevel: Admin.AccessLevel.SUPERUSER,
  });
  
  console.log(mango.email); // "mango@mail.com"
  console.log(mango.accessLevel); // "superuser"
 

