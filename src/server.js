import Block from './block';
import Blockchain from './blockchain';

let genesisBlock = new Block();
let blockchain = new Blockchain(genesisBlock);

console.log(blockchain);