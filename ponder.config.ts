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
      address: "0xB1C52075b276f87b1834919167312221d50c9D16",
      startBlock: 27_000_000,
      filter: {
        event: "Transfer",
      },
    },
  },
});
