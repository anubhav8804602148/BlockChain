const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());
const {interface, bytecode} = require('../compile/compile');
let accounts;
let inbox;
beforeEach(async () => {
    accounts = await web3.eth.getAccounts();
    inbox = await new web3.eth.Contract(interface)
        .deploy({data : bytecode, arguments : ['Hello and welcome to me']})
        .send({from : accounts[0], gas: '1000000'});
});

describe('TestMyAccount', () => {
    it('deploysAContract', () => {
        console.log(inbox);
    })
});
