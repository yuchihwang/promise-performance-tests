"use strict";

var namespace = require('cls-hooked').createNamespace('com.houzz');

const parallel = require("../lib/parallel-promises.js");
const measure = require("../lib/measure-promises.js");

measure(parallel, "b", "c")
  .then(time => {
    console.log(`Time(${require('path').basename(__filename)}): ${time} ms.`);
  })
  .catch(reason => console.error(reason));
