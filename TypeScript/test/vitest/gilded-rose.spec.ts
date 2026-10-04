import { Item, GildedRose } from '@/gilded-rose';

describe('GildedRose.updateQuality', () => {
  it('does not change the item name', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
  });
});
