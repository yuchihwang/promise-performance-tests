const { AsyncLocalStorage } = require('async_hooks');

function Namespace(als) {
  this.als = als;
}

createNamespace = (name) => {
  if (!process.mynamespaces) {
    process.mynamespaces = {};
  }
  process.mynamespaces[name] = new Namespace(new AsyncLocalStorage());
  return process.mynamespaces[name];
}

getNamespace = (name) => {
  return process.mynamespaces[name];
}

Namespace.prototype.set = function (key, value) {
  return this.als.getStore().set(key, value)
}

Namespace.prototype.get = function (key) {
  return this.als.getStore().get(key)
}

Namespace.prototype.run = function (fn) {
  return this.als.run(new Map(), fn);
}

module.exports = {
  createNamespace,
  getNamespace
}
