require('dotenv').config();
const Web3 = require('web3').default;
const fs = require('fs');
const path = require('path');

const provider = 'http://127.0.0.1:8545'
const web3 = new Web3(new Web3.providers.HttpProvider(provider));

const contractABI = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, '../BC asik 1/EtherWallet.abi'), 'utf8')
);
const contractBytecode = fs.readFileSync(
    path.resolve(__dirname, '../BC asik 1/EtherWallet.bin'),
    'utf8'
);
const privateKey = process.env.PRIVATE_KEY;

console.log('Private Key:', privateKey);

(async () => {

    const account = web3.eth.accounts.privateKeyToAccount(privateKey);
    web3.eth.accounts.wallet.add(account);
    web3.eth.defaultAccount = account.address;

    console.log('Using account address:', account.address);

    const balance = await web3.eth.getBalance(account.address);
    console.log('Account balance:', web3.utils.fromWei(balance, 'ether'), 'ETH');

    if (parseFloat(web3.utils.fromWei(balance, 'ether')) < 0.1) {
        console.error('Error: Account balance is too low to deploy contract');
        process.exit(1);
    }

    const contract = new web3.eth.Contract(contractABI);
    const deployedContract = await contract.deploy({ data: contractBytecode }).send({
        from: account.address,
        gas: 1500000,
        gasPrice: '30000000000000'
    });

    console.log('Contract deployed at:', deployedContract.options.address);
})();
