const js = import("./node_modules/basic-wasm/basic_wasm.js");
js.then(js => {
  js.greet("WebAssembly");
});