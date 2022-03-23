const { expect } = require("chai");
const { ethers } = require("hardhat");

function toWei(n) {
  return ethers.utils.parseUnits(n);
}

describe("Real Estate:", function () {
  let 
  owner,a1,a2,a3,
  real;
  it("Deploy :", async function () {
    [owner, a1,a2,a3] = await ethers.getSigners();
    const Real = await ethers.getContractFactory("RealEstate");
    real = await Real.deploy(owner.address, 5,toWei("0.1"),toWei("0.1"));
    await real.deployed();
  });
  it("request Add Property 1 :",async ()=>{
    await real.connect(a1).requestAddProperty(a1.address, 4, 5, "first","second","picture", {value: toWei("0.01")});
  });
  it("get Property Request 1:", async()=>{
    const [v1,v2,v3,v4,v5,v6] = await real.getPropertyRequested(1);
    // console.log(v1,v2,v3,v4,v5,v6);
  });
  it("get Property 1:", async()=>{
    const [v1,v2,v3,v4,v5,v6] = await real.getProperty(1);
    console.log(v1,v2,v3,v4,v5,v6);
  });
  it("approve Add property 1:", async()=>{
    await real.connect(owner).ApproveAddProperty(1, false);
  });
  it("get Property Request 1:", async()=>{
    const [v1,v2,v3,v4,v5,v6] = await real.getPropertyRequested(1);
    console.log(v1,v2,v3,v4,v5,v6);
  });
  it("request Add Property 2 :",async ()=>{
    await real.requestAddProperty(a1.address, 5, 6, "first2","second2","picture2");
  });
  it("get Property Request 2 :", async()=>{
    const [v1,v2,v3,v4,v5,v6] = await real.getPropertyRequested(2);
    console.log(v1,v2,v3,v4,v5,v6);
  });
  it("get Property 2 :", async()=>{
    const [v1,v2,v3,v4,v5,v6] = await real.getProperty(2);
    console.log(v1,v2,v3,v4,v5,v6);
  });
  it("approve Add property 2 :", async()=>{
    await real.connect(owner).ApproveAddProperty(2, true);
  });
  it("get Property Request 2.2 :", async()=>{
    const [v1,v2,v3,v4,v5,v6] = await real.getPropertyRequested(2);
    console.log(v1,v2,v3,v4,v5,v6);
  });
  it("get Property 2 :", async()=>{
    const [v1,v2,v3,v4,v5,v6] = await real.getProperty(1);
    console.log(v1,v2,v3,v4,v5,v6);
  });
  it("Sell Request :", async()=>{

  });
  it("Approve Sell:", async()=>{

  });
  it("buy : ", async ()=>{

  });
});
