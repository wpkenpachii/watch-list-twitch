import Command from "../entities/Command";
import RedeemRepository from "../repositories/memory/RedeemRepository";
import AbstractHandler from "./Abstracthandler";
import { ICmdHandler } from "./interfaces/ICmdHandler";

export default class CloseList extends AbstractHandler implements ICmdHandler {
    private nextHandler: ICmdHandler | null = null;

    setNext(nextHandler: ICmdHandler): void {
        this.nextHandler = nextHandler;
    }

    handle(channel: string, message: string): string {
        console.log('CloseList');
        if (!this.validateCommand(message)) throw new Error('Invalid Command');
        const name = this.parseCommandName(message);
        const cmd: Command = {
            name,
            slug: name.replace('!', ''),
            args: this.parseCommandArgs(message),
        };
        if (cmd.slug === 'rm') {
            const [title] = cmd.args;
            const redeemRepository = new RedeemRepository();
            return redeemRepository.close(channel, title) ? this.response(title) : '';
        } else if (this.nextHandler) {
            return this.nextHandler.handle(channel, message);
        } else {
            throw new Error('Invalid Command');
        }
    }

    private response(title: string): string {
        return `Removed ${title}!`;
    }
}