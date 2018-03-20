import sha256 from 'js-sha256';

class Blockchain{
  constructor(genesisBlock){
    this.block = []
    this.addBlock(genesisBlock)
  }

  addBlock(block){
    if(this.block.length == 0){
      block.previousHash = '000000000000000'
      block.hash = this.generateHash(block);
    }
    this.block.push(block);
  }

  generateHash(block){
    return sha256(block.key);
  }
}

export default Blockchain;