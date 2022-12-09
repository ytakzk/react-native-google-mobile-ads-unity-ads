"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MutatableParams = void 0;
var _deeps = require("./deeps");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
class MutatableParams {
  constructor(parentInstance) {
    _defineProperty(this, "_mutatableParams", void 0);
    _defineProperty(this, "_parentInstance", void 0);
    if (parentInstance) {
      this._mutatableParams = parentInstance._mutatableParams;
      this._parentInstance = parentInstance;
    } else {
      this._mutatableParams = {};
      this._parentInstance = this;
    }
  }
  set(param, value) {
    (0, _deeps.deepSet)(this._mutatableParams, param, value);
    return this._parentInstance;
  }
  get(param) {
    return (0, _deeps.deepGet)(this._mutatableParams, param, '.');
  }
  toJSON() {
    return Object.assign({}, this._mutatableParams);
  }
  validate() {
    // do nothing
  }
}
exports.MutatableParams = MutatableParams;
//# sourceMappingURL=MutatableParams.js.map