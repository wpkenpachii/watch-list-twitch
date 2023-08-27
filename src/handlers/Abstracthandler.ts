export default abstract class AbstractHandler {
    protected validateCommand(message: string): boolean {
        return !!(message.match(/![0-9a-z]/gi));
    }

    protected parseCommandName(message: string): string {
        const res = message.replace(/(\s+\|\s+)|(\s+\|)|(\|\s+)/, '|').split('|', 1)[0];
        return res;
    }

    protected parseCommandArgs(message: string): string[] {
        const res = message.replace(/(\s+\|\s+)|(\s+\|)|(\|\s+)/, '|').split('|').slice(1);
        return res;
    }
}