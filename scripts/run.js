const main = async () => {
    const coffeeContractFactory = await hre.ethers.getContractFactory("CoffeePortal");
    const coffeeContract = await coffeeContractFactory.deploy({
        value: hre.ethers.utils.parseEther("0.1")
    })
    await coffeeContract.deployed()
    console.log(`Contract Deployed In ${coffeeContract.address}`)
    // getContract balance
    let contractBalance = await hre.ethers.provide.getBalance(
        coffeeContract.address
    )
    console.log(`Contract Balance ${hre.ethers.utils.fromEther(contractBalance)}`)
    // buy coffee
    const coffeeTxn = await coffeeContract.buyCoffee(
        "This is Coffee #1",
        "Idris",
        ethers.utils.parseEther("0.001")
    )
    await coffeeTxn.wait()

    // contract balance what happend
    contractBalance = await hre.ethers.provide.getBalance(
        coffeeContract.address
    )
    console.log(`Contract Balance: ${hre.ethers.utils.fromEther(contractBalance)}`)
    let allCoffee = await coffeeContract.getAllCoffee()
    console.log(allCoffee)
}

const runMain = async () => {
    try{
        await main()
        process.exit(0)
    } catch(error){
        console.error(error)
        process.exit(1)
    }
}

runMain()