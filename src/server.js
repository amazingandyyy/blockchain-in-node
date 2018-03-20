import app from './app';

let port = process.argv[2] || 3000;

app.listen(port || 3000, ()=>{
  console.log(`node is running on port ${port || 3000}`);
})