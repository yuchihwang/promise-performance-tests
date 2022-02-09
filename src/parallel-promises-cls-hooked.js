"use strict";

var namespace = require('cls-hooked').createNamespace('com.houzz');
require('cls-es6-promise')(namespace);

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
require('cls-bluebird')(namespace);
require('any-promise/register/bluebird');


// ABOVE is from jukwaa-core src/middlewares/context/index.js


const parallel = require("../lib/parallel-promises.js");
const measure = require("../lib/measure-promises.js");

measure(parallel, "b", "c")
  .then(time => {
    console.log(`Time(${require('path').basename(__filename)}): ${time} ms.`);
  })
  .catch(reason => console.error(reason));
