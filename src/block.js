class Block{
  constructor(){
    this.index = 0;
    this.previousHash = '';
    this.hash = '';
    this.nonce = 0;
    this.transactions = []
  }

  get key(){
    return JSON.stringify(this.transactions) 
    + this.index 
    + this.previousHash 
    + this.nonce;
  }

  addTransaction(transaction){
    this.transactions.push(transaction)
  }

}

export default Block;