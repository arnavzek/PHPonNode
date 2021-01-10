/**
 *
 */
class ExecPHP {
  /**
   *
   */
  constructor() {
    this.phpFolder = __dirname + "\\public";
  }
  /**
   *
   */
  parseFile(fileName, callback) {
    if (!fileName) fileName = "index.php";
    var realFileName = this.phpFolder + fileName.replace(/\//gi, "\\");

    console.log("parsing file: " + realFileName);

    var exec = require("child_process").exec;
    var cmd = "php " + realFileName;

    exec(cmd, function (error, stdout, stderr) {
      callback(stdout);
      console.log(stdout);
    });
  }
}
module.exports = function () {
  return new ExecPHP();
};
