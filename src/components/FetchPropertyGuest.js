import React,{useState,useEffect} from 'react';
import { useWeb3React } from '@web3-react/core';
import { ethers } from "ethers";
import {contractAddress,abi} from '../utils/contractDetails';

const FetchPropertyGuest = () => {
    const {account} = useWeb3React();
    const [contract, setContract] = useState();
    const [property, setProperty] = useState();
    useEffect(()=>{
        async function gettProperty() {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contracts = new ethers.Contract(contractAddress, abi, provider);
        console.log(contract);
        let propertys = await contracts.getProperty(0);
        setProperty(property);
        
        setContract(contracts);
        }
        gettProperty();
    },[account]);
  return (
    <div className='card' style={{margin: "80px", height: "30rem" }}>
        { property ?
        <div>
            <h1 style={{fontWeight: "bolder"}}>Property Details will be Shown here</h1>
        </div> :
        <div>
            you Don't own any property
        </div>}
    </div>
  )
}

export default FetchPropertyGuest