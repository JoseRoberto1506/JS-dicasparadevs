// Herança: herdar determinada classe em uma nova classe

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} made some noise!`);
  }
}

class Dog extends Animal {
  // Como a classe Dog extende da classe Animal, o constructor tem que receber os mesmos parâmetros que o constructor do Animal recebe
  constructor(name) {
    // super() chama o constructor da classe Animal
    super(name);
  }

  // Embora o Dog herde o speak() do Animal, como é algo mais específico a gente pode sobrescrever o speak()
  speak() {
    console.log(`${this.name} barked!`);
  }
}

const animal = new Animal("Simba");
const dog = new Dog("Bob");

animal.speak();
dog.speak();

// Quando extendemos uma classe, a classe que extende tem acesso a todos os métodos que a classe pai tem
