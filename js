// Facebook Link
!function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8";
	fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk');

// Twitter Link
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)
	[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);
	js.id=id;js.src=p+'://platform.twitter.com/widgets.js';
	fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

//Map Section
function initMap() {
	var myLatLng = {lat: 47.6761431, lng: -122.3651632};

var map = new google.maps.Map(document.getElementById('map'), {
		center: myLatLng,
	  zoom: 13
	});

var marker = new google.maps.Marker({
	position: myLatLng,
	map: map,
	title: 'Over Here!'
});
}

// Document Ready
$(document).ready(function() {

	// Smooth Scrolling
	var $root = $('html, body');
	 $('.navbar-nav a').click(function() {
	 	var href = $.attr(this, 'href');
	 	$root.animate({
	 	scrollTop: $(href).offset().top
	 	}, 500, function () {
	 	window.location.hash = href;
	 	});
	 	return false;
	});

	// Stellar - Parallax
	$('body').stellar();

	// Tooltips
	$(function(){
	  $('[data-toggle="tooltip"]').tooltip();
	});

	//TextArea
	$('#submit-button').on('click',function() {
		console.log('clicked');
		var messageFill = $('#message-box').val();
	$('#message-box').html(messageFill);
	if(messageFill === "") {
		$('#message-box').css('border', '2px solid red');
	return false;
	} else {
		var comment = $('#message-box').val();
		$('#visible-comment').html(comment);
			console.log('Thanks, your message has been received.');
			$('#message-box').hide();		
	return false;
		};
	});
	$('#message-box').on('keyup', function() {
		var nameName =3;
		var name ='string';
		var charCount= $('#message-box').val().length;
		console.log('you saving the right info?');
		$('#char-count').html(charCount);
		if(charCount > 50) {
			$('#char-count').css('color', 'red');
		} else {
			$('#char-count').css('color', 'white');
		};
	});

	//Services Section
	for(var i = 0; i < works.length; ++i ) {
		$('#work').prepend('\
			<div class="col-md-3">\
				<a href="' + works[i].url + '" class="work-img">\
        	<img class="img-responsive" src="' + works[i].pic + '">\
        	 <span class="info"><p class="proj-title">Title:</p>"' + works[i].title + '"</span>\
        </a>\
      </div>\
		');
		var images = $('#work img');
			$(".work-img").mouseenter(function() {
				$(".info", this).show();
			}).mouseleave(function (){
				$(".info", this).hide();
			});
		if (true) {
			$(images[i]).css('border', '2px solid salmon');
		} else {
			$(images[i]).css('border', '2px DodgerBlue');
		};
	};
});
