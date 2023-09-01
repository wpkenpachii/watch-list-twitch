import Item from "./Item"
import { ECategoryItems } from "./Item.interface"

describe('Test item Entity', () => {
    it('should create an Item', () => {
        expect(() => {
            new Item(
                0,
                'Yu yu Hakusho',
                '@wpkenpachii',
                ECategoryItems.ANIME,
            )
        }).not.toThrowError();
    })

    it('should throw validation error', () => {
        expect(() => {
            new Item(
                0,
                'Yu Yu Hakusho',
                '@wpkenpachii',
                ECategoryItems.FILME,
                null,
                ''
            )
        }).toThrowError()
    })
})