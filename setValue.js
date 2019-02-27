var ethers = require('ethers');
const ABI = require('./build/contracts/HelloWorld.json')

const provider = new ethers.providers.InfuraProvider('ropsten', '13eb2f7a24d048379237d1a85912203c');

const address  = ABI.networks[3].address;
const abi = ABI.abi;

const privKey = '826d281202a5f75190b589dba6af76778f3b479f3d2895fe7c3f74c232d15013';

var wallet = new ethers.Wallet(privKey,provider);

var contract = new ethers.Contract(address,abi,wallet);

var sendPromise = contract.setValue("Hello new braveworld!");

sendPromise.then(res => {
	console.log(res);
})

