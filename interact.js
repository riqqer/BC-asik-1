const Web3 = require('web3').default;
const fs = require('fs');
const path = require('path');
const provider = 'http://127.0.0.1:8545';
const web3 = new Web3(new Web3.providers.HttpProvider(provider));

const contractAddress = "0x764A81E720Cda7DEEAfB48AD16e18fd8228d1651";
const abi = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, '../BC asik 1/EtherWallet.abi'), 'utf8')
);

(async () => {
    try {
        const accounts = await web3.eth.getAccounts();
        console.log("Accounts:", accounts);

        const myContract = new web3.eth.Contract(abi, contractAddress);

        const amountInEther = '0.1'; 
        const amountInWei = web3.utils.toWei(amountInEther, 'ether');

        console.log(`Sending ${amountInEther} ETH to the contract...`);
        await web3.eth.sendTransaction({
            from: accounts[0],
            to: contractAddress,
            value: amountInWei,
            gas: 2000000, 
        });
        console.log(`${amountInEther} ETH sent to the contract`);

        const balance = await myContract.methods.getBalance().call();
        console.log('Contract balance:', web3.utils.fromWei(balance, 'ether'), 'ETH');

        console.log("Withdrawing funds...");
        await myContract.methods.withdraw().send({ from: accounts[0] });
        console.log('Withdraw successful');
    } catch (error) {
        console.error('Error interacting with contract:', error);
    }
})();
