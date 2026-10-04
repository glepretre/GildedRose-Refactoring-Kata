import { execSync } from 'node:child_process';
import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose Approval', () => {
  it('matches an ordinary item after one day', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();

    expect(items).toMatchSnapshot();
  });

  it('matches the inventory over 30 days', () => {
    const consoleOutput = execSync(
      'ts-node test/golden-master-text-test.ts 30',
      { encoding: 'utf-8' }
    );

    expect(consoleOutput).toMatchSnapshot();
  });
});
