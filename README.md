# Smart Contract State Loader/Unloader

`near-state-loader` is a useful development testing tool.  
During testing, we often needs to setup our smart contract with a certain state.  This tool can help us setup the state before the testing.  

Example scenarios:

- Consecutive testing may require different states.  
- some testing requires an incorrect state, which cannot be achieved easily by simply exercising the contract.
- sometimes state may contain state's from previous version of contract.
- taking the state from a mainnet contract, and put it on a contract on testnet to do the test.  (syncing state between mainnet and testnet)

features:
- allowing downloading the current state.  clean the state.  as well as restore the state after testing
- Change the state according to a json (setup state for testing)
- Empty state
- Download state (for restore or syncing)
- Restore state (restore state after testing)

using https://github.com/Learn-NEAR/starter--near-sdk-as as skeleton for the project


