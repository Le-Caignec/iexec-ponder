import { createSchema } from "@ponder/core";

export default createSchema((p) => ({
  TransferEvent: p.createTable({
    id: p.bigint(),
    name: p.string(),
    owner: p.string(),
    oracleSourceCode: p.string(),
  }),
}));
