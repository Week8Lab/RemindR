'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var imageSchema = _mongoose2.default.Schema({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  fileName: {
    type: String
  },
  accountId: {
    type: _mongoose2.default.Schema.Types.ObjectId,
    required: true
  }
}, { timestamps: true });

var skiptInit = process.env.NODE_ENV === 'development';
exports.default = _mongoose2.default.model('images', imageSchema, 'images', skiptInit);