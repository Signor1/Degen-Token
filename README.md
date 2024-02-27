# DegenToken Contract

## Description

The DegenToken ERC20 contract is designed to create a unique token that can be earned by players in a gaming environment and then exchanged for rewards in an in-game store. It allows for minting new tokens, transferring tokens between players, redeeming tokens for in-game items, checking token balances, and burning tokens that are no longer needed. This contract is deployed on the Avalanche network, offering fast and low-fee transactions suitable for web3 gaming projects.

## Getting Started

### Installing

To use the DegenToken ERC20 contract, you can interact with it directly on the Avalanche network using the contract address provided. No installation or downloading is required.

### Executing Program

To interact with the DegenToken ERC20 contract:
1. Use a compatible wallet or interface to connect to the Avalanche network.
2. Access the contract using its address: [0x8a648c1E0df5d9B2742C1f6b9f913b31a05C4f79](https://testnet.snowtrace.io/address/0x8a648c1E0df5d9B2742C1f6b9f913b31a05C4f79).
3. Access the Degen Gaming token using this link: [DEGEN](https://testnet.snowtrace.io/token/0x8a648c1E0df5d9B2742C1f6b9f913b31a05C4f79?chainId=43113).
4. Utilize the provided functions to mint, transfer, redeem, check balances, and burn tokens.

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
