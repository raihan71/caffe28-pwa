const container = document.querySelector('.container');

const coffees = [
  {
    name: 'Espresso',
    image: 'img/products/coffee1.jpg',
    description:
      'A strong and bold coffee brewed by forcing hot water through finely-ground coffee beans.',
  },
  {
    name: 'Latte',
    image: 'img/products/coffee2.jpg',
    description:
      'A creamy coffee drink made with espresso and steamed milk, often topped with foam.',
  },
  {
    name: 'Cappuccino',
    image: 'img/products/coffee3.jpg',
    description:
      'A rich coffee drink made with equal parts espresso, steamed milk, and milk foam.',
  },
  {
    name: 'Americano',
    image: 'img/products/coffee4.jpg',
    description:
      'A simple coffee drink made by diluting espresso with hot water.',
  },
  {
    name: 'Mocha',
    image: 'img/products/coffee5.jpg',
    description:
      'A chocolate-flavored variant of a latte, made with espresso, steamed milk, and chocolate syrup.',
  },
  {
    name: 'Macchiato',
    image: 'img/products/coffee6.jpg',
    description:
      'An espresso coffee drink with a small amount of steamed milk or milk foam.',
  },
];

const showCoffees = () => {
  let coffeeCards = '';
  coffees.forEach((coffee) => {
    coffeeCards += `
    <div class="card">
      <img class="card--avatar" loading="lazy" src=${coffee?.image} alt="${coffee?.name}" />
      <h1 class="card--title">${coffee?.name}</h1>
      <p class="card--description">${coffee?.description}</p>
      <a class="card--link" href="#">Order</a>
    </div>
    `;
  });
  container.innerHTML = coffeeCards;
};

document.addEventListener('DOMContentLoaded', showCoffees);
