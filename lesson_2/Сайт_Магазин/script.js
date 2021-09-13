class ProductsItem {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
  render() {
    return `<div class="product-item"><h3>${this.title}</h3><p>${this.price}</p><button class="by-btn">Добавить</button></div>`;
  }
}

class ProductsList {
  constructor() {
    this.items = [];
  }

  fetchGoods() {
    this.items = [
      {id: 1, title: 'Notebook', price: 1000},
      {id: 2, title: 'Mouse', price: 100},
      {id: 3, title: 'Keyboard', price: 250},
      {id: 4, title: 'Gamepad', price: 150},
    ];
  }

  render() {
    let listHtml = "";
    this.items.forEach((item) => {
      const productItem = new ProductsItem(item.title, item.price);
      listHtml += productItem.render();
    });
    document.querySelector(".products-list").innerHTML = listHtml;
  }

  total() {
    let sum = 0
    this.items.forEach((entry) => {
      sum += entry.price
    });
  }
}

class emptyClassForBasket {
  clearBasket() {

  }
}

class emptyClassForBasketsElement {
  deleteBasketsElement() {
    
  }
}

const init = () => {
    const list = new ProductsList();
    list.fetchGoods();
    list.render();
    list.total();
    list.total();
};

window.onload = init;