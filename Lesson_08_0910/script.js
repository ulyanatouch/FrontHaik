// const btn = document.querySelector('#btn');
// const targetElem = document.querySelector('.target');

// // btn.addEventListener('click', () => {
// //     btn.classList.add('active')
// // });

// // второй вариант, альтернативный
// // btn.addEventListener('click', () => btn.classList.add('active'))
// // btn.classList.add() - добавить класс
// // btn.classList.remove() - удалить класс
// // btn.classList.toggle() - если класс есть, то удалить его, в ином случае добавить

// // при нажатии на кнопку должен добавляться класс active

// // при нажатии на кнопку изменить наличие класса active

// btn.addEventListener('click', () => btn.classList.toggle('active'))

// //при нажатии на кнопку присвоить класс active элементу target

// btn.addEventListener('click', () => {
//     targetElem.classList.add('active');
//   });

// ====================================================================================

let count = 0;
const btn = document.querySelector("#btn");
const btn2 = document.querySelector("#btn2");
const countPar = document.querySelector(".value");
const btnNull = document.querySelector("#btnNull");
const savedCount = localStorage.getItem("count");

// value.innerText = count;

btn.addEventListener("click", () => {
  count = count + 1; //a++
  countPar.innerText = count;

  localStorage.setItem("count", count.toString());
});

// btn.addEventListener('click', () => console.log(++count));

btn2.addEventListener("click", () => {
  // count = count - 1;
  count -= 1;
  countPar.innerText = count;

  localStorage.setItem("count", count.toString());
});

btnNull.addEventListener("click", () => {
  count = 0;
  countPar.innerText = count;

  localStorage.setItem("count", count.toString());
});
