const form = document.querySelector(".input__area");
const inputValue = document.querySelector(".input__input");

// ToDoの追加ボタンがクリックされたときのイベント
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const todo = inputValue.value;
  // 空欄の場合、追加しない
  if (todo === "") return;

  // listの作成
  const ul = document.querySelector(".lists__list");
  const list = document.createElement("li");
  list.textContent = todo;
  // buttonの作成
  const button = document.createElement("button");
  button.setAttribute("class", "list-delete-btn");
  button.textContent = "削除";
  // listにbuttonを追加
  list.appendChild(button);
  ul.appendChild(list);

  // 送信後に入力欄を空にする
  inputValue.value = "";

  const listItem = document.querySelectorAll(".lists__list li");
  const listItemNumber = listItem.length;
  const listText = document.querySelector(".lists__area__text");
  document.querySelector("#todo-rest").textContent = listItemNumber;

  // ToDoがあるとき、テキストを空欄にする
  if (listItemNumber > 0) {
    listText.textContent = "";
  }
});

const lists = document.querySelector(".lists__list");

// ToDoの削除ボタンがクリックされたときのイベント
lists.addEventListener("click", function (e) {
  // イベントの発生源がlist-delete-btnだったとき
  if (e.target.className === "list-delete-btn") {
    // イベント発生源の親要素を格納
    const list = e.target.parentNode;
    lists.removeChild(list);

    const listItem = document.querySelectorAll(".lists__list li");
    const listItemNumber = listItem.length;
    const listText = document.querySelector(".lists__area__text");
    document.querySelector("#todo-rest").textContent = listItemNumber;

    // ToDoが0の時、テキストを表示
    if (listItemNumber === 0) {
      listText.textContent = "今日のToDoはありません。";
    }
  }
});
