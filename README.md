# DegenToken Contract

## Description

The DegenToken ERC20 contract is designed to create a unique token that can be earned by players in a gaming environment and then exchanged for rewards in an in-game store. It allows for minting new tokens, transferring tokens between players, redeeming tokens for in-game items, checking token balances, and burning tokens that are no longer needed. This contract is deployed on the Avalanche network, offering fast and low-fee transactions suitable for web3 gaming projects.

## Getting Started

### Installing

To use the DegenToken ERC20 contract, you can interact with it directly on the Avalanche network using the contract address provided. No installation or downloading is required.

### Executing program

To interact with the DegenToken ERC20 contract:

1. Use a compatible wallet or interface to connect to the Avalanche network.
2. Access the contract using its address: [0x1c615A625d3af403192dE4838eb5639B403Fc9D8](https://testnet.snowtrace.io/address/0x1c615A625d3af403192dE4838eb5639B403Fc9D8).
3. Utilize the provided functions to mint, transfer, redeem, check balances, and burn tokens.

## Contract Details

### Token Information

- Token Name: Degen
- Token Symbol: DGN

### Constructor

- Initializes the contract owner as the deployer of the contract.
- Mints an initial supply of 1000 Degen tokens and assigns them to the contract owner.

### Functions

- `getTokenName()`: Returns the name of the token.
- `getSymbol()`: Returns the symbol of the token.
- `getTotalSupply()`: Returns the total supply of the token.
- `balanceOf(address _address)`: Returns the balance of tokens for a given address.
- `transfer(address _receiver, uint256 _amountOfToken)`: Transfers tokens from the sender's account to the specified receiver.
- `approve(address _delegate, uint256 _amountOfToken)`: Approves the specified delegate to spend tokens on behalf of the sender.
- `allowance(address _owner, address _delegate)`: Returns the amount of tokens that the delegate is allowed to spend on behalf of the owner.
- `transferFrom(address _owner, address _buyer, uint256 _amountOfToken)`: Transfers tokens from one address to another, if approved.
- `burn(address _address, uint256 _amount)`: Burns tokens from the specified address.
- `mint(address to, uint256 _amount)`: Mints new tokens and assigns them to the specified address.

## Help

If you encounter any issues or have questions about using the DegenToken ERC20 contract, please refer to the provided documentation or seek assistance from the Ethereum development community.

## Authors

- Emmanuel Omemgboji
- Contact: [emmanuelomemgboji@gmail.com](mailto:emmanuelomemgboji@gmail.com)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.