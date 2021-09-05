const products = [
  {id: 1, title: 'Notebook', price: 1000},
  {id: 2, title: 'Mouse', price: 100},
  {id: 3, title: 'Keyboard', price: 250},
  {id: 4, title: 'Gamepad', price: 150},
]

const renderProduct = (title = 'empty', price = 0) => `<div class="product-item"><h3>${title}</h3><p>${price}</p><button class="by-btn">Добавить</button></div>`

const renderProducts = list => {
  let productList = list.map(item => renderProduct(item.title, item.price))

  document.querySelector('.products-list').innerHTML = productList.join(" ")
}

renderProducts(products);
