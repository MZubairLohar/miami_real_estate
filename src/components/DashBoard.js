import React,{useState,useEffect} from 'react';
import { useWeb3React } from '@web3-react/core';
import { ethers } from "ethers";
import {contractAddress,abi} from '../utils/contractDetails';
const DashBoard = () => {
    const {account} = useWeb3React();
    const [contract, setContract] = useState();
    useEffect(()=>{
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(contractAddress, abi, provider);
        setContract(contract);
    },[account])
  return (
      <div className='container'>
          <div className='row'>
            <div className='card m-lg-auto' style={{width:"40%", padding:"50px"}}>
                <h1>Request to Add Property</h1>
                <form className=''>
                    <div className="form-group ">
                        <label htmlFor="text">your Name</label>
                        <input type="email" className="form-control clientForm" id="name" aria-describedby="emailHelp" placeholder="your Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Area of property</label>
                        <input type="text" className="form-control clientForm" id="area" placeholder="Area of property" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Price</label>
                        <input type="text" className="form-control clientForm" id="Price" placeholder="Price" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Document One</label>
                        <input type="text" className="form-control clientForm" id="DocOne" placeholder="Document One" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Document Two</label>
                        <input type="text" className="form-control clientForm" id="DocTwo" placeholder="Document Two" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Picture</label>
                        <input type="text" className="form-control clientForm" id="picture" placeholder="Picture" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <div className='card m-lg-auto' style={{width:"40%", padding:"50px"}}>
                <h1>Request to Sell Property</h1>
                <form className=''>
                    <div className="form-group ">
                        <label htmlFor="text">your Name</label>
                        <input type="email" className="form-control clientForm" id="name" aria-describedby="emailHelp" placeholder="your Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Area of property</label>
                        <input type="text" className="form-control clientForm" id="area" placeholder="Area of property" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Price</label>
                        <input type="text" className="form-control clientForm" id="Price" placeholder="Price" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Document One</label>
                        <input type="text" className="form-control clientForm" id="DocOne" placeholder="Document One" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Document Two</label>
                        <input type="text" className="form-control clientForm" id="DocTwo" placeholder="Document Two" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Picture</label>
                        <input type="text" className="form-control clientForm" id="picture" placeholder="Picture" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
          </div>
      </div>
  )
}

export default DashBoard