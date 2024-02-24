import { ethers } from "hardhat";

async function main() {
  const degenTokenContract = await ethers.deployContract("DegenToken");

  await degenTokenContract.waitForDeployment();

  console.log(`Degen ERC20 Token deployed to ${degenTokenContract.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//Degen ERC20 Token deployed to 0xFd1c8408248A1B1E3d8d07b98733E3B819d1b81a

// contract address
//https://testnet.snowtrace.io/address/0xFd1c8408248A1B1E3d8d07b98733E3B819d1b81a

//link to the token
//https://testnet.snowtrace.io/token/0xFd1c8408248A1B1E3d8d07b98733E3B819d1b81a?chainId=43113
