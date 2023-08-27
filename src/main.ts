import * as dotenv from 'dotenv'
dotenv.config()

import * as tmi from 'tmi.js'
import ShowList from './handlers/ShowList.cmd';
import CreateList from './handlers/CreateList.cmd';
import CloseList from './handlers/CloseList.cmd';

const {
    USERNAME,
    OAUTH_TOKEN
} = process.env;

const client = new tmi.Client({
    options: { debug: false },
    channels: ['sirzarakikenpachi'],
    identity: {
        username: USERNAME,
        password: OAUTH_TOKEN
    }
})

// Declaration
const showList = new ShowList();
const createList = new CreateList();
const closeList = new CloseList();

// Set NextHandler
showList.setNext(createList);
createList.setNext(closeList);

client.connect()
client.on('message', (channel, tags, message, self) => {
    if (self) return;
    try {
        const response = showList.handle(channel, message);
        client.say(channel, `/me ${response}`);
    } catch (error: any) {
        if (error.message === "Invalid Command") return
        console.log(error)
    }
})