const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

const MAX_ITEMS = 10;

button.addEventListener("click", function () {
  const chapter = input.value.trim();

  // valida input vazio
  if (chapter === "") {
    alert("Please enter a Book and Chapter.");
    input.focus();
    return;
  }

  // valida limite máximo
  if (list.children.length >= MAX_ITEMS) {
    alert("You can only add up to 10 chapters.");
    input.value = "";
    input.focus();
    return;
  }

  // cria novo li
  const li = document.createElement("li");
  li.textContent = chapter;

  // cria botão delete
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "❌";
  deleteButton.setAttribute("aria-label", "Remove chapter");

  li.append(deleteButton);
  list.append(li);

  // limpa input
  input.value = "";
  input.focus();

  // remove item
  deleteButton.addEventListener("click", function () {
    list.removeChild(li);
    input.focus();
  });
});
