// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     <https://www.apache.org/licenses/LICENSE-2.0>
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

"use strict";

const cp = require('child_process');
const fs = require('fs');

// const BENCHMARKS = fs.readdirSync('src')
//   .filter(filename => filename.endsWith('.js'))
//   .map(filename => `./src/${filename}`);
// BENCHMARKS.sort();

const BENCHMARKS = [
  'parallel-promises-cls-legacy.js',
  'parallel-promises-cls-hooked.js',
  'parallel-promises-cls-hooked-min.js',
  'parallel-promises-async-hook.js',
  'parallel-promises-es2015-native.js'
].map(filename => `./src/${filename}`);

try {
  for (const benchmark of BENCHMARKS) {
    const p = cp.spawnSync(process.execPath, [ benchmark ]);
    console.log(p.stdout.toString().trim());
  }
} catch (err) {
  console.error(err);
}
