import Item from "../Item/Item";
import { ECategoryItems } from "../Item/Item.interface";

export type ItemResponseDTO = Item & { index: number };

export default class Queue {
    private _channel: string;
    private _items: Item[] = [];

    constructor(channel: string, items: Item[] = []) {
        this._channel = channel;
        this._items = items;
        
        this.validate();
    }

    get list(): ItemResponseDTO[] {
        return this._items;
    }

    public listByCategory(category: ECategoryItems): ItemResponseDTO[] {
        return this._items.filter((item) => item.category === category);
    }

    public listByOwner(owner: string): ItemResponseDTO[] {
        return this._items.filter((item) => item.owner === owner);
    }

    public addItem(item: Item): void {
        this._items.push(item);
    }

    public replace(place_in_index: number, on_it_index: number): void {
        const max_index = Math.max(place_in_index, on_it_index)
        if (max_index > (this._items.length - 1)) throw new Error('Index out of queue length')
        const place_in_value    = this._items[place_in_index];
        const on_it_value       = this._items[on_it_index];
        this._items = this._items.map((item, index) => {
            if (index === on_it_index) {
                return place_in_value;
            } else if (index === place_in_index) {
                return on_it_value;
            }
            return item;
        })
    }

    private validate(): void {
        if(this._channel.trim() === '') {
            throw new Error('Channel name must not be empty')
        }
    }
}