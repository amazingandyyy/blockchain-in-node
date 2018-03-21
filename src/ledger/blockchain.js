import Block from './block';
import sha256 from 'js-sha256';

class Blockchain{
  constructor(genesisBlock){
    this.blocks = []
    this.addBlock(genesisBlock)
  }

  addBlock(block){
    if(this.blocks.length == 0){
      block.previousHash = '000000000000000'
      block.hash = this.mineHash(block);
    }
    this.blocks.push(block);
  }

  generateNextBlock(body){
    let block = new Block();

    body.forEach((transaction)=>{
      block.addBody(transaction);
    })

    let previousBlock = this.getPreviousBlock();
    block.index = this.blocks.length
    block.previousHash = previousBlock.hash
    block.hash = this.mineHash(block)

    return block;
  }

  getPreviousBlock(){
    return this.blocks[this.blocks.length-1]
  }

  mineHash(block){
    let hash = sha256(block.key);
    while(!hash.startsWith('aaa')){
      block.nonce += 1
      hash = sha256(block.key)
      console.log(hash)
    }
    return hash;
  }
}

export default Blockchain;