// #1
$(document).ready(function() {

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
    // #6
    $("#task6").on("click", function() {

        alert('Hello, ' + $("#firstname1").val());
    });
    // #7
    $("input").on("change", function() {
        var text = $(this).val()
        $("#greeting").text(text).show()

    });

    $("#firstname").on("keyup", function() {

        // var text = $(this).val()
        $("#greeting").text($('#firstname').val()).show()
    });
    // #8
    $('#hoverAction').hover(
        function() {
            console.log('hoverIn detected')
            $(this).find('p').eq(1).css({
                "color": "white",
                "background-color": "black"
            });
        },
        function() {
            console.log('hoverOut detected')
            $(this).find('p').eq(1).css({
                "color": "black",
                "background-color": "white"
            });
        });
	// #9
	$('#task8List').find('li').on('click', function(){
		if ($(this).hasClass('fade')) {
			$(this).fadeOut('slow', function() {
				
			});
		} else {
		$(this).hide();
		}
	})
	$('#task8Restore').on('click', function () {
		$('#task8List').find('li').show();
	})
    
});