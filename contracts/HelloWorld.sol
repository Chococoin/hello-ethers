pragma solidity ^0.5.0;

contract HelloWorld {
    
    string public name;

    constructor() public {
    	name = "Hola Mundo!";
    }
    
    function setValue(string memory _name) returns (string){
        name = _name;
        return name;
    }
    
    function getValue() public constant returns (string){
        return name;
    }
    
}