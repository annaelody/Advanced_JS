 class GoodsItem {
  constructor(id_product, title, price) {
    this.id_product = id_product;
    this.title = title;
    this.price = price;
  }

  render() {
     return `<div id="${this.id_product}" class="goods-item" data-name="${this.title}" data-price="${this.price}">
      <h3>${this.title}</h3>
      <p>${this.price}</p>
      <button class="goods-item__add-to-cart">В корзину</button>
     </div>`;
  }
}

class GoodsList {
  constructor() {
    this.goods = [];
  }

  fetchGoods() {
    this.goods = [
      { id_product: 123, title: "Shirt", price: 150 },
      { id_product: 456, title: "Socks", price: 50 },
      { id_product: 789, title: "Jacket", price: 350 },
      { id_product: 987, title: "Shoes", price: 250 },
    ];
  }

  render() {
    let listHtml = "";

    this.goods.forEach((good) => {
      const goodItem = new GoodsItem(good.id_product, good.title, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector(".goods-list").innerHTML = listHtml;

    document.querySelectorAll('.goods-item__add-to-cart').forEach(function(button) {
      button.addEventListener('click', (event) => {
          let product = event.target.closest('div');
          let productId = product.id;
          let productName = product.dataset.name;
          let productPrice = product.dataset.price;

          let cartItem = new CartItem(productId, productName, productPrice);

          CartList.add(productId, cartItem);
      })
    });
  }

  costCalculation() {
    let cost = this.goods.reduce( (sum, listItem) => sum + listItem.price, 0 );
    console.log(cost);
  }

  total() {
    let sum = 0
    this.goods.forEach((entry) => {
      sum += entry.price
    });
  }
}

//Корзина
class CartList {
  constructor() {
      
  }

  static cartList = {};

  /**
   * Метод добавляет товар в корзину
   * @param {String} id Идентификатор товара
   * @param {String} product Объект с информацией о товаре
   */
  static add(id, product) {
      if ( this.cartList[id] ) {
        this.cartList[id].count++;
      } else {
        this.cartList[id] = product;
      }

      console.log(this.cartList);

      CartList.render();
  }

  /**
   * Метод удаляет товар из корзины по значению id
   * @param {String} id id товара
   */
  static remove(id) {
      id = String(id);
      if ( !this.cartList[id] ) return;

      if ( this.cartList[id].count == 1 ) {
          delete this.cartList[id];
      } else {
          this.cartList[id].count--;
      }

      CartList.render();
  }

  /**
   * Метод отрисовывает корзину
   */
  static render() {
      let cart = '';

      for (let id in this.cartList) {
          let item = this.cartList[id];
          cart += this.cartList[id].render();
      }
      
      document.querySelector('.cart-list').innerHTML = cart;

      document.querySelectorAll('.cart-item__remove-from-cart').forEach(function(button) {
          button.addEventListener('click', (event) => {
              let product = event.target.closest('div');
              let productId = product.id;
              CartList.remove(productId);
          })
      });
  }

  /**
   * Метод очищает корзину
   */
  static clear() {
      this.cartList = {};
  }

  static showCart() {
      console.log(this.cartList);
  }

  /**
   * Метод отправляет данные о заказе на сервер
   */
  static post() {
      // какой-то код
  }
}

//======================

class CartItem extends GoodsItem {
  constructor(id, name, price) {
      super(id, name, price);
      this.count = 1;
  }

  /**
   * Метод генерирует HTML-разметку товара корзины
   * @returns HTML-разметка товара корзины
   */
  render() {
      return `<div id="${this.id_product}" class="goods-item" data-name="${this.title}" data-price="${this.price}">
          <h3>${this.title}</h3>
          <p>${this.price * this.count}</p>
          <p>${this.count} шт.</p>
          <button class="cart-item__remove-from-cart">удалить</button>
      </div>`;
  }
}

//======================


const init = () => {
    const list = new GoodsList();
    list.fetchGoods();
    list.render();
    list.total();
    list.costCalculation()
};


window.onload = init;
