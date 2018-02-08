# Medical app for the DITAS dummy example

The medical app interface for the dummy example. At this stage it is a thin HTML+JS client that allows to make two calls:
1. Given a SSN returns all the details of the patient + the last values for all the exams.
2. Given a SSN an a specific blood test (e.g. cholesterol) returns the timeseries of the value of this test for the given patient.

The applicaton gets the data by calling the VDC API.

