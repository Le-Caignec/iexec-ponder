import { ponder } from "@/generated";
import { bigintToAddress } from "./utils/utils";

ponder.on("AppRegistry:Transfer", async ({ event, context }) => {
  const { TransferEvent } = context.db;
  const { client } = context;
  const { App } = context.contracts;

  const owner = await client.readContract({
    abi: App.abi,
    address: bigintToAddress(event.args.tokenId), // need to convert token ID into address
    functionName: "owner",
  });
  const name = await client.readContract({
    abi: App.abi,
    address: bigintToAddress(event.args.tokenId), // need to convert token ID into address
    functionName: "m_appName",
  });

  const oracleSourceCode = "test";
  await TransferEvent.create({
    id: event.args.tokenId,
    data: {
      owner,
      name,
      oracleSourceCode,
    },
  });
});
