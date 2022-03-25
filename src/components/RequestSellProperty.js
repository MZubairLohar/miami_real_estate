import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const RequestSellProperty = () => {
    function onSubmit({name, area, price, DocOne, DocTwo, picture}) {
        console.log(name, area, price, DocOne, DocTwo, picture);
        
    }
     // form validation rules 
     const validationSchema = Yup.object().shape({
        name: Yup.string().required('Username is required'),
        // password: Yup.string().required('Password is required')
    });

    const formOptions = { resolver: yupResolver(validationSchema) };
    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm(formOptions);
  return (
    <div>
        <h1>Request to Sell Property</h1>
                <form className=''>
                    <div className="form-group ">
                        <label htmlFor="TokenID">Property Id</label>
                        <input type="number" {...register('TokenID')} className="form-control clientForm" placeholder="Property Id" />
                    </div>
                    <div className="form-group ">
                        <label htmlFor="text">your Name</label>
                        <input name='name' type="text"  {...register('name')}  className={ `form-control clientForm `}  placeholder="your Name" />
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

export default RequestSellProperty