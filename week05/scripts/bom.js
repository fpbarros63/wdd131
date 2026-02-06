const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

const MAX_ITEMS = 10;
const STORAGE_KEY = "myFavBOMList";

// 1) carrega do localStorage (ou array vazio se não existir)
let chaptersArray = getChapterList() || [];

// 2) popula a lista na tela ao carregar a página
chaptersArray.forEach((chapter) => {
  displayList(chapter);
});

// 3) evento do botão: valida, exibe, adiciona no array, salva no localStorage
button.addEventListener("click", function () {
  const chapter = input.value.trim();

  if (chapter === "") {
    alert("Please enter a Book and Chapter.");
    input.focus();
    return;
  }

  // limite máximo levando em conta o array (mais seguro do que list.children)
  if (chaptersArray.length >= MAX_ITEMS) {
    alert("You can only add up to 10 chapters.");
    input.value = "";
    input.focus();
    return;
  }

  displayList(chapter);
  chaptersArray.push(chapter);
  setChapterList();

  input.value = "";
  input.focus();
});

// monta e exibe o <li> + botão delete (usado no load e ao adicionar)
function displayList(item) {
  const li = document.createElement("li");
  li.textContent = item;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "❌";
  deleteButton.setAttribute("aria-label", "Remove chapter");
  deleteButton.classList.add("delete");

  li.append(deleteButton);
  list.append(li);

  deleteButton.addEventListener("click", function () {
    list.removeChild(li);
    deleteChapter(li.textContent); // vem com "item❌" porque li.textContent inclui o botão
    input.focus();
  });
}

// salva o array no localStorage como JSON string
function setChapterList() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(chaptersArray));
}

// pega do localStorage e converte de volta para array
function getChapterList() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY));
}

// remove do array + atualiza localStorage
function deleteChapter(chapter) {
  // remove o último caractere (o ❌)
  chapter = chapter.slice(0, chapter.length - 1);

  // filtra tudo, exceto o capítulo removido
  chaptersArray = chaptersArray.filter((item) => item !== chapter);

  setChapterList();
}
