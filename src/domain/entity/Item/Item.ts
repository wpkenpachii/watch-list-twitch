import { ECategoryItems } from "./Item.interface";

export default class Item {
    public  index: number;
    private _title: string;
    private _owner: string;
    private _category: ECategoryItems;
    private _seasons!: number;
    private _description!: string;
    private _timestamp!: number;

    constructor(index: number, title: string, owner: string, category: ECategoryItems, seasons: number | null = 1, description: string = '') {
        this.index = index;
        this._title = title;
        this._owner = owner;
        this._category = category;
        this._timestamp = (new Date()).getTime()
        if (this._category === ECategoryItems.FILME) {
            this._description = description;
        } else if ([ECategoryItems.ANIME, ECategoryItems.SERIE].includes(this._category) && seasons != null) {
            this._seasons = seasons;
        }

        this.validate();
    }

    get title(): string {
        return this._title;
    }

    get info(): string {
        return this._category === ECategoryItems.FILME ? `${this._title} ${this._description}` : `${this._title} ${this._seasons.toString()} seasons`;
    }

    get category(): string {
        return this._category;
    }

    get owner(): string {
        return this._owner;
    }

    get timestamp(): number {
        return this._timestamp;
    }

    private validate() {
        if (this._title === "") {
            throw new Error('Title must not be empty')
        }
        
        if (this._owner.replace(' ', '') === '') {
            throw new Error('Owner Must not be empty')
        }

        if (this._category === ECategoryItems.FILME && this._description!.trim() == '') {
            throw new Error('Description Must not be empty')
        }
    }
}