import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 592,
  SHIDEN = 336,
  ETHMAINNET = 1,
  BSC = 56,
  FTM = 250,
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT,
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP,
}

// Spooky's UniswapV2Factory
// https://ftmscan.com/address/0x152ee697f2e276fa89e96742e9bb9ab1f2e61be3#code
// export const FACTORY_ADDRESS = '0x152eE697f2E276fA89E96742e9bB9aB1F2E61bE3'

// Arthswap's PancakeFactory.
// https://blockscout.com/astar/address/0xA9473608514457b4bF083f9045fA63ae5810A03E/contracts
export const FACTORY_ADDRESS = '0xA9473608514457b4bF083f9045fA63ae5810A03E'

// Spooky's INIT_CODE_PAIR_HASH
// export const INIT_CODE_HASH = '0xcdf2deca40a0bd56de8e3ce5c7df6727e5b1bf2ac96f283fa9c4b3e6b42ea9d2'

// Arthswap's INIT_CODE_PAIR_HASH
export const INIT_CODE_HASH = '0x613b36de6401276e4d938ad0db4063490e66bb3ab2e4aec17cab78a15ea7a0b6'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _998 = JSBI.BigInt(998)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256',
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'),
}
