import { Item, GildedRose } from '@/gilded-rose';

describe('GildedRose.updateQuality', () => {
  it('does not change the item name', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
  });

  it('decreases sellIn and quality', () => {
    const gildedRose = new GildedRose([
      new Item('Elixir of the Mongoose', 5, 7),
    ]);

    const [item] = gildedRose.updateQuality();

    expect(item.sellIn).toBe(4);
    expect(item.quality).toBe(6);
  });

  it('decreases quality twice as fast after the sell-by date', () => {
    const gildedRose = new GildedRose([
      new Item('Elixir of the Mongoose', 0, 7),
    ]);

    const [item] = gildedRose.updateQuality();

    expect(item.sellIn).toBe(-1);
    expect(item.quality).toBe(5);
  });

  it('does not decrease quality below zero', () => {
    const gildedRose = new GildedRose([
      new Item('Elixir of the Mongoose', 0, 1),
    ]);

    const [item] = gildedRose.updateQuality();

    expect(item.quality).toBe(0);
  });

  it('decreases Conjured quality by two', () => {
    const gildedRose = new GildedRose([
      new Item('Conjured Mana Cake', 5, 7),
    ]);

    const [item] = gildedRose.updateQuality();

    expect(item.sellIn).toBe(4);
    expect(item.quality).toBe(5);
  });

  it('decreases Conjured quality by four after the sell-by date', () => {
    const gildedRose = new GildedRose([
      new Item('Conjured Mana Cake', 0, 7),
    ]);

    const [item] = gildedRose.updateQuality();

    expect(item.sellIn).toBe(-1);
    expect(item.quality).toBe(3);
  });

  it('does not decrease Conjured quality below zero', () => {
    const gildedRose = new GildedRose([
      new Item('Conjured Mana Cake', 0, 3),
    ]);

    const [item] = gildedRose.updateQuality();

    expect(item.quality).toBe(0);
  });

  it('does not change Sulfuras', () => {
    const gildedRose = new GildedRose([
      new Item('Sulfuras, Hand of Ragnaros', 5, 80),
    ]);

    const [item] = gildedRose.updateQuality();

    expect(item.sellIn).toBe(5);
    expect(item.quality).toBe(80);
  });

  it('increases Aged Brie quality', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 5, 7)]);

    const [item] = gildedRose.updateQuality();

    expect(item.sellIn).toBe(4);
    expect(item.quality).toBe(8);
  });

  it('increases Aged Brie quality by two after the sell-by date', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 0, 7)]);

    const [item] = gildedRose.updateQuality();

    expect(item.sellIn).toBe(-1);
    expect(item.quality).toBe(9);
  });

  it('does not increase Aged Brie quality above 50', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 5, 50)]);

    const [item] = gildedRose.updateQuality();

    expect(item.quality).toBe(50);
  });

  const initialBackstagePassQuality = 20;

  it.each([
    ['more than 10 days remain', 15, 21],
    ['10 days remain', 10, 22],
    ['9 days remain', 9, 22],
    ['6 days remain', 6, 22],
    ['5 days remain', 5, 23],
    ['4 days remain', 4, 23],
    ['the concert is today', 0, 0],
  ])(
    'updates Backstage pass quality when %s',
    (_scenario, sellIn, expectedQuality) => {
      const gildedRose = new GildedRose([
        new Item(
          'Backstage passes to a TAFKAL80ETC concert',
          sellIn,
          initialBackstagePassQuality
        ),
      ]);

      const [item] = gildedRose.updateQuality();

      expect(item.sellIn).toBe(sellIn - 1);
      expect(item.quality).toBe(expectedQuality);
    }
  );

  it('does not increase Backstage pass quality above 50', () => {
    const gildedRose = new GildedRose([
      new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49),
    ]);

    const [item] = gildedRose.updateQuality();

    expect(item.quality).toBe(50);
  });
});
