
// #1
$(document).ready(function(){

	console.log('"Starting jQuery... "')
// #2
	$("span").hide();
// #3
	$("span.hidden").hide();

// #4
	// $('ul#listOne > li:nth-child(1)').hide();
	$('#listOne li').eq(0).hide();
	// $('ul#listTwo > li:nth-child(2)').hide();
	$('#listTwo li').eq(1).hide();
// #5
	$("#listTask5 li:contains('green')").css('color', 'green');
	// $("#listTask5 li").eq(2).css('color', 'green');

});