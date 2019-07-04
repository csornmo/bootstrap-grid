
$( document ).ready(function() {
    $(".language-css").html($(".language-css").html().replace(new RegExp('PREFIX', 'g'), '<div class="prefix-highlight">PREFIX</div>'));
});

// PREFIX CODE
$("form").submit(function (e) {
	e.preventDefault();

	// PREFIX
    var prefixValueSave = $('.prefix-value').text();
	if ( prefixValueSave === '' ) {
		prefixValueSave = 'PREFIX';
	}

	if( $('form input').val() !== "" ) {
		var prefixValue = $('#prefixValue').val();
	    $(".language-css").html($(".language-css").html().replace(new RegExp(prefixValueSave, 'g'), '<div class="prefix-highlight">' + prefixValue + '</div>'));

        $('#nr1').addClass('done');
	    $('form button').addClass('loading');

	    setTimeout(function(){
	    	$('#nr2').addClass('done');
            $('form button').removeClass('loading');
		}, 500);

	    $('.title').html('CSS prefixed to: <div class="prefix-value"><b>' + prefixValue + '</b></div>');
    }

    // EXAMPLES
    $('.language-html .token.attr-value').each(function() {
    	$(this).text($(this).text().replace(new RegExp(prefixValueSave, 'g'), prefixValue ));
    });
});

$("form input").focus(function (e) {
	$('.nr').removeClass('done');
});


// COPY CODE
var clipboard = new ClipboardJS('.copy-button');

clipboard.on('success', function(e) {
    
    $('.message').remove();
	$('.copy-button').after('<div class="message">Code is copied</div>');
	$('.message').stop().hide().fadeIn('fast');
	$('.fade').stop().addClass('fade-in');

	$('#nr3').stop().addClass('done');
	
	setTimeout(function(){
		$('.message').stop().fadeOut('fast');
		$('.fade').stop().removeClass('fade-in');
	}, 1500);

    $(document).on('mouseup', function (e) {
        if ( $('.copy-button').not(":focus") ) {
            $('#nr3').stop().removeClass('done');
        }
    });

    e.clearSelection();
});


// DOWNLOAD CODE
$(".download-button").click(function (e) {
	
	function download(filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
	}

    var prefixValue = $('.prefix-value').text();

	// Start file download.
	download(prefixValue + "-bootstrap-grid.css", $("code").text() );
});



// TABS
$(".tab-buttons a").click(function (e) {
	e.preventDefault();
	$(this).addClass('active').siblings().removeClass('active');
	var id = $(this).attr('href');

	console.log(id);

	$(id + '.tab').addClass('show').siblings().removeClass('show');
});
