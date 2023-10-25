// используя методы массивов сформировать массив из названий продуктов

// const form = products.map((el) => el.title)

const products = [
  { name: "Product A", price: 25 },
  { name: "Product B", price: 10 },
  { name: "Product C", price: 18 },
  { name: "Product D", price: 30 },
];

// Используем метод map() для извлечения названий продуктов
const productNames = products.map((product) => product.name);

//еще один вариант: const newProducts = products.map(({name}) => name);

console.log(productNames);
// Результат: ['Product A', 'Product B', 'Product C', 'Product D']

// используя методы массивов сформировать массив из объектов со свойствами title, price
// и discount

const products = [
  { name: "Product A", price: 25, discount: 5 },
  { name: "Product B", price: 10, discount: 0 },
  { name: "Product C", price: 18, discount: 4 },
  { name: "Product D", price: 30, discount: 0 },
];

const priceSum = products
  .filter(({ discount }) => discount === 0)
  .reduce((acc, { price }) => acc + price, 0);

console.log(priceSum);

// Используем метод map() для создания массива объектов с нужными свойствами
//   const productInfo = products.map(product => {
//     const { name, price, discount } = product;
//     return { title: name, price, discount };
//   });

//   console.log(productInfo);

// teachers var
//   const productInfo = products.map(({ name, price, discount }) => ({ title: name, price, discount }));

//   console.log(productInfo);

//   используя методы массивов сформировать массив с продуктами, у которых скидка равна 0

// Используем метод filter() для выбора продуктов с скидкой равной 0
const productsWithNoDiscount = products.filter(
  (product) => product.discount === 0
);
// const withoutDiscount = products.filter(({discount}) => discount === 0); //teachers var

console.log(productsWithNoDiscount);

// используя методы массивов сформировать массив с названиями продуктов,
//  у которых скидка равна 0

const productsDiscNull = products
  .filter(({ discount }) => dicsount === 0)
  .map(({ name }) => name);

console.log(productsDiscNull);

// используя методы массивов найти сумму всех цен товаров, у которых нет скидки

// Фильтруем товары без скидки
const productsWithoutDiscount = products.filter(
  (product) => product.discount === 0
);

// Находим сумму цен товаров без скидки
const totalPrice = productsWithoutDiscount.reduce(
  (sum, product) => sum + product.price,
  0
);

console.log(totalPrice);

//teachers var

const priceSum = products
  .filter(({ discount }) => dicsount === 0)
  .reduce((acc, { price }) => acc + price, 0);

console.log(priceSum);
