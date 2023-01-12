// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import "hardhat/console.sol";

contract CoffeePortal {
    uint256 totalCoffee;
    address payable public owner;

    event NewCoffee(
        address indexed from,
        uint256 timestamp,
        string message,
        string name
    );
    constructor() payable {
        console.log("Smart Contract");
        owner = payable(msg.sender);
    }
    // struct for the user
    struct Coffee {
        address giver;
        string message;
        string name;
        uint256 timestamp;
    }

    Coffee[] coffee;

    // function to get coffee
    function getTotalCoffee() public view returns(uint256) {
        return(totalCoffee);
    }
    // function buyCoffee
    function buyCoffee(string memory _message,string memory _name,uint256 _payAmount) public payable {
        require(_payAmount <= 0.001 ether,"Too Low!");
    }
}
