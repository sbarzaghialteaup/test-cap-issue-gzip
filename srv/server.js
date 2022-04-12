const cds = require("@sap/cds");

cds.on("bootstrap", (app) => {
  cds.serve("CatalogService").in(app).to("rest").at("rest");
});

module.exports = cds.server;
