const cds = require("@sap/cds");

cds.on("bootstrap", (app) => {
  app.use(require("express").json({ limit: "10MB" }));
  cds.serve("CatalogService").in(app).to("rest").at("rest");
});

module.exports = cds.server;
