const container = document.querySelector('.container');

const coffees = [
  {
    name: 'Abon Sapi Original 80gr',
    image: 'img/products/abon1.jpg',
    description:
      'A savory beef floss product made from high-quality beef, perfect for topping rice or noodles.',
  },
  {
    name: 'Abon Sapi Original Kiloan',
    image: 'img/products/abon1.jpg',
    description:
      'A savory beef floss product made from high-quality beef, perfect for topping rice or noodles.',
  },
  {
    name: 'Nastar Keju - Raifa',
    image: 'img/products/cookie1.jpg',
    description:
      'A delicious cheese-filled pastry, perfect for snacking or as a dessert.',
  },
  {
    name: 'Pizza - Raifa',
    image: 'img/products/cookie2.jpg',
    description:
      'A savory pizza-flavored snack, perfect for parties or casual gatherings.',
  },
  {
    name: 'Kue Keju - Raifa',
    image: 'img/products/cookie3.jpg',
    description:
      'A delightful cheese-flavored cake, perfect for tea time or as a dessert.',
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
    <div id="menu" class="card">
      <img class="card--avatar" loading="lazy" src=${coffee?.image} alt="${coffee?.name}" />
      <h1 class="card--title">${coffee?.name}</h1>
      <p class="card--description">${coffee?.description}</p>
      <a class="card--link" href="//api.whatsapp.com/send?phone=6285190136122&text=assalamualaikum...mau%20tanya">Pesan</a>
    </div>
    `;
  });
  container.innerHTML = coffeeCards;
};

document.addEventListener('DOMContentLoaded', showCoffees);
