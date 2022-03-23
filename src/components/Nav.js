import React, { useEffect } from 'react'
import Building from '../assets/images/building.png'
import { useWeb3React } from "@web3-react/core";
import { connectWallet } from "../utils/connectWallet";
import {contractAddress, abi} from '../utils/contractDetails'
// const { ethers } = require("ethers");

const Nav = (props) => {
    const {
        active,
        activate,
        deactivate
    } = useWeb3React();
//   useEffect(() => {
//     async function getContract(){
//         const provider = new ethers.providers.Web3Provider(window.ethereum);
//         const contract = new ethers.Contract(contractAddress, abi, provider);
//         console.log(contract);
//     }
//     getContract();
//   },[] )
  return (
    <div>
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img src={Building}  width='30' height='30' className='d-inline-block align-top' />
                    Miami Real Estate
                </a>
                <div className='ml-lg-auto'>
                    {
                        active?
                        <div>
                            <button
                                type="button" className="btn btn-primary"
                                style={{background :"primary ", border:"none"}}
                                onClick={()=>{
                                    connectWallet(deactivate, props.setErrorMessage);
                                }}
                            >
                                Connected
                            </button>
                        </div>
                        :
                        <div>
                            <button type="button" className="btn btn-primary"
                                onClick={()=>{
                                    connectWallet(activate, props.setErrorMessage);
                                }}
                            >
                                Connect Wallet 
                            </button> 
                        </div>    
                    }
                </div>
            </nav>
    </div>
  )
}

export default Nav