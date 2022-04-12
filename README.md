# Getting Started
The payload of the action is not inflated, error:
```
[cds] - POST /catalog/createRecords
[cds] - DeserializationError: Error while deserializing payload
    at BufferedWriter.<anonymous> (/home/sbarzaghi/test/test-cap-issue-gzip/node_modules/@sap/cds/libx/_runtime/cds-services/adapter/odata-v4/okra/odata-server/deserializer/DeserializerFactory.js:232:18)
    at BufferedWriter.emit (events.js:376:20)
    at BufferedWriter.<anonymous> (/home/sbarzaghi/test/test-cap-issue-gzip/node_modules/@sap/cds/libx/_runtime/cds-services/adapter/odata-v4/okra/odata-server/utils/BufferedWriter.js:32:12)
    at BufferedWriter.emit (events.js:388:22)
    at finish (internal/streams/writable.js:657:10)
    at processTicksAndRejections (internal/process/task_queues.js:82:21) {
  _rootCause: SyntaxError: Unexpected token  in JSON at position 0
      at JSON.parse (<anonymous>)
      at ResourceJsonDeserializer.deserializeActionParameters (/home/sbarzaghi/test/test-cap-issue-gzip/node_modules/@sap/cds/libx/_runtime/cds-services/adapter/odata-v4/okra/odata-server/deserializer/ResourceJsonDeserializer.js:209:21)
      at /home/sbarzaghi/test/test-cap-issue-gzip/node_modules/@sap/cds/libx/_runtime/cds-services/adapter/odata-v4/okra/odata-server/deserializer/DeserializerFactory.js:44:37
      at BufferedWriter.<anonymous> (/home/sbarzaghi/test/test-cap-issue-gzip/node_modules/@sap/cds/libx/_runtime/cds-services/adapter/odata-v4/okra/odata-server/deserializer/DeserializerFactory.js:213:28)
      at BufferedWriter.emit (events.js:376:20)
      at BufferedWriter.<anonymous> (/home/sbarzaghi/test/test-cap-issue-gzip/node_modules/@sap/cds/libx/_runtime/cds-services/adapter/odata-v4/okra/odata-server/utils/BufferedWriter.js:32:12)
      at BufferedWriter.emit (events.js:388:22)
      at finish (internal/streams/writable.js:657:10)
      at processTicksAndRejections (internal/process/task_queues.js:82:21),
  id: '1489449',
  level: 'WARNING',
  timestamp: 1649756026365
}
```

## To show the problem:

- clone this repo
- `cds watch`
- run the 2° post request in file `test.http`

## Workaround

Serve as REST service, look in `srv/server.js`, try to run the 4° post request in file `test.http`