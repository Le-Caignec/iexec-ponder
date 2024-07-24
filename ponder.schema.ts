import { createSchema } from "@ponder/core";

export default createSchema((p) => ({
  App: p.createTable({
    id: p.string(),
    name: p.string(),
    owner: p.string(),
    oracleSourceCode: p.string(),
  }),
}));
