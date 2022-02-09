"use strict";

// const { AsyncLocalStorage } = require('async_hooks');
// const namespace = new AsyncLocalStorage();

const { getNamespace, createNamespace } = require('./async-hook-cls');
createNamespace('hello');

const parallel = require("../lib/parallel-promises.js");
const measure = require("../lib/measure-promises.js");

getNamespace('hello').run(() => {
  measure(parallel, "b", "c")
    .then(time => {
      console.log(`Time(${require('path').basename(__filename)}): ${time} ms.`);
    })
    .catch(reason => console.error(reason));
})
