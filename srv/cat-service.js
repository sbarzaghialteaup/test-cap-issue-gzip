const cds = require("@sap/cds");

class CatalogService extends cds.ApplicationService {
  async init() {
    this.on("createRecords", await this.insertEtAcdoca);

    super.init();
  }

  async insertEtAcdoca(req) {
    const { EtAcdoca } = cds.entities;
    const RECORDS = req.data.RECORDS;

    console.log(`Records to be inserted ${RECORDS.length}`);

    try {
      await INSERT.into(EtAcdoca).entries(RECORDS);
    } catch (error) {
      console.error(error);
      throw error;
    }

    console.log(`Inserted ${req.data.RECORDS.length} records`);

    return JSON.stringify({ result: `Inserted ${RECORDS.length} records` });
  }
}

module.exports = CatalogService;
