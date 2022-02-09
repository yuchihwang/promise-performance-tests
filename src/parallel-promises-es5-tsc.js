"use strict";

const parallel = require("../lib/parallel-es5.js");
const measure = require("../lib/measure-promises.js");

measure(parallel, "b", "c")
  .then(time => {
    console.log(`Time(parallel-promises-es5-native): ${time} ms.`);
  })
  .catch(reason => console.error(reason));
