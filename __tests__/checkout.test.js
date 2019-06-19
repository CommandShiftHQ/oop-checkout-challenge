const Checkout = require('../src/checkout');

const catalogue = [
  {
    barcode: 123,
    name: 'apple',
  },
];

describe('checkout object', () => {
  let checkout;
  beforeEach(() => {
    checkout = new Checkout(catalogue);
  });
  describe('object constructor', () => {
    it('is an object', () => {
      expect(checkout).toBeInstanceOf(Object);
    });
    it('has a catalogue', () => {
      expect(checkout).toHaveProperty('catalogue');
    });
  });
  describe('scan method', () => {
    it('takes a barcode and returns an item', () => {
      expect(checkout.scan(123)).toBeInstanceOf(Object);
    });
  });
});
