const names = ["Felipe", "João", "Júlia", 10, false];

const joao = names[1];

names.push("Pedro");    // Adiciona no final da lista
names.unshift('Fernanda');  // Adiciona no início da lista

names.pop();    // Remove o último item da lsita
names.pop();
names.pop();

names[3] = "Gustavo";

const indexOfFelipe = names.indexOf("Felipe");

const sortedNames = names.sort();

const namesIsArray = Array.isArray(names)

console.log(names.length);
console.log(sortedNames);
console.log(namesIsArray);