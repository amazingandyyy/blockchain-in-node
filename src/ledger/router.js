import test from './test';
const router = require('express').Router();

router.get('/', (req, res)=>{
  console.log('/blockchain connected');
  res.json(test());
})

export default router;