import React,{useEffect, useState} from 'react'
import { useWeb3React } from '@web3-react/core';
import {contractAddress,abi} from '../utils/contractDetails';
import { ethers } from "ethers";
import DashBoard from './DashBoard';
import OwnersDesh from './OwnersDesh';
import GuestDesh from './GuestDesh';

const Panel = () => {
    const {account} = useWeb3React();
    const [owner, setOwner] = useState();
    const [user, setUser] = useState();
    const [contract, setContract] = useState();
    useEffect(()=>{
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(contractAddress, abi, provider);
        setContract(contract);
        console.log(contract);
        async function getOwner(){
            if(account === 0x62b8527b73563db0a3156c50c134904191106d3c) {
                const ownerA = await contract.getOwner();
                const a = ownerA.slice(1,4);
                const b = ownerA.slice(38,42);
                const c = a +"..."+b;
                console.log(a,"...",b);
                setOwner(c);
                setUser(true);
            }else if(account !== 0x62b8527b73563db0a3156c50c134904191106d3c){
                // const ownerA = await contract.getOwner();
                const a = account.slice(1,4);
                const b = account.slice(38,42);
                const c = a +"..."+b;
                console.log(a,"...",b);
                setOwner(c);
                setUser(false);
            }
        }
        getOwner();
    },[account])
  return (
    <div>
        {
            user ? 
            <div>
               <OwnersDesh />
            </div>
            :
            <div>
                <GuestDesh />
            </div>
        }
        <div>
           {owner}
        </div>
        <DashBoard />
    </div>
  )
}

export default Panel