// 1.достать текст из параграфа и вывести его в консоль

const elem = document.querySelector('p')
elem.innerText = 'New text'
console.log(elem.innerText); //(elem.textContent) 