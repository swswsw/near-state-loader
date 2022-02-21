# Smart Contract State Loader/Unloader

`near-state-loader` is a useful development testing tool.  
During testing, we often needs to setup our smart contract with a certain state.  This tool can help us setup the state before the testing.  

### Example scenarios:

- Consecutive testing may require different states.  
- some testing requires an incorrect state, which cannot be achieved easily by simply exercising the contract.
- sometimes state may contain state's from previous version of contract.
- taking the state from a mainnet contract, and put it on a contract on testnet to do the test.  (syncing state between mainnet and testnet)
- testing inter-contract call behavior with 3rd-party contract.  when our contract needs to interact with a third-party contract 2.  but we want to test how it will behave at a certain state, we can deploy contract 2 on testnet and fill it with the state we want to test.  

### A concrete example scenario:

Let's say we want to test the Counter contract in assemblyscript ( https://github.com/near-examples/counter/).  We want to test to see how it behaves when counter is at threshold of overflow.  We can deploy the contract and call increment() a gazillion times until it reaches the number we wish to test.  Or we can use `near-state-loader` to set the counter in the contract before we deploy the Counter contract to test it.  


### Features:
- allowing downloading the current state.  clean the state.  as well as restore the state after testing
- Change the state according to a json (setup state for testing)
- Empty state
- Download state (for restore or syncing)
- Restore state (restore state after testing)

using https://github.com/Learn-NEAR/starter--near-sdk-as as skeleton for the project


### Why use it?

Unit test and mocking can only gets us so far.  We do want to test it on environment as close as possible (eg. testnet).  We can use this to rapidly set the state of the contract to be what we wish it to be to make tests easier.

### How does it work?



### Work in progress / Future plan
- provide this as a javascript library for testing using javascript.  Currently the example provided was to run this as a shell script as part of your test script
- support typed json
- support the class member storage in AS.  There are 2 ways to store in storage.  1. using storage.set()  2. stored as a AS class member.  Currently, the library only supports state stored using storage.set().  We will like to expand the support to the class member.  This might be done by generated code.

