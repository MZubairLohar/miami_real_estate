//SPDX-License-Identifier: Corecis
pragma solidity ^0.8.0;
import "hardhat/console.sol";
contract RealEstate{
    // variables
    address public owner; 
    uint public PropertyNumber = 1;
    uint public pendingRequest = 1;
    uint public addPropertyFee;
    uint public sellPropertyFee;
    uint public transferPropertyFee;
    // struct
    struct Property{
        uint id;
        address CurrentOwner;
        uint area;
        uint price;
        string DocOne;
        string DocTwo;
        string Pictures;
    }
       struct Request{
        address CurrentOwner;
        uint area;
        uint price;
        string DocOne;
        string DocTwo;
        string Pictures;
    }
   
    // mappings
    mapping(uint => Property) properties;
    mapping(uint => Request) requests;
    mapping(uint => address) addPropertyRequester;
    mapping(uint => bool) requestSell;
    mapping(uint => bool) OnSell;
    mapping(uint => address) SellRequester;
    mapping(uint => uint) sellRequestPrice;
    mapping(uint => uint) Price;
    // constructor
    constructor(address payable _owner, uint _transferPropertyFee,uint _addPropertyFee, uint _sellPropertyFee){
        owner = _owner;
        transferPropertyFee = _transferPropertyFee;
        addPropertyFee = _addPropertyFee;
        sellPropertyFee = _sellPropertyFee;
    }
    // modifier 

    modifier onlyOwner(){
        require(msg.sender == owner);
        _;
    }   

    receive() external payable {}
    fallback() external {}

    // Read functions
    function getOwner()public view returns (address){
        return owner;
    }

    function getPropertyRequested(uint _pendingId)
            public view returns 
            (address ,uint,uint,string memory,
            string memory,string memory){
       return(
            requests[_pendingId].CurrentOwner,
            requests[_pendingId].area,
            requests[_pendingId].price,
            requests[_pendingId].DocOne,
            requests[_pendingId].DocTwo,
            requests[_pendingId].Pictures);
    }
        function getProperty(uint _pendingId)
            public view returns 
            (uint, address ,uint,uint,string memory,
            string memory,string memory){
       return(
            properties[_pendingId].id,
            properties[_pendingId].CurrentOwner,
            properties[_pendingId].area,
            properties[_pendingId].price,
            properties[_pendingId].DocOne,
            properties[_pendingId].DocTwo,
            properties[_pendingId].Pictures);
    }
    function getSellRequest(uint _perpertyId) public view returns(bool){
        return requestSell[_perpertyId];
    }
    function getOnSell(uint _perpertyId) public view returns(bool, uint){
        return (OnSell[_perpertyId],Price[_perpertyId] );
    }

    // Write functions 
   
    function requestAddProperty(
        address _CurrentOwner,
        uint _area,
        uint _price,
        string memory _docOne,
        string memory _docTwo,
        string memory _picture)
        public payable{
        require( msg.value >= addPropertyFee,"You need to pay the fee");  
        requests[pendingRequest] = Request(_CurrentOwner, _area, _price, _docOne, _docTwo, _picture);
        (payable(address(this))).transfer(msg.value);
        addPropertyRequester[pendingRequest] = msg.sender;
        pendingRequest++;
    }
    
    function SellRequest(uint _propertyId, uint _price, string memory _picture)public payable{
        require(sellPropertyFee == msg.value, "please Add Valid Amount");
        requestSell[_propertyId];
        SellRequester[_propertyId] = msg.sender;
        sellRequestPrice[_propertyId] = _price;
        properties[_propertyId].Pictures = _picture;
        (payable(address(this))).transfer(msg.value);
    }
   
    function buy(uint _propertyId)public payable{
        require(Price[_propertyId] == msg.value, "please Add Valid Amount");
        OnSell[_propertyId] = false;
        uint fee = (msg.value)*transferPropertyFee/100;
        uint payment = msg.value - fee;
        (payable(owner)).transfer(fee);
        (payable(SellRequester[_propertyId])).transfer(payment);
        SellRequester[_propertyId] = address(0);
        properties[_propertyId].CurrentOwner = msg.sender;
        properties[_propertyId].price = (payment+fee);
    }   
    // only Owner
    function ApproveAddProperty(
        uint _pendingRequest, bool _approval)
        public onlyOwner{
                if(_approval == true){
                    properties[PropertyNumber] = Property(
                        PropertyNumber,
                        requests[_pendingRequest].CurrentOwner,
                        requests[_pendingRequest].area,
                        requests[_pendingRequest].price,
                        requests[_pendingRequest].DocOne,
                        requests[_pendingRequest].DocTwo,
                        requests[_pendingRequest].Pictures);
                        requests[_pendingRequest] = Request(
                        address(0),0,0,"","","");
                        addPropertyRequester[_pendingRequest] = address(0);
                        (payable(owner)).transfer(addPropertyFee);
                        PropertyNumber++;
                        delete addPropertyRequester[_pendingRequest];
                        delete requests[_pendingRequest];
                }else if(_approval == false){
                    requests[_pendingRequest] = Request(
                        address(0),0,0,"","","");
                    (payable(addPropertyRequester[_pendingRequest])).transfer(addPropertyFee);
                    delete addPropertyRequester[_pendingRequest];
                    delete requests[_pendingRequest];
                }
    } 
    function approveSell(uint _pendingSellId, bool _approval)public onlyOwner{
        if(_approval == true){
            OnSell[_pendingSellId] = true;
            Price[_pendingSellId] = sellRequestPrice[_pendingSellId];
            (payable(owner)).transfer(sellPropertyFee);
            delete requests[_pendingSellId];
            delete SellRequester[_pendingSellId];
            delete sellRequestPrice[_pendingSellId];
        }else if(_approval == false){
            (payable(SellRequester[_pendingSellId])).transfer(sellPropertyFee);
            delete requests[_pendingSellId];
            delete SellRequester[_pendingSellId];
            delete sellRequestPrice[_pendingSellId];
        }
    }
    function  changetransferPropertyFee(uint _newFee) public onlyOwner {
        transferPropertyFee = _newFee;
    }
    function ChangeOwner(address _owner)public onlyOwner{
        owner = _owner;
    }
}