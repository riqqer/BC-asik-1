# Blockchain Assignment 1

## Team: Danial Yerzhigit, Rabat Karabek, Arnur Adilkhan

This project demonstrates a basic Ether wallet smart contract that:
- Accepts Ether deposits.
- Displays the contract's balance.
- Allows the owner to withdraw the entire balance.

## Features
- Built with Solidity.
- Deployed using Web3.js and Ganache.
- Interaction scripts for deploying and interacting with the contract.

## Technologies Used
- [Solidity](https://www.soliditylang.org/) - Smart contract language.
- [Web3.js](https://web3js.readthedocs.io/) - Ethereum JavaScript API.
- [Ganache](https://www.trufflesuite.com/ganache) - Local blockchain for development.
- [Node.js](https://nodejs.org/) - JavaScript runtime.
- [dotenv](https://www.npmjs.com/package/dotenv) - Environment variable management.

## Prerequisites
- [Node.js](https://nodejs.org/) installed.
- [Solidity Compiler (`solc`)](https://docs.soliditylang.org/en/v0.8.17/installing-solidity.html) installed.
- [Ganache](https://www.trufflesuite.com/ganache) installed and running.

## Setup

1. **Clone the repository:**
    ```bash
    git clone https://github.com/sailybaev/blockchain
    cd blockchain
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Configure Environment Variables:**
    - Create a [.env]() file in the root directory.
    - Add the following variables:
      ```env
      PRIVATE_KEY=your_private_key_here
      ACCOUNT_ADDRESS=your_account_address_here
      ```

## Compilation

1. **Compile the Smart Contract:**
    ```bash
    solc --abi --bin -o build MyContract.sol
    ```

    - This will generate the ABI and bytecode for the `EtherWallet` contract in the `build` directory.


## Deployment

1. **Start Ganache:**
    - Ensure Ganache is running on `http://127.0.0.1:8545`.

2. **Deploy the Contract:**
    ```bash
    node deploy.js
    ```
    - This will deploy the `MyContract` contract to the local blockchain.
    - Upon successful deployment, the contract address will be displayed.

## Interaction

1. **Interact with the Contract:**
    ```bash
    node interact.js
    ```
    - This script allows you to:
      - View contract methods.
      - Check the contract's balance.
      - Deposit Ether into the contract.
      - Withdraw Ether (if you are the owner).

## License

This project is licensed under the MIT License.