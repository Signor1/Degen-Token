# DegenToken Contract

## Description

The DegenToken contract is an ERC20 token contract designed for gaming environments. It allows players to earn tokens and exchange them for in-game rewards. The contract supports functionalities such as minting new tokens, transferring tokens, redeeming tokens for in-game items, checking token balances, and burning tokens.

## Getting Started

### Installing

To use the DegenToken ERC20 contract, you can interact with it directly on the Avalanche network using the contract address provided. No installation or downloading is required.

### Executing Program

To interact with the DegenToken ERC20 contract:
1. Use a compatible wallet or interface to connect to the Avalanche network.
2. Access the contract using its address: [0xContractAddressHere](https://avalanche.network/contract/0xContractAddressHere).
3. Utilize the provided functions to mint, transfer, redeem, check balances, and burn tokens.

## Contract Details

### Token Information

- Token Name: Degen Gaming Token
- Token Symbol: DEGEN

### Constructor

- Initializes the contract owner as the deployer of the contract.
- Mints an initial supply of 1,000,000 Degen tokens and assigns them to the contract owner.
- Adds items to the in-game store with varying costs.

### Functions

- `redeemItem(uint8 _itemId)`: Allows players to redeem items from the in-game store using their tokens.
- `balanceOf(address _address)`: Returns the balance of tokens for a given address.
- `transfer(address _receiver, uint256 _amountOfToken)`: Transfers tokens from the sender's account to the specified receiver.
- `burn(uint256 _amount)`: Burns tokens from the sender's account.
- `mint(address to, uint256 _amount)`: Mints new tokens and assigns them to the specified address.

## Help

If you encounter any issues or have questions about using the DegenToken ERC20 contract, please refer to the provided documentation or seek assistance from the Ethereum development community.

## Authors

- Emmanuel Omemgboji
- Contact: [emmanuelomemgboji@gmail.com](mailto:emmanuelomemgboji@gmail.com)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
