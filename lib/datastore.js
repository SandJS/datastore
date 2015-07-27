"use strict";

const SandGrain = require('sand-grain');
const co = require('co');
const Kind = require('./Kind');

class Datastore extends SandGrain {

  constructor() {
    super();
    this.name = this.configName = 'datastore';
    this.defaultConfig = require('./default');
    this.version = require('../package').version;
  }

  init(config, done) {
    super.init(config);
    if (!sand.gcloud) {
      throw new Error('sand.gcloud is not loaded yet!');
    }
    done();
  }

  kind(kind) {
    return new Kind(kind)
  }

}

module.exports = Datastore;

Datastore.Kind = Kind;