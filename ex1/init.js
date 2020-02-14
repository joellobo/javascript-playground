const APP = require("./lib");

(function() {
  console.log("init-start");
  let sumOld = APP.sum.toString();

  console.log(`sumOld:${sumOld}`);

  console.log("init-end");
})();
