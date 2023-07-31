let index = 0;

while (index < 10) {
    console.log("index é menor do que 10");
    // index = index + 1;
    // index += 1;

    // Mesma coisa que acima
    index++;
}

const person = {
    name: "Jane",
    age: 21,
}


// Esse loop não é muito performático, o JavaScript não lida muito bem com ele
for (property in person) {
    console.log(person[property]);
}
