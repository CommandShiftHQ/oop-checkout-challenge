const Checkout = require('../src/checkout');

describe('checkout object', () => {
  let checkout;
  let catalogue;
  beforeEach(() => {
    catalogue = [
      {
        barcode: 123,
        name: 'apple',
        price: 1.00,
      },
      {
        barcode: 456,
        name: 'banana',
        price: 0.50,
      },
    ];
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
  describe('calculate total', () => {
    it('calculates the basket total', () => {
      checkout.basket = catalogue;
      expect(checkout.calculateTotal()).toBe(1.5);
    });
  });
});
