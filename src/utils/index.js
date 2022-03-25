import { Contract } from "@ethersproject/contracts";
import { BigNumber } from "@ethersproject/bignumber";
import { formatUnits, parseUnits } from "@ethersproject/units";
import { getAddress } from "@ethersproject/address";
import { ZERO_ADDRESS } from "../constants";

const nf = new Intl.NumberFormat();


export function convertToInternationalCurrencySystem(labelValue) {
    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e9
      ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(2).replace(/\.?0+$/, "") +
          " B"
      : // Six Zeroes for Millions
      Math.abs(Number(labelValue)) >= 1.0e6
      ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(2).replace(/\.?0+$/, "") +
        " M"
      : // Three Zeroes for Thousands
      Math.abs(Number(labelValue)) >= 1.0e3
      ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(2).replace(/\.?0+$/, "") +
        " K"
      : Math.abs(Number(labelValue));
  }
  
  // add 20%
  export function calculateGasMargin(value) {
    return value.mul(BigNumber.from(10000 + 2000)).div(BigNumber.from(10000));
  }
  
  export function formatNumber(number) {
    return nf.format(Math.floor(number));
  }
  
  // parseUnits("1.0", 18) -> { BigNumber: "1000000000000000000" }
  export function toWei({ num = "0", decimals = 18 || "ether" }) {
    return num && parseUnits(num.toString(), decimals);
  }
  
  // num must be BigNumber and returns number
  // format units returns string and we convert to number
  export function fromWei({ num = toBN("0"), decimals = 18 || "ether" }) {
    return parseFloat(formatUnits(num, decimals));
  }
  

  export function formatValue({ num = toBN("0"), decimals = 18, precision = 4 }) {
    return (
      num &&
      parseFloat(
        noEndZeros(
          fromWei({ num, decimals: decimals ? decimals : 18 }).toFixed(precision)
        )
      )
    );
  }
  
  export function toFix({ num, precision = 4 }) {
    return parseFloat(num.toFixed(precision));
  }
  
  export function noEndZeros(num) {
    return num.toString().replace(/\.?0+$/, "");
  }
  
  export function toBN(num) {
    return BigNumber.from(num);
  }


export async function etherBalance(addr, ethers) {
    return await ethers.provider.getBalance(addr);
  }
  
  // returns the checksummed address if the address is valid, otherwise returns false
  export function isAddress(value) {
    try {
      return getAddress(value);
    } catch {
      return false;
    }
  }
  
  // shorten the checksummed version of the input address to have 0x + 4 characters at start and end
  export function shortenAddress(address, chars = 4) {
    const parsed = isAddress(address);
    if (!parsed) {
      throw Error(`Invalid 'address' parameter '${address}'.`);
    }
  
    return `${parsed.substring(0, chars + 2)}...${parsed.substring(42 - chars)}`;
  }


const ETHERSCAN_PREFIXES = {
    1: "",
    4: "rinkeby.",
  };
  
  export function getEtherscanLink(
    chainId,
    data,
    type = "transaction" || "address"
  ) {
    const prefix = `https://${
      ETHERSCAN_PREFIXES[chainId] || ETHERSCAN_PREFIXES[1]
    }etherscan.io`;
  
    switch (type) {
      case "transaction": {
        return `${prefix}/tx/${data}`;
      }
      case "address":
      default: {
        return `${prefix}/address/${data}`;
      }
    }
  }


// account is not optional
export function getSigner(library, account) {
    return library.getSigner(account);
  }
  
  export function getProviderOrSigner(library, account) {
    return account ? getSigner(library, account) : library;
  }
  
  // account is optional
  export function getContract(address, ABI, library, account) {
    if (!isAddress(address) || address === ZERO_ADDRESS) {
      throw Error(`Invalid 'address' parameter '${address}'.`);
    }
  
    return new Contract(address, ABI, getProviderOrSigner(library, account));
  }
  