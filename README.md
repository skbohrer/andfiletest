andfiletest
===========

Short test of file writes from PhoneGap file core plugin on Samsung Galaxy7.

This file writing source code is adapted as directly as possible from the 
sample code link in the PhoneGap core file plugin docs at 
apache/cordova-plugin-file .

The sample code is from HTML5 Rocks:
 http://www.html5rocks.com/en/tutorials/file/filesystem/

Run the app and click the "Write File" button to save a text file
to the "AndFileTest" folder in the default PERSISTENT file directory.

If the write succeeds or generates an error that Javascript can handle, the
program will show an Alert dialog box saying what happened. If there is no
dialog box at all, then probably the file write routines triggered a crash
within the Cordova plugin. A stack trace should be available in the console 
log in this case.