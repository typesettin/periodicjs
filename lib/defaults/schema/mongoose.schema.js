'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

module.exports = (modelName) => {
  return {
    id: ObjectId,
    entitytype: {
      type: String,
      default: modelName,
    },
    _attributes: Schema.Types.Mixed,
    entity_attributes: Schema.Types.Mixed,
    contenttypeattributes: Schema.Types.Mixed,
    extensionattributes: Schema.Types.Mixed,
    random: {
      type: Number,
      sparse: true,
    },
    createdat: {
      type: Date,
      'default': Date.now,
      index: true,
    },
    updatedat: {
      type: Date,
      'default': Date.now,
      index: true,
    },
  };
};
