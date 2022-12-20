// Typescript type definitions for cardanocli-js

export default class CardanocliJs {
  constructor(options: ConstructorOptions);

  queryProtocolParameters(): any;
  queryTip(): QueryTip;
  queryStakeAddressInfo(address: string): StakeAddressInfo[];
  queryUtxo(address: string): Utxo[];

  addressKeyGen(account: string): Account;

  stakeAddressKeyGen(account: string): Account;
  stakeAddressBuild(account: string): string;

  addressBuild(
    account: string,
    options: AddressBuildOptions
  ): string;
  addressKeyHash(account: string): string;
  addressInfo(address: string): AddressInfo;
  addressBuildScript(script: any): string;

  wallet(account: string): Wallet;

  pool(poolName: string): Pool;

  stakeAddressRegistrationCertificate(account: string): string;
  stakeAddressDeregistrationCertificate(accout: string): string;
  stakeAddressDelegationCertificate(account: string, poolId: string): string;
  stakeAddressKeyHash(account: string): string;

  nodeKeyGenKES(poolName: string): Account;
  nodeKeyGen(poolName: string): Account;
  nodeIssueOpCert(poolName: string, kesPeriod: number): string;
  nodeKeyGenVRF(poolName: string): Account;
  nodeNewCounter(poolName: string, counter: string): string;

  stakePoolId(poolName: string): string;
  stakePoolMetadataHash(metadata: string): string;
  stakePoolRegistrationCertificate(
    poolName: string,
    options: StakePoolRegistrationOptions
  ): string;
  stakePoolDeregistrationCertificate(poolName: string, epoch: number): string;

  transactionBuildRaw(options: Transaction): string;
  transactionBuild(options: Transaction): string;
  transactionCalculateMinFee(
    options: CalculateMinFeeOptions
  ): number;
  transactionPolicyid(script: any): string;
  transactionHashScriptData(script: any): string;
  transactionSign(options: TransationSignOptions): string;
  transactionWitness(options: TransactionWitnessOptions): string;
  transactionAssemble(options: TransactionAssembleOptions): string;
  transactionCalculateMinValue(value: number): number;
  transactionCalculateMinRequiredUtxo(address: string, value: any): number;
  transactionSubmit(tx: string): string;
  transactionTxid(options: TransactionViewOptions): string;
  transactionView(options: TransactionViewOptions): string;

  KESPeriod(): number;
  getDownloadUrl(filePath: string): string;

  toLovelace(ada: number): number;
  toAda(lovelace: number): number;
}

export interface ConstructorOptions {
  shelleyGenesisPath: string;
  socketPath?: string;
  cliPath?: string;
  dir?: string;
  era?: string;
  network?: string;
  httpProvider?: string;
}

export interface AddressBuildOptions {
  paymentVkey?: string;
  stakeVkey?: string;
  paymentScript?: string;
  stakeScript?: string;
}

export interface StakePoolRegistrationOptions {
  pledge: number;
  margin: number;
  cost: number;
  url: string;
  metaHash: string;
  rewardAccount: string;
  owners: string[];
  relays: any[];
}

export interface CalculateMinFeeOptions {
  txBody: string;
  txIn: TxIn[];
  txOut: TxOut[];
  witnessCount: number;
}

export interface TransationSignOptions {
  signingKeys: string[];
  txBody: string;
}

export interface TransactionWitnessOptions {
  txBody: string;
  signingKey: string;
}

export interface TransactionAssembleOptions {
  txBody: string;
  witnessFiles: string[];
}

export interface TransactionViewOptions {
  txBody?: string;
  txFile?: string;
}

export interface Transaction {
  txIn: TxIn[];
  txOut: TxOut[];
  txInCollateral?: TxInCollateral[];
  withdrawals?: Withdrawal[];
  certs?: Certificate[];
  fee?: number;
  mint?: Mint[];
  auxScript?: any;
  metadata?: any;
  invalidBefore?: number;
  invalidAfter?: number;
  scriptInvalid?: boolean;
}

export interface QueryTip {
  epoch: number;
  hash: string;
  slot: number;
  block: number;
  era: string;
  syncProgress: string;
}

export interface Wallet {
  name: string;
  paymentAddr: string;
  stakingAddr: string;
  balance: () => {
    utxo: Utxo[];
    value: any;
  };
  reward: () => StakeAddressInfo | string;
}

export interface Pool {
  name: string;
  id: string;
}

export interface StakeAddressInfo {
  address: string;
  rewardAccountBalance: number;
  delegation: string;
}

export interface AddressInfo {
  address: string;
  era: string;
  encoding: string;
  type: string;
  base16: string;
}

export interface TxIn {
  txHash: string;
  txId: number;
  script?: any;
  datum?: any;
  redeemer?: any;
  executionUnits?: any;
}

export interface TxOut {
  address: string;
  value: any;
  datumHash?: string;
}

export interface TxInCollateral {
  txHash: string;
  txId: string;
}

export interface Withdrawal {
  stakingAddress: string;
  reward: number;
  script: any;
  datum: any;
  redeemer: any;
  executionUnits: any;
}

export interface Certificate {
  cert: string;
  script: any;
  datum: any;
  redeemer: any;
  executionUnits: any;
}

export interface Mint {
  action: string;
  quantity: string;
  asset: string;
  script: any;
  datum: any;
  redeemer: any;
  executionUnits: any;
}

export interface Utxo {
  txHash: string;
  txId: number;
  value: any;
}

export interface Account {
  vkey: string;
  skey: string;
  counter?: string;
}
