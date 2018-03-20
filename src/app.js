import express from 'express';
import blockchain from './ledger/router';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res)=>{
  res.send('connected');
})

app.use('/blockchain', blockchain)

export default app;