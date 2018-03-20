import Transaction from './transaction';
import Blockchain from './blockchain';
import genesisBlock from './genesisBlock';

const router = require('express').Router();

let transactions = [];
let blockchain = new Blockchain(genesisBlock);

router.get('/', (req, res)=>{
  res.json(blockchain);
})

router.get('/mine', (req, res)=>{
  let block = blockchain.mineNextBlock(transactions)
  blockchain.addBlock(block);
  res.json(block);
})

router.post('/transactions', (req, res)=>{
  const {from, to, amount} = req.body;
  let transaction = new Transaction(from , to ,amount)
  transactions.push(transaction);
  res.json(transactions);
})

export default router;