/** LESSON 11 **/
$(document).ready(function () {

    // elements
    const player = $('.player'),
          video = $('.viewer'),
          progress = $('.progress'),
          progressBar = $('.progress__filled'),
          toggle = $('.toggle'),
          skipButtons = $('[data-skip]'),
          ranges = $('.player__slider');
    //functions
    function togglePlay() {
        const method = video[0].paused ? 'play' : 'pause';
        video[0][method]();
    }
    function updateButton() {
        const icon = this.paused ? '►' : '❚ ❚';
        toggle.text(icon);
    }
    function skip() {
        video[0].currentTime += parseFloat(this.dataset.skip);
    }
    function handleRangeUpdate() {
        video[0][this.name] = this.value;
    }
    function handleProgress() {
        const percent = (video[0].currentTime / video[0].duration) * 100;
        progressBar.css({
            'flex-basis': `${percent}%`
        });
    }
    function scrub(e) {
        const scrubTime = (e.originalEvent.offsetX / progress.width()) * video[0].duration;
        video[0].currentTime = scrubTime;
        console.log(e.originalEvent);
    }

    //making work
    video.on('click', togglePlay);
    video.on('play', updateButton);
    video.on('pause', updateButton);

    toggle.on('click', togglePlay);

    skipButtons.on('click', skip);

    ranges.on('change', handleRangeUpdate);
    ranges.on('mousemove', handleRangeUpdate);

    let mouseDown = false;
    video.on('timeupdate', handleProgress);
    progress.on('click', scrub);
    progress.on('mousemove', (e) => mouseDown && scrub(e));
    progress.on('mousedown', () => mouseDown = true);
    progress.on('mouseup', () => mouseDown = false);

});