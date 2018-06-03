/**
 * Allow Node files to use ES Modules.
 */

require = require("esm")(module);
module.exports = require("./tests.js");