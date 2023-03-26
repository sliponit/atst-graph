# Subgraph for attestation station

Heavily inspired from https://github.com/graphprotocol/hardhat-graph-demo

Applied to https://community.optimism.io/docs/governance/attestation-station/#

## Run locally
1. start local hardhat node `npm run hardhat-local`
2. start docker for the graph `npm run graph-local`
3. deploy contract locally `npx hardhat deploy --contract-name AttestationStation`
4. Create a subgraph on the local graph node by running `npm run create-local`
5. Run subgraph `npm run deploy-local -- --network localhost`
