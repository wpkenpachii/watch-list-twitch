import Command from "../entities/Command";
import Redeem from "../entities/Redeem";
import RedeemRepository from "../repositories/memory/RedeemRepository";
import AbstractHandler from "./Abstracthandler";
import { ICmdHandler } from "./interfaces/ICmdHandler";

export default class ShowList extends AbstractHandler implements ICmdHandler {
    private nextHandler: ICmdHandler | null = null;

    setNext(nextHandler: ICmdHandler): void {
        this.nextHandler = nextHandler;
    }

    handle(channel: string, message: string): string {
        console.log('ShowList');
        if (!this.validateCommand(message)) throw new Error('Invalid Command');
        const name = this.parseCommandName(message);
        const cmd: Command = {
            name,
            slug: name.replace('!', ''),
            args: this.parseCommandArgs(message),
        };
        if (cmd.slug === 'ls') {
            const redeemRpository = new RedeemRepository()
            return cmd.args.length
                ? this.responseOne(redeemRpository.find(channel, cmd.args[0]))
                : this.responseMany(redeemRpository.list(channel));

        } else if (this.nextHandler) {
            return this.nextHandler.handle(channel, message);
        } else {
            throw new Error('This Command cannot be handled');
        }
    }

    private responseOne(redeem: Redeem | undefined): string {
        if(redeem === undefined) return 'Not Found';
        return`TITLE: ${redeem.title} | DESC: ${redeem.description || 'Sem Descrição'} | STATUS: ${redeem.status}`;
    }

    private responseMany(list: Redeem[]): string {
        return list.map((item: Redeem) => item.title).join(', ');
    }
}