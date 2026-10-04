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

    if (item.name.startsWith('Conjured')) {
      this.updateConjuredItem(item);
      return;
    }

    const degradation = item.sellIn <= 0 ? 2 : 1;

    this.decreaseQuality(item, degradation);
    item.sellIn -= 1;
  }

  private updateAgedBrie(item: Item): void {
    const improvement = item.sellIn <= 0 ? 2 : 1;

    this.increaseQuality(item, improvement);
    item.sellIn -= 1;
  }

  private updateBackstagePass(item: Item): void {
    if (item.sellIn <= 0) {
      item.quality = 0;
    } else if (item.sellIn <= 5) {
      this.increaseQuality(item, 3);
    } else if (item.sellIn <= 10) {
      this.increaseQuality(item, 2);
    } else {
      this.increaseQuality(item, 1);
    }
    item.sellIn -= 1;
  }

  private updateConjuredItem(item: Item): void {
    const degradation = item.sellIn <= 0 ? 4 : 2;

    this.decreaseQuality(item, degradation);
    item.sellIn -= 1;
  }

  private increaseQuality(item: Item, amount: number): void {
    if (item.quality < 50) {
      item.quality = Math.min(50, item.quality + amount);
    }
  }

  private decreaseQuality(item: Item, amount: number): void {
    if (item.quality > 0) {
      item.quality = Math.max(0, item.quality - amount);
    }
  }
}
