import { Channel } from "diagnostics_channel";
import IConn from "../../database/IConn";
import Repository from "../Repository";

export default class ChannelRepository extends Repository {
    constructor(conn?: IConn) {
        super(conn);
    }

    add(channel: Channel) {

    }

    list(): Channel[] {
        return []
    }

    update(channel: string): boolean {
        return true;
    }

    remove(channel: string): boolean {
        return true;
    }
}