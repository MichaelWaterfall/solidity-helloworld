var contractABI = [
    {
      "inputs": [],
      "name": "hello",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "pure",
      "type": "function",
      "constant": true
    }];
var contractAddress = '0x58ce59853F0Bb8bF96f3Bc4A21609AC04692e341';
var web3 = new Web3('http://127.0.0.1:9545/');
var helloWorldContract = new web3.eth.Contract(contractABI, contractAddress);

document.addEventListener('DOMContentLoaded', () => {
    helloWorldContract.methods.hello().call()
    .then(result => {
      document.getElementById('hello').innerHTML = result;
    });
});