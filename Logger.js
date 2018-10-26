//var RNFS = require("react-native-fs");
import {
  writeFile,
  readFile,
  ExternalDirectoryPath,
  appendFile,
  exists,
  readdir,
  touch
} from "react-native-fs";
class Logger {
  constructor() {
    console.log("logger instatiated");
  }

  createFile(fileName) {
    var path = ExternalDirectoryPath + "/tempo/" + fileName;
    // write the file
    writeFile(path, "", "utf8")
      .then(success => {
        console.log("FILE CREATED!");
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  writeIntoFile(fileName, message) {
    var path = ExternalDirectoryPath + "/tempo/" + fileName;
    // write the file
    exists(path)
      .then(success => {
        appendFile(path, message, "utf8")
          .then(success => {
            console.log("FILE APPEND!");
          })
          .catch(err => {
            console.log(err.message);
          });
      })
      .catch(err => {
        writeFile(path, message, "utf8")
          .then(success => {
            console.log("FILE WRITTEN!");
          })
          .catch(err => {
            console.log(err.message);
          });
      });
  }
  writeLog() {}

  clearLog() {}

  displayLog() {
    console.log("logger started working");
  }

  readFile(fileName) {
    var path = ExternalDirectoryPath + "/tempo/" + fileName;
    console.log("path of file", path);
    readFile(path, "utf8")
      .then(success => {
        console.log("FILE READ!", success);
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  readFolder(folderName) {
    var path = ExternalDirectoryPath + "/" + folderName;
    readdir(path)
      .then(success => {
        console.log("read the directory", success);
      })
      .catch(error => {
        console.log("error are", error);
      });
  }
}
export default new Logger();
