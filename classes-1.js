class Person {
    // Dentro do constructor colocamos o que a 'Person' vai ter de propriedade. Lembre-se que 'Person' vai imprimir um objeto
    // O constructor é executado sempre que a classe é instanciada com a keyword 'new'
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // Métodos da classe
  getFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }

  // Métodos estáticos são métodos que, para serem executados, não necessitam que a classe seja instanciada usando parâmetros
  // Em método estáticos nós não temos accesso aos 'this'
  static speak() {
    console.log("Hello world!");
  }
}

// Para instanciar uma classe usamos a keyword 'new'
const person = new Person("Jane", "Doe", 40);

console.log(person);

Person.speak();
