/** LESSON 28 **/
$(document).ready(function () {


    const speed = $('.speed'),
          bar = $('.speed-bar'),
          video = $('.flex');

    speed.on('mousemove', function (e) {
        const y = e.clientY - $(this).offset().top;
        const percent = y / $(this).outerHeight();
        const min = 0.4;
        const max = 4;
        const height = Math.round(percent * 100) + '%';
        const playbackRate = percent * (max - min) + min;
        bar.text(playbackRate.toFixed(2) + 'x');

        bar.css({
            'height': height
        });

        video[0].playbackRate = playbackRate;
    })


});