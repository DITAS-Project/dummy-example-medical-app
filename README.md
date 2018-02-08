# Medical app for the DITAS dummy example

The medical app interface for the dummy example. At this stage it is a thin HTML+JS client that allows to make two calls:
1. Given a SSN returns all the details of the patient + the last values for all the exams.
2. Given a SSN an a specific blood test (e.g. cholesterol) returns the timeseries of the value of this test for the given patient.

The applicaton gets the data by calling the VDC API.

# Some screenshots

These screenshots have been generated using dummy data.

![alt text](screenshots/sh_1.jpg)

![alt text](screenshots/sh_2.jpg)

![alt text](screenshots/sh_3.jpg)

![alt text](screenshots/sh_4.jpg)
