export enum RedeemStatus {
    ACTIVE = 'ACTIVE',
    PAUSED = 'PAUSED',
    CLOSED = 'CLOSED'
}

export interface IRedeem {
    title: string;
    description?: string;
    status: RedeemStatus
}

export default class Redeem implements IRedeem {
    title: string;
    description: string;
    status: RedeemStatus;

    constructor(title: string, description: string) {
        this.title = title;
        this.description = description;
        this.status = RedeemStatus.ACTIVE
    }
}