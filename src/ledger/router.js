import Transaction from './transaction';
import Blockchain from './blockchain';
import genesisBlock from './genesisBlock';
import BlockchainNode from './blockchainNode';

const router = require('express').Router();

let transactions = [];
let blockchain = new Blockchain(genesisBlock);
let nodes = [];

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

router.post('/nodes/register', (req, res)=>{
  let nodeList = req.body.urls;
  if(!nodeList) return res.sendStatus(500);
  nodeList.forEach((n)=>{
    let node = new BlockchainNode(n.url);
    nodes.push(node);
  })
  res.json(nodes);
})

router.get('/nodes', (req, res)=>{
  res.json(nodes);
})

export default router;