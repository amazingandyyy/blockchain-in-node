import express from 'express';
import blockchain from './ledger/router';

const app = express();

app.get('/', (req, res)=>{
  res.send('connected');
})

app.use('/blockchain', blockchain)

app.listen(8080, ()=>{
  console.log('listening on 8080');
})