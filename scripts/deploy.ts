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

//Degen ERC20 Token deployed to 0x8a648c1E0df5d9B2742C1f6b9f913b31a05C4f79

// contract address
//https://testnet.snowtrace.io/address/0x8a648c1E0df5d9B2742C1f6b9f913b31a05C4f79

//link to the token

// https://testnet.snowtrace.io/token/0x8a648c1E0df5d9B2742C1f6b9f913b31a05C4f79?chainId=43113
