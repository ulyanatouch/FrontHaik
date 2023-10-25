const users = [
  { id: 1, name: "Анатолий", age: 31, salary: 3200, gender: "m" },
  { id: 2, name: "Ольга", age: 31, salary: 3200, gender: "f" },
  { id: 3, name: "Иван", age: 31, salary: 3200, gender: "m" },
  { id: 4, name: "Ирина", age: 31, salary: 3200, gender: "f" },
  { id: 5, name: "Степан", age: 31, salary: 3200, gender: "m" },
]; //  используя методлы массивов вывести имена пользователей в консоль

users.forEach((user) => {
  console.log(user.name);
});

// users.forEach(user => {
//     const {name} = user;
//     console.log(user.name);
// });

// ==============================================

// users.forEach(({name}) => console.log(name));

// =======================================================================

//  используя методы массивов сформировать новый массив, который содержит объекты со свойствами id, name, salary
const users = [
  { id: 1, name: "Анатолий", age: 31, salary: 3200, gender: "m" },
  { id: 2, name: "Ольга", age: 31, salary: 3200, gender: "f" },
  { id: 3, name: "Иван", age: 31, salary: 3200, gender: "m" },
  { id: 4, name: "Ирина", age: 31, salary: 3200, gender: "f" },
  { id: 5, name: "Степан", age: 31, salary: 3200, gender: "m" },
];
const newArray = users.map((user) => ({
  id: user.id,
  name: user.name,
  salary: user.salary,
}));

console.log(newArray);

//   -----------------------------------
const newArray = users.map(({ id, name, salary }) => {
  return {
    id: id,
    name: name,
    salary: salary,
  };
});

console.log(newArray);

// используя методы массивов сформировать массив из пользователей мужского пола

const maleUsers = users.filter((user) => user.gender === "m");
console.log(maleUsers);

const maleUsers = users.filter(({ gender }) => gender === "m");
