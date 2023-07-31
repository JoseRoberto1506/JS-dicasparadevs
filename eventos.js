/* Eventos são basicamente formas que nós temos de executar determinada ação quando alguma ação/coisa acontece.
Por exemplo, executar um cóidgo quando um usuário clica em um botão */

const submitButton = document.querySelector("#submit-button");
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");

const items = document.querySelector(".items");
const body = document.querySelector("body");

submitButton.addEventListener("click", function (event) {
  event.preventDefault(); // Impedir o coomportamento padrão do submit button (enviar o formulário)

  const nameValue = nameInput.value;
  const emailValue = emailInput.value;

  if (nameValue === "" || emailValue === "") {
    return alert("Please fill out all the fields!");
  }

  myForm.style.background = "red";
  items.firstElementChild.textContent = nameValue;
  items.children[1].textContent = emailValue;

  body.style.background = "white";
});

// nameInput.addEventListener("change", function (event) {
//   console.log(event.target.value); // Dessa forma a gente consegue usar para acessar o valor de um input quando a gente escuta por uma mudança diretamente nele
// });
