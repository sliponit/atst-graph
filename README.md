# Subgraph for the AttestationStation on Optimism

This project makes the AttestationStation data available on the graph.

The AttestationStation is a recommendation system on-chain proposed by optimism.

Indexing this data in the graph allows for developers to query it off-chain using graphQL

## Tehchnical details
The code is heavily inspired from https://github.com/graphprotocol/hardhat-graph-demo

We apply it to the smart contract AttestationStation copied from https://github.com/ethereum-optimism/optimism/blob/develop/packages/contracts-periphery/contracts/universal/op-nft/AttestationStation.sol. For an explanation on the AttestionStation see ttps://community.optimism.io/docs/governance/attestation-station/#

All this works locally. In order to deploy the graph and make it available online, one would need to deploy the code on the graph using a command like `graph deploy --studio atst-subgraph --network optimism`



## Run locally
1. start local hardhat node `npm run hardhat-local`
2. start docker for the graph `npm run graph-local`
3. deploy contract locally `npx hardhat deploy --contract-name AttestationStation`
4. Create a subgraph on the local graph node by running `npm run create-local`
5. Run subgraph locally `npm run deploy-local -- --network localhost`
