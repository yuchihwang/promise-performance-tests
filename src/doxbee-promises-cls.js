"use strict";

var namespace = require('cls-hooked').createNamespace('com.houzz');
// require('cls-es6-promise')(namespace);

// let regular Promise be CLS-aware
var original = Promise.prototype.then;
Promise.prototype.then = function(cb, eb) {
    if (namespace) {
        if (typeof cb === 'function') {
            cb = namespace.bind(cb);    // bind cb to the current namespace
        }
        if (typeof eb === 'function') {
            eb = namespace.bind(eb);    // bind eb to the current namespace
        }
    }
    return original.call(this, cb, eb);
};

// // patch request-promise and bluebird to support continuation-local-storage
// require('cls-bluebird')(namespace);
// require('any-promise/register/bluebird');


// ABOVE is from jukwaa-core src/middlewares/context/index.js

const doxbee = require("../lib/doxbee-promises.js");
const measure = require("../lib/measure-async.js");

(async () => {
  try {
    const time = await measure(doxbee, "b", "c");
    console.log(`Time(doxbee-promises-cls): ${time} ms.`);
  } catch (err) {
    console.error(err);
  }
})();
