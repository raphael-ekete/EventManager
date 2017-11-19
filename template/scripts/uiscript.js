$(document).ready(function() {
    $('input#input_text, textarea#textarea1').characterCounter();

    $('select').material_select();

    $('.slider').slider();

	$('.datepicker').pickadate({
	    selectMonths: true, // Creates a dropdown to control month
	    selectYears: 15, // Creates a dropdown of 15 years to control year,
	    today: 'Today',
	    clear: 'Clear',
	    close: 'Ok',
	    closeOnSelect: false // Close upon selecting a date,
  	});

});