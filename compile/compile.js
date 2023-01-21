const path = require('path');
const fs = require('fs');
const solc = require('solc')


const inboxPath = path.resolve(__dirname,'..', 'firstContract','FirstContract.sol');
const source = fs.readFileSync(inboxPath, 'UTF-8');

var input = {
    language: 'Solidity',
    sources: {
        'Inbox.sol' : {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': [ '*' ]
            }
        }
    }
};

var output = JSON.parse(solc.compile(JSON.stringify(input)));
console.log(output);
exports.interface = output.contracts['Inbox.sol']['Inbox'].abi;
exports.bytecode = output.contracts['Inbox.sol']['Inbox'].evm.bytecode.object;
