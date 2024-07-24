import { numberToHex, getAddress, Address } from "viem";

export function bigintToAddress(value: number | bigint): Address {
  return getAddress(numberToHex(value));
}
