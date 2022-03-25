import { useMemo} from "react";
import { useWeb3React } from "@web3-react/core";
import {getContract} from "../utils"
import {ZERO_ADDRESS} from "../constants";
import { abi } from "../utils/contractDetails";

export const useContract = (address , abi, withSignerIfPossible) => {
    const {library , account } = useWeb3React();
    return useMemo(() => {
        if(!address || !abi || !library) return null;
        try {
            return getContract(
                address,
                abi,
                library,
                withSignerIfPossible && account ? account : undefined
            );
        } catch (error) {
            console.error("Failed to get contract", error);
            return null;
        }
    }, [library, account, address, abi, withSignerIfPossible]);
}

export const myContract = (address , withSignerIfPossible = true) => {
    return useContract (
        address !== ZERO_ADDRESS && address ,
        abi ,
        withSignerIfPossible
    )
}