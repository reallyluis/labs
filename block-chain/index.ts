import * as crypto from 'crypto';
import Chain from './components/Chain';
import Wallet from './components/Wallet';

const satoshi = new Wallet();
const bob = new Wallet();
const alice = new Wallet();
const eve = new Wallet();

satoshi.sendMoney(50, bob.publicKey);
bob.sendMoney(23, alice.publicKey);
alice.sendMoney(5, bob.publicKey);
bob.sendMoney(7, eve.publicKey);

console.log(Chain.instance);