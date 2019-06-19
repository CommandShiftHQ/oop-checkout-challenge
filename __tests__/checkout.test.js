const Checkout = require('../src/checkout');

const catalogue = [
  {
    barcode: 123,
    name: 'apple',
  },
  {
    barcode: 456,
    name: 'banana',
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
    it('has a basket', () => {
      expect(checkout).toHaveProperty('basket');
    });
    it('the basket is an array', () => {
      expect(checkout.basket).toEqual([]);
    });
  });
  describe('scan method', () => {
    it('takes a barcode and returns an item', () => {
      expect(checkout.scan(123)).toBeInstanceOf(Object);
    });
    it('returns the correct item', () => {
      expect(checkout.scan(123)).toBe(catalogue[0]);
    });
  });
  describe('add to basket method', () => {
    it('adds a scanned item to the basket', () => {
      checkout.addToBasket(catalogue[0]);
      expect(checkout.basket).toEqual([catalogue[0]]);
    });
  });
  describe('remove from basket method', () => {
    it('removes an item for the basket', () => {
      checkout.basket = catalogue;
      const banana = catalogue[1];
      checkout.removeItem(catalogue[0]);
      expect(checkout.basket).toEqual([banana]);
    });
  });
});
