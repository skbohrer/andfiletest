andfiletest
===========

Short test of Android text file writes from PhoneGap file core plugin, for debugging Samsung Galaxy 7.

This file writing source is adapted as directly as possible from the sample code link in the 
PhoneGap core file plugin at apache/cordova-plugin-file .

The sample code is from HTML5 Rocks: http://www.html5rocks.com/en/tutorials/file/filesystem/

Run the app and click the "Save File" button to save a text file to the specified name, in the "AndFileTest"
in the default PERSISTENT file directory.

If the write succeeds or generates an error that Javascript can handle, the program will show an Alert dialog
saying what happened. If there is no output at all, then most likely the file write routines triggered a crash
within the Cordova plugin. A stack trace should be available in the console log in this case.

