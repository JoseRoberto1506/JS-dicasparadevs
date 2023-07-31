// Uma string vazia sempre vai ser false
const x = '';

// 0 também é false
const y = 0;

// null e undefined também são false
const a = null;
const b = undefined;

// Uma lista vazia e um objeto vazio são true
const list = [];
const object = {};
console.log(!!object)

// Se você quer checar se uma lista tem algum valor, você sem que checar se a length é maior do que 0

console.log(!list);

// !! Checam o Truthy ou Falsy de uma variável
// !  Inverte o booleano