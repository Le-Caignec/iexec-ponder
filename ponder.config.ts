import { createConfig } from "@ponder/core";
import { http } from "viem";
import { AppRegistryAbi } from "./abis/AppRegistry";
import { AppAbi } from "./abis/App";

export default createConfig({
  networks: {
    mainnet: {
      chainId: 1,
      transport: http(process.env.PONDER_RPC_URL_1),
    },
  },
  contracts: {
    AppRegistry: {
      network: "mainnet",
      abi: AppRegistryAbi, // Use the imported ABI here
      address: "0x799DAa22654128d0C64d5b79eac9283008158730",
      startBlock: 25455501,
      filter: {
        event: "Transfer",
      },
    },
    App: {
      network: "mainnet",
      abi: AppAbi,
      startBlock: 25455501,
    },
  },
});
