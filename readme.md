# blockchain-in-js
This is an afternoon-project, a blockchain built in node, supporting PoW.

### Why Node
Node itself is a more beautiful, flexible and powerful language for internet project, again, I want to show my love to js.

### Why a Blockchain from scratch
When it comes to blockchain, most developers only learn **how to do Dapp** with ethereum, neo, or other existing infrustructure-completed project... I think there is a better way to understand blockchain itself, to build a chain from scratch

## This is lovely demo for 
- How Block, Blockchain, node, transaction work with each others.
- How to do them in Node
- How to resolve basic conflicts in blockchain
- How to use sha256 to do PoW(Proof of Work)

## Run it
```
$ npm clone https://github.com/amazingandyyy/blockchain-in-js.git
$ npm i
$ npm run dev

<!-- to run more nodes -->
$ npm run nodes 3000
$ npm run nodes 3001
$ npm run nodes 3002
```

$$ Routes
```
GET /blockchain
GET /blockchain/mine
POST /blockchain/transactions
GET /blockchain/nodes/resolve
POST /blockchain/nodes/register
GET /blockchain/nodes
```

### Author 
Andy Chen([amazingandyyy](https://github.com/amazingandyyy))

### LICENSE
[MIT](https://github.com/amazingandyyy/blockchain-in-js/blob/master/LICENSE)
