import { createConfig } from "@ponder/core";
import { http } from "viem";
import { AppRegistryAbi } from "./abis/AppRegistry";

export default createConfig({
  networks: {
    bellecour: {
      chainId: 134,
      transport: http(process.env.PONDER_RPC_URL_1),
    },
  },
  contracts: {
    AppRegistry: {
      network: "bellecour",
      abi: AppRegistryAbi, // Use the imported ABI here
      address: "0x799DAa22654128d0C64d5b79eac9283008158730",
      startBlock: 25455501,
      filter: {
        event: "Transfer",
      },
    },
  },
});
