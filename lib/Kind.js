"use strict";

class Kind {

  constructor(kind) {
    if (!kind) {
      throw new Error('Kind is required, but none was given.');
    }
    this.kind = (sand.datastore.config.kindPrefix ? sand.datastore.config.kindPrefix + ':' : '') + kind;
    this._dset = sand.gcloud.datastore();
  }

  get(id) {
    let self = this;
    id = this.key(id);

    return new Promise(function(resolve, reject) {
      self._dset.get(id, function(err, entity) {
        if(err) {
          return reject(err);
        }
        if (entity && entity.data) {
          entity = entity.data;
        }
        resolve(entity);
      });
    });
  }

  save(id, value) {
    let self = this;
    id = this.key(id);

    return new Promise(function(resolve, reject) {
      self._dset.save({
        key: id,
        data: value
      }, function(err, result) {
        if (err) {
          return reject(err);
        }
        resolve(result);
      });
    });
  }

  delete(id) {
    let self = this;
    id = this.key(id);

    return new Promise(function(resolve, reject) {
      self._dset.delete(id, function(err) {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  }

  key(id) {
    return this._dset.key([this.kind, id]);
  }
}

module.exports = Kind;