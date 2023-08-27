import Command from "../entities/Command";
import Redeem from "../entities/Redeem";
import RedeemRepository from "../repositories/memory/RedeemRepository";
import AbstractHandler from "./Abstracthandler";
import { ICmdHandler } from "./interfaces/ICmdHandler";

export default class CreateList extends AbstractHandler implements ICmdHandler {
    private nextHandler: ICmdHandler | null = null;

    setNext(nextHandler: ICmdHandler): void {
        this.nextHandler = nextHandler;
    }

    handle(channel: string, message: string): string {
        console.log('CreateList');
        if (!this.validateCommand(message)) throw new Error('Invalid Command');
        const name = this.parseCommandName(message);
        const cmd: Command = {
            name,
            slug: name.replace('!', ''),
            args: this.parseCommandArgs(message),
        };
        if (cmd.slug === 'mkdir') {
            // catch args
            const [title, description] = cmd.args;
            // build a redeem object with args
            const redeem = new Redeem(title, description);
            // store the new list
            const redeemRepository = new RedeemRepository();
            return redeemRepository.register(channel, redeem) ? this.response(title) : 'Error while trying to add new List. Try again';
        } else if (this.nextHandler) {
            return this.nextHandler.handle(channel, message);
        } else {
            throw new Error('This Command cannot be handled');
        }
    }

    private response(title: string): string {
        return `Added ${title}!`;
    }
}