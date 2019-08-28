import fs from 'fs';
import {update} from './util/update'

const filename = 'test.txt';
const encode = 'utf8';
let networks = [];

fs.readFile(filename, encode, async (err, file) => {
    let message = file.split('\n');
    for (let i = 1; i < message.length - 1; i++) {
        let network = {};
        let messageCutSpace = message[i].trim().split(/\s+/);
        network.deviceIP = messageCutSpace[0];
        if(isIngics(messageCutSpace[1].trim().split('-'))){
            network.deviceMac = messageCutSpace[1].trim().split('-').join('').toUpperCase();
            if(type(messageCutSpace[2])){
                networks.push(network);
            }
        }
        for(let i = 0; i < networks.length - 1; i++){
            const deviceIP = networks[i].deviceIP;
            const deviceMac = networks[i].deviceMac;
            await update(deviceMac, deviceIP);
        }

    }
    console.log(networks);
});

const type = (message) => {
    const isDynamicIp = message === '動態' ? true : false;
    return isDynamicIp;
}

const isIngics = (message) => {
    if(message[0] === 'b0' && message[1] === '38') {
        return true;
    }
    return false;
}
