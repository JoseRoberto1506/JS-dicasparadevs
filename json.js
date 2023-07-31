/* Quando estamos transitando dados entre um Front-End e um Back-End, não conseguimos enviar uma lista ou um objeto JavaScript, por exemplo. A gente envia esse objeto como JSON. */

const todos = [
    {
        id: 1,
        description: "Estudar programação",
        isCompleted: false,
    },
    {
        id: 2,
        description: "Ler",
        isCompleted: true,
    },
    {
        id: 3,
        description: "Treinar",
        isCompleted: true,
    }
];

// Converter a variável acima para string em formato JSON
const todosJSON = JSON.stringify(todos);
/* Quando a gente tiver mandando algo para um servidor a gente sempre vai dar o JSON.stringify, por que não conseguimos mandar um tipo de dado JavaScript padrão. */

// Transformando em lista
const todosList = JSON.parse(todosJSON);
/* Quando a gente tiver recebendo de um servidor, a gente vai receber em JSON também. Então a gente vai usar o JSON.parse para transformar essa string em JSON em um dado JavaScript que podemos manipular. */

console.log(todosList);

/* Quando a gente for mandar algo para uma API, vamos usar JSON. */