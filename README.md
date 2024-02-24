# SignorToken - ERC20 Token Contract

SignorToken is an ERC20 token contract built on Solidity using Hardhat. This contract allows users to manage and transfer tokens on the Ethereum blockchain.

## Features

- **ERC20 Compliance**: Follows the ERC20 standard interface for seamless integration with wallets and exchanges.
- **Token Transfer**: Allows users to transfer tokens between addresses.
- **Token Approval**: Enables users to approve other addresses to spend tokens on their behalf.
- **Token Allowance**: Provides a method for querying the amount of tokens that an address is allowed to spend.
- **Token Minting**: Minting function to create new tokens.
- **Token Burning**: Burning function to remove tokens from circulation.

## Requirements

- Node.js
- Hardhat
- Solidity

## Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/Signor1/erc20-signor-token.git
    ```

2. Navigate to the project directory:

    ```bash
    cd signor-token
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Usage

1. Compile the contracts:

    ```bash
    npx hardhat compile
    ```

2. Run unit tests:

    ```bash
    npx hardhat test
    ```

3. Deploy the contract to an Ethereum network:

    ```bash
    npx hardhat run scripts/deploy.js --network <network-name>
    ```

## Testing

Unit tests are located in the `test` directory. You can run tests using Hardhat's testing framework.

```bash
npx hardhat test
```

## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to open an issue or submit a pull request.
