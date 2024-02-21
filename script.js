let inputWord;
let newDef;

function readInput() {
  let inputElement = document.getElementById('userInput');
  let inputText = inputElement.value;
  inputWord = inputText;
}

let dict = {
  "dictionar": "a book or electronic resource that lists the words of a language...",
  "key": "a small piece of shaped metal with incisions cut to fit the wards of a particular lock..."
};

function checkInputWord() {
  let messageArea = document.getElementById("message-area");
  let newWord = "is new";
  let existingWord = "is defined as"

  if (dict.hasOwnProperty(inputWord)) {
    messageArea.textContent = existingWord;
    showWordDefinitionDict(inputWord);
  } else if (localStorage.getItem(inputWord)) {
    messageArea.textContent = existingWord;
    showWordDefinitionLocal(inputWord);
  } else {
    messageArea.textContent = newWord;
    showNewWordContainer();
  } 
}

function showWordDefinitionLocal() {
  let wordDefContainer = document.getElementById("textContainer");
  let wordExplanation = localStorage.getItem(inputWord);
  let fiedWordExplanation = wordExplanation;
  wordDefContainer.textContent = fiedWordExplanation;
}

function showWordDefinitionDict() {
  let wordDefContainer = document.getElementById("textContainer");
  let wordExplanation = dict[inputWord];
  let fiedWordExplanation = wordExplanation;
  wordDefContainer.textContent = fiedWordExplanation;
}

function showNewWordContainer() {
  let wordDefContainer = document.getElementById("newWordDefArea");
  wordDefContainer.style.display = 'block';
}

function readNewWordDefinition() {
  let defElement = document.getElementById('userDefinition');
  let defText = defElement.value;
  newDef = defText;
}

function saveNewWordDefinition() {
  readInput();
  readNewWordDefinition();
  localStorage.setItem(`${inputWord}`, newDef);
}

function displaySaveMessage() {
  let saveElement = document.getElementById('saveMessage');
  saveElement.textContent = "Definition saved succesfuly";
  saveElement.style.display = 'block';
  setTimeout(function() {
    location.reload();
  }, 2000);
}

document.getElementById('button-addon1').addEventListener('click', function() {
  readInput()
  checkInputWord()
});
document.getElementById('save_button').addEventListener('click', function() {
  saveNewWordDefinition();
  displaySaveMessage();
})
