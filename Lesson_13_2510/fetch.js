const root = document.querySelector("#root"); // Находим корневой элемент в HTML с id 'root'
const loadButton = document.querySelector(".load"); // Находим кнопку для загрузки поста с классом 'load'
let postId = 1; // Устанавливаем начальное значение ID поста

// Функция для отображения данных поста
function render({ title, body }) {
  // Создаем контейнер для поста
  const container = document.createElement("div");
  const titleElem = document.createElement("p");
  const bodyElem = document.createElement("p");

  // Задаем текст для заголовка и тела поста
  titleElem.innerText = title;
  bodyElem.innerText = body;

  // Добавляем заголовок и тело в контейнер
  container.append(titleElem, bodyElem);

  // Очищаем содержимое корневого элемента перед добавлением нового поста
  root.innerText = "";

  // Добавляем контейнер с постом в корневой элемент
  root.append(container);

  // console.log(title);
  // console.log(body);
}

// Добавляем обработчик события клика на кнопке
loadButton.addEventListener("click", () => {
  postId++; // Инкрементируем ID для загрузки следующего поста

  // Формируем новую ссылку с обновленным ID для загрузки следующего поста
  const link = `https://jsonplaceholder.typicode.com/posts/${postId}`;

  // Отправляем запрос по указанной ссылке
  fetch(link)
    .then((resp) => resp.json()) // Преобразуем ответ в JSON формат
    .then(render) // Вызываем функцию render для отображения данных поста
    .catch((error) => {
      // В случае ошибки (например, пост с таким ID не найден), выводим сообщение
      root.innerHTML = "Пост не найден";
    });
});
