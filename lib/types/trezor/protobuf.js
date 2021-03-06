"use strict";

// This file is auto generated from data/messages/message.json
var Enum_InputScriptType = Object.freeze({
  SPENDADDRESS: 0,
  SPENDMULTISIG: 1,
  EXTERNAL: 2,
  SPENDWITNESS: 3,
  SPENDP2SHWITNESS: 4
});
var Enum_OutputScriptType = Object.freeze({
  PAYTOADDRESS: 0,
  PAYTOSCRIPTHASH: 1,
  PAYTOMULTISIG: 2,
  PAYTOOPRETURN: 3,
  PAYTOWITNESS: 4,
  PAYTOP2SHWITNESS: 5
});
var Enum_AmountUnit = Object.freeze({
  BITCOIN: 0,
  MILLIBITCOIN: 1,
  MICROBITCOIN: 2,
  SATOSHI: 3
});
var Enum_DecredStakingSpendType = Object.freeze({
  SSGen: 0,
  SSRTX: 1
});
var Enum_CardanoAddressType = Object.freeze({
  BASE: 0,
  BASE_SCRIPT_KEY: 1,
  BASE_KEY_SCRIPT: 2,
  BASE_SCRIPT_SCRIPT: 3,
  POINTER: 4,
  POINTER_SCRIPT: 5,
  ENTERPRISE: 6,
  ENTERPRISE_SCRIPT: 7,
  BYRON: 8,
  REWARD: 14,
  REWARD_SCRIPT: 15
});
var Enum_CardanoCertificateType = Object.freeze({
  STAKE_REGISTRATION: 0,
  STAKE_DEREGISTRATION: 1,
  STAKE_DELEGATION: 2,
  STAKE_POOL_REGISTRATION: 3
});
var Enum_CardanoPoolRelayType = Object.freeze({
  SINGLE_HOST_IP: 0,
  SINGLE_HOST_NAME: 1,
  MULTIPLE_HOST_NAME: 2
});
var Enum_BackupType = Object.freeze({
  Bip39: 0,
  Slip39_Basic: 1,
  Slip39_Advanced: 2
});
var Enum_SafetyCheckLevel = Object.freeze({
  Strict: 0,
  PromptAlways: 1,
  PromptTemporarily: 2
});
var Enum_BinanceOrderType = Object.freeze({
  OT_UNKNOWN: 0,
  MARKET: 1,
  LIMIT: 2,
  OT_RESERVED: 3
});
var Enum_BinanceOrderSide = Object.freeze({
  SIDE_UNKNOWN: 0,
  BUY: 1,
  SELL: 2
});
var Enum_BinanceTimeInForce = Object.freeze({
  TIF_UNKNOWN: 0,
  GTE: 1,
  TIF_RESERVED: 2,
  IOC: 3
});
var Enum_RequestType = Object.freeze({
  TXINPUT: 0,
  TXOUTPUT: 1,
  TXMETA: 2,
  TXFINISHED: 3,
  TXEXTRADATA: 4,
  TXORIGINPUT: 5,
  TXORIGOUTPUT: 6
});
var Enum_FailureType = Object.freeze({
  Failure_UnexpectedMessage: 1,
  Failure_ButtonExpected: 2,
  Failure_DataError: 3,
  Failure_ActionCancelled: 4,
  Failure_PinExpected: 5,
  Failure_PinCancelled: 6,
  Failure_PinInvalid: 7,
  Failure_InvalidSignature: 8,
  Failure_ProcessError: 9,
  Failure_NotEnoughFunds: 10,
  Failure_NotInitialized: 11,
  Failure_PinMismatch: 12,
  Failure_WipeCodeMismatch: 13,
  Failure_InvalidSession: 14,
  Failure_FirmwareError: 99
});
var Enum_ButtonRequestType = Object.freeze({
  ButtonRequest_Other: 1,
  ButtonRequest_FeeOverThreshold: 2,
  ButtonRequest_ConfirmOutput: 3,
  ButtonRequest_ResetDevice: 4,
  ButtonRequest_ConfirmWord: 5,
  ButtonRequest_WipeDevice: 6,
  ButtonRequest_ProtectCall: 7,
  ButtonRequest_SignTx: 8,
  ButtonRequest_FirmwareCheck: 9,
  ButtonRequest_Address: 10,
  ButtonRequest_PublicKey: 11,
  ButtonRequest_MnemonicWordCount: 12,
  ButtonRequest_MnemonicInput: 13,
  _Deprecated_ButtonRequest_PassphraseType: 14,
  ButtonRequest_UnknownDerivationPath: 15,
  ButtonRequest_RecoveryHomepage: 16,
  ButtonRequest_Success: 17,
  ButtonRequest_Warning: 18,
  ButtonRequest_PassphraseEntry: 19,
  ButtonRequest_PinEntry: 20
});
var Enum_PinMatrixRequestType = Object.freeze({
  PinMatrixRequestType_Current: 1,
  PinMatrixRequestType_NewFirst: 2,
  PinMatrixRequestType_NewSecond: 3,
  PinMatrixRequestType_WipeCodeFirst: 4,
  PinMatrixRequestType_WipeCodeSecond: 5
});
var Enum_DebugSwipeDirection = Object.freeze({
  UP: 0,
  DOWN: 1,
  LEFT: 2,
  RIGHT: 3
});
var Enum_DebugLinkShowTextStyle = Object.freeze({
  NORMAL: 0,
  BOLD: 1,
  MONO: 2,
  BR: 4,
  BR_HALF: 5,
  SET_COLOR: 6
});
var Enum_LiskTransactionType = Object.freeze({
  Transfer: 0,
  RegisterSecondPassphrase: 1,
  RegisterDelegate: 2,
  CastVotes: 3,
  RegisterMultisignatureAccount: 4,
  CreateDapp: 5,
  TransferIntoDapp: 6,
  TransferOutOfDapp: 7
});
var Enum_Capability = Object.freeze({
  Capability_Bitcoin: 1,
  Capability_Bitcoin_like: 2,
  Capability_Binance: 3,
  Capability_Cardano: 4,
  Capability_Crypto: 5,
  Capability_EOS: 6,
  Capability_Ethereum: 7,
  Capability_Lisk: 8,
  Capability_Monero: 9,
  Capability_NEM: 10,
  Capability_Ripple: 11,
  Capability_Stellar: 12,
  Capability_Tezos: 13,
  Capability_U2F: 14,
  Capability_Shamir: 15,
  Capability_ShamirGroups: 16,
  Capability_PassphraseEntry: 17
});
var Enum_SdProtectOperationType = Object.freeze({
  DISABLE: 0,
  ENABLE: 1,
  REFRESH: 2
});
var Enum_RecoveryDeviceType = Object.freeze({
  RecoveryDeviceType_ScrambledWords: 0,
  RecoveryDeviceType_Matrix: 1
});
var Enum_WordRequestType = Object.freeze({
  WordRequestType_Plain: 0,
  WordRequestType_Matrix9: 1,
  WordRequestType_Matrix6: 2
});
var Enum_NEMMosaicLevy = Object.freeze({
  MosaicLevy_Absolute: 1,
  MosaicLevy_Percentile: 2
});
var Enum_NEMSupplyChangeType = Object.freeze({
  SupplyChange_Increase: 1,
  SupplyChange_Decrease: 2
});
var Enum_NEMModificationType = Object.freeze({
  CosignatoryModification_Add: 1,
  CosignatoryModification_Delete: 2
});
var Enum_NEMImportanceTransferMode = Object.freeze({
  ImportanceTransfer_Activate: 1,
  ImportanceTransfer_Deactivate: 2
});
var Enum_TezosContractType = Object.freeze({
  Implicit: 0,
  Originated: 1
});
var Enum_TezosBallotType = Object.freeze({
  Yay: 0,
  Nay: 1,
  Pass: 2
});