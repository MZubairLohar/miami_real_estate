import {useWeb3React} from "@web3-react/core";
import { useMemo, useCallback } from "react";
import { calculateGasMargin, getSigner, toWei } from "../utils";
import { abi, contractAddress } from "../utils/contractDetails";
import {useContract} from "./useContract";


export function useRequestAddProperty(_currentOwner,_area, _price,DocOne,DocTwo,_picture){
    const {chainId, library, account} = useWeb3React();
    // const contract = useContract(contractAddress,abi, true);
    // console.log("from hook ", contract);
    // if (!chainId) {
    //     console.error("no chainId");
    //     return;
    // }
  
}