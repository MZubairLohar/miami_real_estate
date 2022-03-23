import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import house from '../assets/images/house.jpg'
import Panel from "./Panel";
import "./home.css";
function Home() {

  const {
    active,
  } = useWeb3React();
  const [balance, setBalance] = useState();


  return (
    <div>
      {
        active ? 
          <Panel/>
        :
        <div className="container">
          <div className="row">
            <div className="col-lg-3" >
              <h1 style={{marginTop: "200px", transform: "rotate(-90deg)"}}>
                Future Way Of Real Estate
              </h1>
              <h4 style={{marginTop: "5rem"}}>
                Blockchain base real estate platform
              </h4>
              <h5>
                Buy & sell you House on Ethereum Blockchain 
              </h5>
            </div>
            <div className="col-lg-9 frame">
              <div className="fade" ></div>
              <img className="imag" style={{height:"90vh", width:"100wv"}} src={house} />            
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default Home;
