export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      this.updateItem(item);
    }

    return this.items;
  }

  private updateItem(item: Item): void {
    if (item.name === 'Sulfuras, Hand of Ragnaros') {
      return;
    }

    if (item.name === 'Aged Brie') {
      this.updateAgedBrie(item);
      return;
    }

    if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
      this.updateBackstagePass(item);
      return;
    }

    if (item.quality > 0) {
      item.quality = item.quality - 1
    }
    item.sellIn = item.sellIn - 1;
    if (item.sellIn < 0 && item.quality > 0) {
      item.quality = item.quality - 1
    }
  }

  private updateAgedBrie(item: Item): void {
    if (item.quality < 50) {
      item.quality = item.quality + 1
    }
    item.sellIn = item.sellIn - 1;
    if (item.sellIn < 0 && item.quality < 50) {
      item.quality = item.quality + 1
    }
  }

  private updateBackstagePass(item: Item): void {
    if (item.quality < 50) {
      item.quality = item.quality + 1
      if (item.sellIn < 11 && item.quality < 50) {
        item.quality = item.quality + 1
      }
      if (item.sellIn < 6 && item.quality < 50) {
        item.quality = item.quality + 1
      }
    }
    item.sellIn = item.sellIn - 1;
    if (item.sellIn < 0) {
      item.quality = 0;
    }
  }
}
