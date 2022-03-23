import { ethers } from "ethers";
import {contractAddress,abi} from '../utils/contractDetails';


import React from 'react'

const getContract = () => {
  return (
    <div>getContract</div>
  )
}

export default getContract
// export const contract = ( ) => {
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     const contract = new ethers.Contract(contractAddress, abi, provider);
//     return contract;
// }