# Sand Datastore
Sand Client to Google Cloud Datastore.

## Config
`namespace` optional namespace for all `Kind`s created by this client

## `sand.datastore`
### `sand.datastore#kind(kindName)`
Creates a client that interacts with a `Kind` of the specified `kindName`.

## `class Kind`
### `Kind#get(id[, callback])`
Get the kind with this id.

### `Kind#save(id, value[, callback])`
Saves the value with the id for this `Kind`

### `Kind#delete(id[, callback])`
Deletes the value at the specified key for this `Kind`

### `Kind#key(id)`
Builds a `gcloud-node` compatible key for the specified id, including the namespace if configured.

## Depends on
* [sand.gcloud](https://github.com/pocketly/sand-gcloud)