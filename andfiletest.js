'use strict';

window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;


// Global vars for the file name and data to write
// (is there a better way to get arguments into a nested callback func?)
var theFileName, theFileData;

function errorHandler(e) {
  var msg = '';

  switch (e.code) {
    case FileError.QUOTA_EXCEEDED_ERR:
      msg = 'QUOTA_EXCEEDED_ERR';
      break;
    case FileError.NOT_FOUND_ERR:
      msg = 'NOT_FOUND_ERR';
      break;
    case FileError.SECURITY_ERR:
      msg = 'SECURITY_ERR';
      break;
    case FileError.INVALID_MODIFICATION_ERR:
      msg = 'INVALID_MODIFICATION_ERR';
      break;
    case FileError.INVALID_STATE_ERR:
      msg = 'INVALID_STATE_ERR';
      break;
    default:
      msg = 'Unknown Error';
      break;
  }

  alert('Error: ' + msg);
}


function onGetDirectory(dirEntry) {

  dirEntry.getFile(theFileName, {create: true}, function(fileEntry) {
    var blob;

    // Create a FileWriter object for our FileEntry (log.txt).
    fileEntry.createWriter(function(fileWriter) {

      fileWriter.onwriteend = function(e) {
        alert('Success! Write completed.');
      };

      fileWriter.onerror = function(e) {
        alert('Write failed: ' + e.toString());
      };

      // Create a new Blob and write it to log.txt.
      blob = new Blob([theFileData], {type: 'text/plain'});

      fileWriter.write(blob);

    }, errorHandler);

  }, errorHandler);

}


function doFileClick() {
  theFileName = document.getElementById('fileName').value.trim();

  if (!theFileName) {
    alert('File Name can not be blank');
    return;
  }

  theFileData = document.getElementById('srcText').innerHTML;

  window.requestFileSystem(window.PERSISTENT, 5*1024*1024, function(fs) {
    fs.root.getDirectory('AndFileTest', {create: true}, onGetDirectory, errorHandler);
  }, errorHandler);
}


// Call on Android device ready event and also directly for PC testing. Thus
// init may be called twice
function init() {
  document.getElementById('writeFile').onclick = doFileClick;
}

// Wait for device API libraries to load
document.addEventListener("deviceready", init, false);

init();

