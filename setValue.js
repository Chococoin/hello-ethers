var ethers = require('ethers');
const ABI = require('./build/contracts/HelloWorld.json')

const provider = new ethers.providers.JsonRpcProvider('http://localhost:7545');

//const address  = '0x1eA5981E127b4AEfbFAaae48c6B7380351144519';
const address  = ABI.networks[5777].address;
const abi = ABI.abi;

const privKey = '826d281202a5f75190b589dba6af76778f3b479f3d2895fe7c3f74c232d15013';

var wallet = new ethers.Wallet(privKey,provider);

var contract = new ethers.Contract(address,abi,wallet);

var sendPromise = contract.setValue("Hello new braveworld!");

sendPromise.then(res => {
	console.log(res);
})

