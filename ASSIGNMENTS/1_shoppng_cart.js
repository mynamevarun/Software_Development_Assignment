class Item {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

class ShoppingCart {
  constructor() {
    this.cart = [];
    this.total = 0;
  }

  addToCart(product) {
    if (!this.inCart(product)) this.cart.push(product);
  }

  increaseQuantity(name) {
    this.cart.forEach(item => {
      if (item.name == name) {
        item.quantity += 1;
      }
    });
  }

  decreaseQuantity(name) {
    this.cart.forEach(item => {
      if (item.name == product.name) {
        item.quantity -= 1;
      }
    });
  }

  removeFromCart(name) {
    if (this.inCart(name)) {
      var index = -1;
      for (let i = 0; i < n; i++) {
        if (this.cart[i].name == name) {
          index = i;
          break;
        }
      }
      this.cart.splice(i, 1);
    }
  }

  displayCart() {
    this.cart.forEach(item => {
      console.log("ITEM IS", item);
    });
  }

  generateBill() {
    this.cart.forEach(item => {
      this.total = this.total + item.price * item.quantity;
    });
    console.log("Your bill is of", this.total, "Rupees only");
  }

  inCart(name) {
    for (let item in this.cart) {
      if (item.name == name) return true;
    }
  }
}
