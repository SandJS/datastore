"use strict";

const promisify = require('callback-and-promise');

class Kind {

  constructor(kind, namespace) {
    if (!kind) {
      throw new Error('Kind is required, but none was given.');
    }
    this.kind = kind;
    this.namespace = namespace;
    this._dset = sand.gcloud.datastore();
  }

  get(id, callback) {
    let self = this;
    return promisify(function(id, callback) {
      id = self.key(id);
      self._dset.get(id, function (err, entity) {
        if (err) {
          return callback(err);
        }
        if (entity && entity.data) {
          entity = entity.data;
        }
        callback(null, entity);
      });
    }).apply(null, arguments);
  }

  save(id, value, callback) {
    let self = this;
    return promisify(function(id, value, callback) {
    sand.datastore.log(id, value);
      id = self.key(id);
      self._dset.save({
        key: id,
        data: value
      }, callback);
    }).apply(null, arguments);
  }

  delete(id, callback) {
    let self = this;
    return promisify(function(id, callback) {
      id = self.key(id);
      self._dset.delete(id, callback);
    }).apply(null, arguments);
  }

  key(id) {
    let keyData = {
      namespace: this.namespace || sand.datastore.config.namespace || undefined,
      path: [this.kind, id]
    };

    return this._dset.key(keyData);
  }
}

module.exports = Kind;