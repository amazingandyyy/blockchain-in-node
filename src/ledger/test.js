import Block from './block';
import Blockchain from './blockchain';
import Transaction from './transaction';

function test(){
  let genesisBlock = new Block();
  let blockchain = new Blockchain(genesisBlock);

  let transaction = new Transaction('Andy', 'John', 10);
  let nextBlock = blockchain.buildNextBlock([transaction]);
  blockchain.addBlock(nextBlock);

  let transaction2 = new Transaction('John', 'Andy', 5);
  let nextBlock2 = blockchain.buildNextBlock([transaction2]);
  blockchain.addBlock(nextBlock2);

  return blockchain;
}

export default test;