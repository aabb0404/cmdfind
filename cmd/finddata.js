import {update} from './util/update'
import fs from 'fs';
const filename = 'test.txt';
const encode = 'utf8';
let networks = [];

fs.readFile(filename, encode,async function(err, file) {
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
    for(let i = 0;i<networks.length-1;i++){
        console.log(networks[i].deviceIP)
        console.log(networks[i].deviceMac)
        //await update(networks[i].deviceIP,networks.deviceMac);
    }

    }
    console.log(networks);
});

const type =(message)=>{
    if(message == '動態'){
        return true;
    }
    return false
}

const isIngics = (message) =>{
    if(message[0] == 'b0' && message[1]=='38')
    {
        return true
    }
    else return false
}
