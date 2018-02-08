window.onload = function(){

	// Generate hendlers to control radiobutton clicks
	$('#details-radio').click(showPatientDetails);
	$('#examvalues-radio').click(showPatientExamvalues);
	$('#timeseries-radio').click(showTimeseries);

	// Clean inputs
	clearValues();
}

// Uncheck and clean inputs
function clearValues()
{
	$('#blood-test-input').prop('selectedIndex', 0);
	$('#details-radio').prop('checked', false);
	$('#examvalues-radio').prop('checked', false);
	$('#timeseries-radio').prop('checked', false);
	$('#ssn').val('');
}

// Show patient details results
function showPatientDetails()
{
	// Hide all the result divs
	hideResults();

	// SSN value must be set
	var ssn = $('#ssn').val();

	// SSN is not set. Show modal, deactivate option
	if (ssn === '')
	{
		$('#info-modal').modal('toggle');
		$("#info-modal-title").text("Patient Details");
		$("#info-modal-body").html("Please, enter <b>SSN</b> to check the patient details");
		$('#details-radio').prop('checked', false);
		return;
	}

	// Show loading div
	$('#loading-div').css('visibility', 'visible');

	// Clean bloot test combo and deactivate "Timeseries"
	$('#blood-test-input').prop('selectedIndex', 0);
	disableTimeseries();

	// TODO: Call to VDC to get real values
	// var patientDetails = getPatientDetails(ssn);

	// Dummy data
	var patientDetails = {lastname: "Graham", firstname: "Peter", gender: "M", email: "peter.graham@gmail.com", age: 64};
	$('#details-ssn-form').val(ssn);
	$('#details-lastname-form').val(patientDetails.lastname);
	$('#details-firstname-form').val(patientDetails.firstname);
	$('#details-gender-form').val(patientDetails.gender);
	$('#details-email-form').val(patientDetails.email);
	$('#details-age-form').val(patientDetails.age);

	// Simulate call wait
	setTimeout (function()
	{
		$('#loading-div').css('visibility', 'hidden');
		$('#patient-details-div').css('visibility', 'visible');
	}, 2000);
}

// Show patient exam values results
function showPatientExamvalues()
{
	// Hide all the result divs
	hideResults();

	// SSN value must be set
	var ssn = $('#ssn').val();

	// SSN is not set. Show modal, deactivate option
	if (ssn === '')
	{
		$('#info-modal').modal('toggle');
		$("#info-modal-title").text("Patient exam values");
		$("#info-modal-body").html("Please, enter <b>SSN</b> to check the patient exam values.");
		$('#examvalues-radio').prop('checked', false);
		return;
	}

	// Show loading div
	$('#loading-div').css('visibility', 'visible');

	// Clean bloot test combo and deactivate "Timeseries"
	$('#blood-test-input').prop('selectedIndex', 0);
	disableTimeseries();

	// TODO: Call to VDC to get real values
	// var patientExamValuesData = getPatientExamvalues(ssn);

	// Dummy data
	var patientExamValuesData = {lastname: "Graham", firstname: "Peter", cholesterol: 2133, triglyceride: 4234234, hepatitis: "No"};
	$('#exam-ssn-form').val(ssn);
	$('#exam-lastname-form').val(patientExamValuesData.lastname);
	$('#exam-firstname-form').val(patientExamValuesData.firstname);
	$('#exam-cholesterol-form').val(patientExamValuesData.cholesterol);
	$('#exam-triglyceride-form').val(patientExamValuesData.triglyceride);
	$('#exam-hepatitis-form').val(patientExamValuesData.hepatitis);

	// Simulate call wait
	setTimeout (function()
	{
		$('#loading-div').css('visibility', 'hidden');
		$('#patient-exam-values-div').css('visibility', 'visible');
	}, 2000);
}

// Show timeseries results
function showTimeseries()
{
	// Hide all the result divs
	hideResults();

	// SSN value must be set
	var ssn = $('#ssn').val();

	// SSN is not set. Show modal, deactivate option
	if (ssn === '')
	{
		$('#info-modal').modal('toggle');
		$("#info-modal-title").text("Timeseries");
		$("#info-modal-body").html("Please, enter <b>SSN</b> to check the patient timeseries");
		$('#timeseries-radio').prop('checked', false);
		return;
	}

	// Show loading div
	$('#loading-div').css('visibility', 'visible');

	// TODO: Call to VDC to get real values
	// var timeseriesData = getTimeseries(ssn, bloodTest);

	// Dummy data
	var timeseriesData = {};
	timeseriesData.d = [{Year: 2012, Cholesterol: "1.000000", Triglyceride: "2.000000", Hepatitis: "3.000000"},
					    {Year: 2013, Cholesterol: "4.000000", Triglyceride: "5.000000", Hepatitis: "6.000000"},
					    {Year: 2014, Cholesterol: "7.000000", Triglyceride: "8.000000", Hepatitis: "9.000000"},
					    {Year: 2015, Cholesterol: "10.000000", Triglyceride: "11.000000", Hepatitis: "12.000000"},
				        {Year: 2016, Cholesterol: "13.000000", Triglyceride: "14.000000", Hepatitis: "15.000000"}];
	$('#timeseries-table tr').not(':first').not(':last').remove();
	var html = '';
	for (var i = 0; i < timeseriesData.d.length; i++)
	{
		html += '<tr><td>' + timeseriesData.d[i].Year + '</td><td>'+
							 timeseriesData.d[i].Cholesterol + '</td><td>' +
							 timeseriesData.d[i].Triglyceride + '</td><td>' +
							 timeseriesData.d[i].Hepatitis + '</td></tr>';
	}
	$('#timeseries-table tr').first().after(html);

	// Simulate call wait
	setTimeout (function()
	{
		$('#loading-div').css('visibility', 'hidden');
		$('#timeseries-div').css('visibility', 'visible');
	}, 2000);
}

// Hides all results div
function hideResults()
{
	$('#patient-details-div').css('visibility', 'hidden');
	$('#patient-exam-values-div').css('visibility', 'hidden');
	$('#timeseries-div').css('visibility', 'hidden');
}

// Allows Timeseries radiobutton to be clicked
function enableTimeseries()
{
	$('#timeseries-label').css('color', 'black');
	$("#timeseries-radio").prop('disabled', false);
}

// Disables Timeseries radiobutton to be clicked
function disableTimeseries()
{
	$('#timeseries-label').css('color', '#B2B2B2');
	$("#timeseries-radio").prop('disabled', true);
}

// TODO: Call to VDC functions
function getPatientDetails(ssn) {return;}
function getPatientExamvalues(ssn) {return;}
function getTimeseries(ssn, bloodTest) { return;}
