import * as dotenv from 'dotenv'
dotenv.config()

import * as tmi from 'tmi.js'

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

client.connect()
client.on('message', (channel, tags, message, self) => {
    if (self) return;
})