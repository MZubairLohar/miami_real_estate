const hre = require("hardhat");
const { ethers } = require("hardhat");

function toWei(n) {
  return ethers.utils.parseUnits(n);
}
async function main() {
    const Real = await ethers.getContractFactory("RealEstate");
    const real = await Real.deploy(process.env.MY_ADD, 5,toWei("0.00001"),toWei("0.00001"));
    await real.deployed();


  console.log("realEstate deployed to:", real.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
