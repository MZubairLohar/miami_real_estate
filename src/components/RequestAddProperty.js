import React,{useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useWeb3React } from '@web3-react/core';
import { BigNumber, ethers } from "ethers";
import {contractAddress,abi} from '../utils/contractDetails';
import { getSigner,toWei,toBN, formatValue, } from "../utils";
import {} from "big-number"
const RequestAddProperty = () => {
    const {account, library} = useWeb3React();
    const [contract, setContract] = useState();
    useEffect(()=>{
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contracts = new ethers.Contract(contractAddress, abi, provider);
        setContract(contracts);
        console.log(contracts);
        
    },[account])
    async function onSubmit({name, area, price, DocOne, DocTwo, picture}) {
        console.log(name, area, price, DocOne, DocTwo, picture);
        
        // const signer = getSigner(library, account)
        const pp = (ethers.utils.parseUnits(price, 18)).toString();
        console.log(pp);
        // contract.connect(signer).requestAddProperty(
        //     name,area,price,DocOne,DocTwo,picture,{value: amount}
        //     ).then((res)=>{
        //     console.log(res);
        //     }).catch((err)=>{
        //         console.log(err);
        //     });
        // await daiWithSigner.requestAddProperty(name,area,price,DocOne,DocTwo,picture,{value: pp});
    }
     // form validation rules 
     const validationSchema = Yup.object().shape({
        name: Yup.string().required('Username is required'),
        // password: Yup.string().required('Password is required')
    });

    const formOptions = { resolver: yupResolver(validationSchema) };
    // get functions to build form with useForm() hook
    const { register, handleSubmit } = useForm(formOptions);
  return (
        <div className='card m-lg-auto' style={{width:"40%", height:"800px", padding:"50px"}}>
                <h1>Request to Add Property</h1>
                <form className='' onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group ">
                        <label htmlFor="text">your Name</label>
                        <input name='name' type="text"  {...register('name')}  className={ `form-control clientForm `}  placeholder="your Name" />
                        {/* <div className="invalid-feedback">{errors.name?.message}</div> */}
                    </div>
                    <div className="form-group">
                        <label htmlFor="area">Area of property</label>
                        <input type="text" {...register('area')}  className="form-control clientForm" placeholder="Area of property" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input type="text" {...register('price')}  className="form-control clientForm" placeholder="Price" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="DocOne">Document One</label>
                        <input type="text" {...register('DocOne')} className="form-control clientForm" placeholder="Document One" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="DocTwo">Document Two</label>
                        <input type="text"  {...register('DocTwo')}  className="form-control clientForm"  placeholder="Document Two" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="picture">Picture</label>
                        <input type="text" {...register('picture')}  className="form-control clientForm" placeholder="Picture" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
  )
}

export default RequestAddProperty