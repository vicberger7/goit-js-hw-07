// const categories = document.querySelector('#categories');
// const items = categories.querySelectorAll('.item');

// console.log(`Number of categories: ${items.length}`);

// items.forEach(item => {
//   const title = item.querySelector('h2').textContent;
//   const itemsCount = item.querySelectorAll('li').length;

//   console.log(`Category: ${title}`);
//   console.log(`Elements: ${itemsCount}`);
// });

// let list = [
//   'Cat',
//   'Hamster',
//   'Horse',
//   'Parrot',
//   'Bread',
//   'Parsley',
//   'Cheese',
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Node.js',
// ];

// let lis = document.getElementsByTagName('li');

// Array.from(lis).forEach(li => {
//   if (list.includes(li.innerText)) {
//     li.classList.add('item-unit');
//   }
// });

const categories = document.querySelector('#categories');
const items = categories.querySelectorAll('.item');

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
  const title = item.querySelector('h2').textContent;
  const itemsCount = item.querySelectorAll('li').length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${itemsCount}`);
});
