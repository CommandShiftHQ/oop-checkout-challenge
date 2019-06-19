/* eslint-disable func-names */
function Checkout(catalogueData) {
  this.catalogue = catalogueData;
  this.basket = [];
}

Checkout.prototype = {
  scan: function (barcode) {
    return this.catalogue.find(item => item.barcode === barcode);
  },
  addToBasket: function (item) {
    this.basket.push(item);
  },
  removeItem: function (itemToRemove) {
    const item = this.basket.indexOf(itemToRemove);
    this.basket.splice(item, 1);
  },
  calculateTotal: function() {
    const reducer = (accumulator, currentValue) => {
      return accumulator + currentValue.price;
    };
    return this.basket.reduce(reducer, 0);
  },
};

module.exports = Checkout;
