let inputWord;
let newDef;

function readInput() {
  const inputElement = document.getElementById('userInput');
  const inputText = inputElement.value;
  inputWord = inputText;
}

var dict = {
  "dictionar": "a book or electronic resource that lists the words of a language...",
  "key": "a small piece of shaped metal with incisions cut to fit the wards of a particular lock..."
};

  function checkInputWord() {
    const buttonContainer = document.getElementById("buttonContainer");
    const buttonHTMLNewWord = `
  <br>
  <div>
  <button type="button" class="btn btn-primary" id="button1">NEW WORD</button>
  </div>
  <br>`;
  const buttonHTMLExistingWord = `
  <br>
  <div>
  <button type="button" class="btn btn-primary" id="button1">EXISTING WORD: </button>
  </div>
  <br>`;

  if (dict.hasOwnProperty(inputWord)) {
    buttonContainer.innerHTML = buttonHTMLExistingWord;
    showWordDefinitionDict(inputWord);
  } else if (localStorage.getItem(inputWord)) {
    buttonContainer.innerHTML = buttonHTMLExistingWord;
    showWordDefinitionLocal(inputWord);
  } else {
    buttonContainer.innerHTML = buttonHTMLNewWord;
    showNewWordContainer();
  } 
}

function showWordDefinitionLocal() {
  const wordDefContainer = document.getElementById("textContainer");
  const wordExplanation = localStorage.getItem(inputWord);
  const fiedWordExplanation = `
<div class="card">
<div class="card-body">
  <p><em>${(wordExplanation)}</em></p>
  </div>
</div>`;
  wordDefContainer.innerHTML = fiedWordExplanation;
}

function showWordDefinitionDict() {
  const wordDefContainer = document.getElementById("textContainer");
  const wordExplanation = dict[inputWord];
  const fiedWordExplanation = `
<div class="card">
<div class="card-body">
  <p><em>${(wordExplanation)}</em></p>
  </div>
</div>`;
  wordDefContainer.innerHTML = fiedWordExplanation;
}

function showNewWordContainer() {
  const wordDefContainer = document.getElementById("textContainer");
  const fiedNewDefinition = `
<div class="input-group mb-3">
  <button class="btn btn-outline-primary" type="button" id="button-addon2">Save New word definition</button>
  <input type="text" class="form-control" placeholder="Please input new word definition" aria-label="Example text with button addon" aria-describedby="button-addon2" id="userDefinition">
</div>`;

  wordDefContainer.innerHTML = fiedNewDefinition;
  readNewWordDefinition();
}

function readNewWordDefinition() {
  const defElement = document.getElementById('userDefinition');
  const defText = defElement.value;
  newDef = defText;
  document.getElementById('button-addon2').addEventListener('click', function() {
    saveNewWordDefinition();
  })
}

function saveNewWordDefinition() {
  readNewWordDefinition();
  localStorage.setItem(`${inputWord}`, newDef);
  displaySaveMessage();
}

function displaySaveMessage() {
  const saveElement = document.getElementById('saveMessage');
  const saveMessage = `
  <div class="alert alert-success" role="alert">
  New word definition saved!
</div>`;
  saveElement.innerHTML = saveMessage;
  clearInterval.buttonHTMLNewWord;
}

  document.getElementById('button-addon1').addEventListener('click', function() {
    readInput()
    checkInputWord()
  });
