/* eslint-disable func-names */
function Checkout(catalogueData) {
  this.catalogue = catalogueData;
}

Checkout.prototype = {
  scan: function (barcode) {
    return this.catalogue.find(item => item.barcode === barcode);
  },
};

module.exports = Checkout;
