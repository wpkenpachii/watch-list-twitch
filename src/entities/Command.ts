export default class Command {
    name: string;
    slug: string;
    args: string[];

    constructor(name: string, args: string[]) {
        this.name = name;
        this.slug = name.replace('!', '');
        this.args = args;
    }
}