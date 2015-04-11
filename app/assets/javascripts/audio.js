var playRandomAudioWithDelay = function () {
	var $allAudios = $('audio');
	var randomAudio = $allAudios[Math.floor(Math.random()*$allAudios.length)]
	var delay = 2000;
	if ($('.delay').val().length > 0) {
		delay = parseInt($('.delay').val()) * 1000;
	}

  setTimeout(function () {
  	randomAudio.play();
  }, delay);
}

var startGhosting = function () {
	var $allAudios = $('audio');
	$allAudios.each(function (index) {
		var audio = $allAudios[index];
		audio.addEventListener('ended', playRandomAudioWithDelay);
	});

	var randomAudio = $allAudios[Math.floor(Math.random()*$allAudios.length)]
	randomAudio.play();
}

$(document).ready(function () {
	$('.end').hide();
	$('.start').on('click', function () {
		startGhosting();
		$(this).hide();
		$('.end').show();
	});

	$('.end').on('click', function () {
		var $allAudios = $('audio');
		$allAudios.each(function (index) {
			var audio = $allAudios[index];
			audio.pause();
			audio.currentTime = 0;
			audio.removeEventListener('ended', playRandomAudioWithDelay)
		})
		$('.start').show();
		$(this).hide();
	});
});
