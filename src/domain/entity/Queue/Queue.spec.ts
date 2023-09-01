import Item from "../Item/Item"
import { ECategoryItems } from "../Item/Item.interface";
import Queue from "./Queue"

describe('Test Queue', () => {
    let channel: string;
    let owner : string;
    let items: Item[];

    beforeEach(() => {
        channel = 'sirzarakikenpachi';
        owner = '@wpkenpachii';
        items = [
            new Item(0, 'Yu Yu Hakusho', owner, ECategoryItems.ANIME, 10),
            new Item(1, 'Ilha do Medo', owner, ECategoryItems.FILME, null, '2010 ‧ Suspense/Drama ‧ 2h 18m')
        ];
    })
    
    it('should create queue', () => {
        expect(() => {
            new Queue(channel, items);
        }).not.toThrowError()
    })

    it('should throw validation error', () => {
        channel = ' ';
        expect(() => {
            new Queue(channel, items);
        }).toThrowError()
    })

    it('should list items', () => {
        const queue = new Queue(channel, items);
        expect(queue.list).toStrictEqual(items);
    })

    it('should list items by category', () => {
        const queue = new Queue(channel, items);
        expect(queue.listByCategory(ECategoryItems.FILME)).toStrictEqual([items[1]]);
    })

    it('should list items by owner', () => {
        owner = '@another';
        items.push(
            new Item(2, 'Hells Paradise', '@another', ECategoryItems.ANIME, 1)
        )
        const queue = new Queue(channel, items);
        expect(queue.listByOwner(owner)).toStrictEqual([items[2]]);
    })
})