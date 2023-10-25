let users = [
  { id: 1, first_name: "Толя", last_name: "Повар", age: 30, gender: "m" },
  { id: 2, first_name: "Степан", last_name: "Грибоед", age: 35, gender: "m" },
  { id: 3, first_name: "Зоя", last_name: "Романова", age: 27, gender: "f" },
  { id: 4, first_name: "Трофей", last_name: "Тимофей", age: 29, gender: "m" },
  { id: 5, first_name: "Кот", last_name: "Митрофан", age: 37, gender: "m" },
];

const rootEl = document.querySelector("#root");

function addCard({ id, first_name, last_name, age, gender }) {
  // Создаем новый элемент div
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  // Создаем два элемента p для отображения first_name и last_name
  const firstNameP = document.createElement("p");
  const lastNameP = document.createElement("p");
  const ageP = document.createElement("p");
  const deleteButton = document.createElement("button");
  const genders = {
    m: "#3498db",
    f: "#fd79a8",
  };

  cardDiv.style.backgroundColor = genders[gender];
  // Устанавливаем текст для элементов p на основе переданного объекта
  firstNameP.innerText = first_name;
  lastNameP.innerText = last_name;
  ageP.innerText = `age:${age}`;
  deleteButton.innerText = "Удалить";
  deleteButton.classList.add("delete-button");

  deleteButton.addEventListener("click", () => {
    users = users.filter((user) => user.id !== id);
    rerender();
  });

  // Добавляем элементы p в div
  cardDiv.append(firstNameP, lastNameP, ageP, deleteButton);
  return cardDiv;
}

function message() {
  const messageEl = document.createElement("p");
  messageEl.innerText = "Пользователей нет";
  messageEl.style.fontWeight = "bold";
  return messageEl;
}

function calculation() {
  const elem = document.createElement("p");
  const usersCount = users.length; // Подсчитываем количество пользователей
  elem.innerText = `Кол-во пользователей: ${usersCount}`;
  // возможен еще такой вариант: elem.innerTest = `Кол-во пользователей: ${users.length}`
  elem.style.fontWeight = "bold";
  return elem;
}

function rerender() {
  rootEl.innerText = "";
  if (users.length === 0) {
    rootEl.append(message());
  } else {
    const cards = users.map((user) => addCard(user)); // проходимся по массиву
    rootEl.append(...cards); // можно просто через запятую добавить calculation это тоже будет работать
    rootEl.append(calculation());
  }
}

rerender();
