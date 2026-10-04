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

  it('does not increase Aged Brie quality above 50', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 5, 50)]);

    const [item] = gildedRose.updateQuality();

    expect(item.quality).toBe(50);
  });
});
