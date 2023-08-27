import IConn from "../IConn";

type Database = {
    channel: string,
    redeems: any[]
}

export default class Conn implements IConn {
    static db: Database[] = [];
    connection() {
        throw new Error("Method not implemented.");
    }
    query() {
        throw new Error("Method not implemented.");
    }
    close(): void {
        throw new Error("Method not implemented.");
    }

}