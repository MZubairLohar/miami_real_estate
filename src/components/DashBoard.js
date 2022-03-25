import React from 'react';
import FetchPropertyGuest from './FetchPropertyGuest';
import RequestAddProperty from './RequestAddProperty';
import RequestSellProperty from './RequestSellProperty';
const DashBoard = () => {
   
  return (
      <div>
      <div className='container'>
          <div className='row'>
              <RequestAddProperty />
            <div className='card m-lg-auto' style={{width:"40%", height:"800px", padding:"50px"}}>
              <RequestSellProperty />
            </div>
          </div>
      </div>
        <FetchPropertyGuest />
      </div>
  )
}

export default DashBoard