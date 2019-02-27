pragma solidity ^0.5.0;

contract HelloWorld {
    
    string public name;

    constructor() public {
    	name = "Hola Mundo!";
    }
    
    function setValue(string memory _name) public returns (string memory){
        name = _name;
        return name;
    }
    
    function getValue() public view returns (string memory){
        return name;
    }
    
}