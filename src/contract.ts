import {
  Pregnant as PregnantEvent,
  Transfer as TransferEvent,
  Approval as ApprovalEvent,
  Birth as BirthEvent,
  ContractUpgrade as ContractUpgradeEvent
} from "../generated/Contract/Contract"
import {
  Pregnant,
  Transfer,
  Approval,
  Birth,
  ContractUpgrade
} from "../generated/schema"

export function handlePregnant(event: PregnantEvent): void {
  let entity = new Pregnant(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.matronId = event.params.matronId
  entity.sireId = event.params.sireId
  entity.cooldownEndBlock = event.params.cooldownEndBlock

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBirth(event: BirthEvent): void {
  let entity = new Birth(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.kittyId = event.params.kittyId
  entity.matronId = event.params.matronId
  entity.sireId = event.params.sireId
  entity.genes = event.params.genes

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleContractUpgrade(event: ContractUpgradeEvent): void {
  let entity = new ContractUpgrade(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newContract = event.params.newContract

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
