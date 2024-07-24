import { numberToHex, getAddress, Address } from "viem";

export function bigintToAddress(value: bigint): Address {
  return getAddress(numberToHex(value, { size: 20 }));
}
