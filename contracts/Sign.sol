pragma solidity >=0.4.21 <0.7.0;
contract Sign{
    struct Document {
        uint timestamp;
        bytes doc_hash;
        address[] signatures;
    }
   
}