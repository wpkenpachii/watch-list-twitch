import Conn from "../../database/memory/Conn";
import Redeem, { RedeemStatus } from "../../entities/Redeem";
import Repository from "../Repository";

export default class RedeemRepository extends Repository {

    register(channel: string, redeem: Redeem): boolean {
        if (Conn.db.find((rec: any) => rec.channel === channel)) {
            Conn.db = Conn.db.map((rec: any) => {
                if (rec.channel === channel) {
                    rec.redeems.push(redeem);
                }
                return rec;
            })
        } else {
            Conn.db.push({
                channel,
                redeems: [redeem]
            })
        }

        console.log('All', Conn.db)

        return true;
    }

    find(channel: string, title: string): Redeem | undefined {
        const channel_data = Conn.db.find( (item: any) => item.channel === channel);
        return channel_data?.redeems.find((redeem: Redeem) => redeem.title.toLowerCase() === title.toLowerCase())
    }

    list(channel: string): Redeem[] {
        const channel_data = Conn.db.filter((ch: any) => {
            return ch.channel === channel
        });
        return channel_data[0].redeems.filter((redeem: any) => redeem.status !== RedeemStatus.CLOSED);
    }

    play(channel: string, redeem_title: string) {
        Conn.db = Conn.db.map((ch: any) => {
            if (channel === ch.channel) {
                ch.redeems.map((redeem: any) => {
                    if (redeem.title.toLowerCase() === redeem_title.toLowerCase()) {
                        redeem.status = RedeemStatus.ACTIVE;
                    } else {
                        redeem.status = RedeemStatus.PAUSED;
                    }
                    return redeem;
                })
                return ch;
            }
        });
        return true;
    }

    close(channel: string, redeem_title: string) {
        Conn.db = Conn.db.map((ch: any) => {
            if (channel === ch.channel) {
                ch.redeems.map((redeem: any) => {
                    if (redeem.title.toLowerCase() === redeem_title.toLowerCase()) {
                        redeem.status = RedeemStatus.CLOSED;
                    }
                    return redeem;
                })
                return ch;
            }
        });
        return true;
    }
}