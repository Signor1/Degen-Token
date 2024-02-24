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

//Degen ERC20 Token deployed to 0x1c615A625d3af403192dE4838eb5639B403Fc9D8

// https://testnet.snowtrace.io/address/0x1c615A625d3af403192dE4838eb5639B403Fc9D8#code
