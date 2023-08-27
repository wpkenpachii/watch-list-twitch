import Command from "../../entities/Command";

export interface ICmdHandler {
    setNext(nextHandler: ICmdHandler): void;
    handle(channel: string, payload: string | Command): any;
}