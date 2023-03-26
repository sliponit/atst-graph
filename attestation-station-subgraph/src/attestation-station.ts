import { BigInt } from "@graphprotocol/graph-ts"
import {
  AttestationStation,
  AttestationCreated
} from "../generated/AttestationStation/AttestationStation"
import { AttestationData, Creator, About } from "../generated/schema"

export function handleAttestationCreated(event: AttestationCreated): void {
  let attestation = AttestationData.load(event.transaction.hash)
  if (!attestation) attestation = new AttestationData(event.transaction.hash)

  let creator = Creator.load(event.params.creator)
  if (!creator) creator = new Creator(event.params.creator)

  let about = About.load(event.params.about)
  if (!about) about = new About(event.params.about)

  // Entity fields can be set based on event parameters
  attestation.creator = event.params.creator
  attestation.about = event.params.about
  attestation.val = event.params.val.toHexString()
  attestation.key = event.params.key.toHexString()
  attestation.timestamp = event.block.timestamp

  // Entities can be written to the store with `.save()`
  attestation.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.attestations(...)
  // - contract.version(...)
}
