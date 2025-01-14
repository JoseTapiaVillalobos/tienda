$(document).ready(function () {
  $.get('http://fakestoreapi.com/products', function (data) {
    var productList = $('#product-list');

    var row = $('<div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4"></div>');
    productList.append(row);

    data.forEach(function (product, index) {
      var formattedPrice = formatPrice(product.price);
      var formattedDescription = formatDescription(product.description);

      var cardColumn = $('<div class="col"></div>');
      var card = $('<div class="card"></div>');
      var image = $('<img class="card-img-top" src="' + product.image + '" alt="' + product.title + '">');
      var cardBody = $('<div class="card-body"></div>');
      var title = $('<h5 class="card-title">' + product.title + '</h5>');
      var description = $('<p class="card-text">' + formattedDescription + '</p>');
      var price = $('<p class="card-price">' + formattedPrice + '</p>');
      var button = $('<a href="#" class="btn btn-primary">Ver</a>');

      cardBody.append(title);
      cardBody.append(description);
      cardBody.append(price);
      cardBody.append(button);
      card.append(cardBody);
      cardColumn.append(image);
      cardColumn.append(card);
      row.append(cardColumn);
    });
  });
});

function formatPrice(price) {
  return '$' + price.toFixed(2);
}

function formatDescription(description) {
  return description.substring(0, 100) + '...';
}

fetch('http://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    const cardsContainer = document.getElementById('cards-container');

    data.forEach(product => {
      const card = document.createElement('div');
      card.className = 'card';

      const image = document.createElement('img');
      image.src = product.image;
      card.appendChild(image);

      const title = document.createElement('h3');
      title.textContent = product.title;
      card.appendChild(title);

      const price = document.createElement('p');
      price.textContent = `$${product.price}`;
      card.appendChild(price);

      cardsContainer.appendChild(card);
    });
  })
  .catch(error => console.error('Error:', error));
