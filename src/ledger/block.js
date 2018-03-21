class Block{
  constructor(){
    this.index = 0;
    this.previousHash = '';
    this.hash = '';
    this.nonce = 0;
    this.timestamp = Date.now();
    this.body = []
  }

  get key(){
    return JSON.stringify(this.body) 
    + this.index 
    + this.previousHash 
    + this.nonce;
  }

  addBody(transaction){
    this.body.push(transaction)
  }

}

export default Block;