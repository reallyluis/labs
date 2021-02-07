const fs = require("fs");
const loader = require("@assemblyscript/loader");
const imports = {
  "assembly/index": {
    declaredImportedFunction: function() { }
  }
};
const wasmModule = loader.instantiateSync(fs.readFileSync(__dirname + "/build/optimized.wasm"), imports);
module.exports = wasmModule.exports;
