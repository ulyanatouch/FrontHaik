// const arr = [12, 4, 6, 3, 2, 5, 23, 6, 32, 1, 5];

// arr.forEach(elem => {
//     if (typeof elem === 'number') {
//       console.log(elem);
//     }
//   });

//  используя методы масивов вывести все числа по одному в консоль

//   const arr = [12, 4, 6, 3, 2, 5, 23, 6, 32, 1, 5];
//   arr.forEach(elem => console.log(elem));

// используя методы массивов вывести все положительные числа по одному в консоль
//   const arr = [12, 4, 6, 3, 2, 5, 23, 6, 32, 1, 5];
//   arr.forEach(elem => {
//     if (typeof elem === 'number' && elem > 0) {
//       console.log(elem);
//     }
//   });

//   ---------------------
const arr = [12, -4, -6, 3, -2, 5, 23, -6, 32, -1, -5];
arr.forEach((elem) => {
  if (elem > 0) {
    console.log(elem);
  }
});

//   через тернарный оператор

arr.forEach((elem) => (0 ? console.log(elem) : ""));

// используя методы массивов сформировать массив, который содержит только положительные числа

const arr = [12, -4, -6, 3, -2, 5, 23, -6, 32, -1, -5];
const newArr = arr.filter((elem) => elem > 0);

console.log(newArr);

// сформировать новый массив на основе arr в котором все отрицательные значения будут заменены на положительные
const arr = [12, -4, -6, 3, -2, 5, 23, -6, 32, -1, -5];
const newArr = arr.map((elem) => Math.abs(elem));

console.log(newArr);

// используя методы массивов увеличить каждое значение массива на значение индекса

// первое значение массива не увеличивается
// второе значение массива на 1
// третье значение массива на 2
// четвертое значение массива на 3
// пятое значение массива на 4

const arr = [10, 20, 30, 40, 50];

const modifiedArray = arr.map((value, index) => {
  return value + index;
});

// ------------------------------------------

console.log(modifiedArray);

const result = arr.map((elem, index) => elem + index);
console.log(arr);
console.log(result);

// используя методы массивов сформировать новый массив, который содержит числа
// с четным индексом

const arr = [10, 20, 30, 40, 50];

const evenIndexArray = arr.filter((value, index) => index % 2 === 0);

console.log(evenIndexArray);

// сформировать массив из чисел, которые больше -10 и меньше 10

const arr = [-15, -5, 0, 5, 10, 15, 20, -20];

const filteredArray = arr.filter((value) => value > -10 && value < 10);

console.log(filteredArray);
