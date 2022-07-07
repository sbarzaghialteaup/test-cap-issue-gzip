# Getting Started
The OData service answer with:
```
[cds] - POST /catalog/createRecords {
  RECORDS: [
    {
      BELNR: '14',
      DOCLN: '12',
      GJAHR: 12,
      RBUKRS: '12',
      RCLNT: '12',
      RLDNR: '12'
    }
  ]
}
[cds] - DeserializationError: Error while deserializing payload
    at BufferedWriter.<anonymous> (/home/sbarzaghi/test/test-cap-issue-gzip/node_modules/@sap/cds/libx/_runtime/cds-services/adapter/odata-v4/okra/odata-server/deserializer/DeserializerFactory.js:232:18)
    at BufferedWriter.emit (events.js:400:28)
    at BufferedWriter.<anonymous> (/home/sbarzaghi/test/test-cap-issue-gzip/node_modules/@sap/cds/libx/_runtime/cds-services/adapter/odata-v4/okra/odata-server/utils/BufferedWriter.js:32:12)
    at BufferedWriter.emit (events.js:412:35)
    at finish (internal/streams/writable.js:657:10)
    at processTicksAndRejections (internal/process/task_queues.js:82:21) {
  _rootCause: SyntaxError: Unexpected end of JSON input
      at JSON.parse (<anonymous>)
      at ResourceJsonDeserializer.deserializeActionParameters (/home/sbarzaghi/test/test-cap-issue-gzip/node_modules/@sap/cds/libx/_runtime/cds-services/adapter/odata-v4/okra/odata-server/deserializer/ResourceJsonDeserializer.js:209:21)
      at /home/sbarzaghi/test/test-cap-issue-gzip/node_modules/@sap/cds/libx/_runtime/cds-services/adapter/odata-v4/okra/odata-server/deserializer/DeserializerFactory.js:44:37
      at BufferedWriter.<anonymous> (/home/sbarzaghi/test/test-cap-issue-gzip/node_modules/@sap/cds/libx/_runtime/cds-services/adapter/odata-v4/okra/odata-server/deserializer/DeserializerFactory.js:213:28)
      at BufferedWriter.emit (events.js:400:28)
      at BufferedWriter.<anonymous> (/home/sbarzaghi/test/test-cap-issue-gzip/node_modules/@sap/cds/libx/_runtime/cds-services/adapter/odata-v4/okra/odata-server/utils/BufferedWriter.js:32:12)
      at BufferedWriter.emit (events.js:412:35)
      at finish (internal/streams/writable.js:657:10)
      at processTicksAndRejections (internal/process/task_queues.js:82:21),
  id: '1596255',
  level: 'WARNING',
  timestamp: 1657204663075
}
```

## To show the problem:

- clone this repo
- `cds watch`
- run the 1° post request in file `test.http`

## Problem setting JSON limit?

Try to comment this line from `server.js`, problem solved:
```
cds.on("bootstrap", (app) => {
  app.use(require("express").json({ limit: "10MB" }));  <---------------
  cds.serve("CatalogService").in(app).to("rest").at("rest");
});
```

