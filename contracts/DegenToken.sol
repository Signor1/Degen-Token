// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract DegenToken {
    //the state variables
    string tokenName = "Degen";
    string tokenSymbol = "DGN";
    uint256 totalSupply;
    address owner;

    //making an amount tracable by address
    mapping(address user => uint256) balances;

    //making an amount tracable by address A and address A traced by address B
    //key => (key => value)
    mapping(address => mapping(address => uint256)) allow;

    constructor() {
        owner = msg.sender;
        //mint method
        mint(msg.sender, 1000 * (10 ** uint(decimal())));
    }

    // event for logging
    event Transfer(
        address indexed sender,
        address indexed reciever,
        uint256 amount
    );

    event Approval(
        address indexed owner,
        address indexed spender,
        uint256 amount
    );

    function getTokenName() external view returns (string memory) {
        return tokenName;
    }

    function getSymbol() external view returns (string memory) {
        return tokenSymbol;
    }

    function getTotalSupply() external view returns (uint256) {
        return totalSupply;
    }

    function decimal() public pure returns (uint8) {
        return 18;
    }
}
