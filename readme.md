# blockchain-in-node [![Build Status](https://travis-ci.org/amazingandyyy/blockchain-in-node.svg?branch=master)](https://travis-ci.org/amazingandyyy/blockchain-in-node)

This is an afternoon-project, a blockchain built in node, supporting PoW.

### Why Node
Node itself is a more beautiful, flexible and powerful language for internet project, again, I want to show my love to js.

### Why a Blockchain from scratch
When it comes to blockchain, most developers only learn **how to do Dapp** with ethereum, neo, or other existing infrastructure-completed project... They are fine, but using them will only let you know what you can do with them, as a result, you cannot really get the idea what you can do with blockchain itself, and what you can apply the blockchain mindset to other software projects. I think there is a better way to understand blockchain itself - to build a chain from scratch

## This is a lovely demo for 
- A general Idea of how Blocks, Chain, Mining, Nodes, Transaction work with each others.
- How to do them in Node
- How to resolve basic conflicts in blockchain
- How to use sha256 to do PoW(Proof of Work)
- Not a demo for
  - signatures
  - address
  - production setup
  - making you a blockchain expert

## Run it on your machine
```
$ npm clone https://github.com/amazingandyyy/blockchain-in-node.git
$ npm i
$ npm run dev // default on port 3000

<!-- to run more nodes -->
$ npm run nodes // default on port 3000
$ npm run nodes 3000 // listening on port 3000
$ npm run nodes 3001 // listening on port 3001
$ npm run nodes 3002 // listening on port 3002
```

## HTTP Endpoints
```
GET /blockchain // see the link-list itself
POST /blockchain/mine // find the next special hash
POST /blockchain/body // add new data to the chain 

GET /blockchain/nodes // get a list of all nodes
GET /blockchain/nodes/resolve // fetch the longest chain
POST /blockchain/nodes/register // add nodes urls
```

### There are many can be done: 
Please feel free to [fork](https://github.com/amazingandyyy/blockchain-in-node#fork-destination-box), clone or send me [PR](https://github.com/amazingandyyy/blockchain-in-node/pulls)


- use `socket` instead of http, to broadcast state
- implement signature, public key, private key, user address system
- proof of work and rewarding system
- new PoW algorithm
- location based sharding?
- hide IPs / make it private!?
- PoS, or other dBFT methods
- dockernized, easy to run a node
- interactive wrappers, helper libraries(python, golang, java)...


### Author 
Andy Chen([amazingandyyy](https://github.com/amazingandyyy))

### LICENSE
[MIT](https://github.com/amazingandyyy/blockchain-in-node/blob/master/LICENSE)

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)
