# Sand Datastore
Sand Client to Google Cloud Datastore.

## Config
`namespace` optional namespace for all `Kind`s created by this client

## API
### `sand.datastore.kind(kindName)`
Creates a client that saves a `Kind` of the specified `kindName`.

### `Kind.get(id[, callback])`
Get the kind with this id.

### `Kind.save(id, value[, callback])`
Saves the value with the id for this `Kind`

### `Kind.delete(id[, callback])`
Deletes the value at the specified key for this `Kind`

### `Kind.key`
Builds a `gcloud-node` compatible key for the specified id, including the namespace if configured.

## Depends on
* [sand.gcloud](https://github.com/pocketly/sand-gcloud)