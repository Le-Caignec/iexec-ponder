import { ponder } from "@/generated";
import { bigintToAddress } from "./utils/utils";
import { AppAbi } from "../abis/App";

ponder.on("AppRegistry:Transfer", async ({ event, context }) => {
  const { db, network, client, contracts } = context;
  const appAddress = bigintToAddress(event.args.tokenId);

  const owner = await client.readContract({
    abi: AppAbi,
    address: bigintToAddress(event.args.tokenId), // need to convert token ID into address
    functionName: "owner",
  });
  const name = await client.readContract({
    abi: AppAbi,
    address: bigintToAddress(event.args.tokenId), // need to convert token ID into address
    functionName: "m_appName",
  });

  //Call To Market API

  const oracleSourceCode = "testRobin";
  await db.App.upsert({
    id: appAddress,
    create: {
      owner: owner,
      name: name,
      oracleSourceCode,
    },
    update: {
      owner: owner,
      name: name,
      oracleSourceCode,
    },
  });
});
