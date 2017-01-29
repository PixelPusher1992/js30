$(document).ready(function () {

    /** Main function **/
    function playSound(e) {
           const $audio = $(`audio[data-key="${e.which}"]`)[0];
           if (!$audio) return;
           $audio.currentTime = 0;
           $audio.play();

           const $key = $(`.key[data-key="${e.which}"]`);
           $key.addClass('playing');
    }

    /** Reverse transition **/
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    function removeTransition(e) {
       if (e.propertyName !== 'transform') return;
       $(this).removeClass('playing');
    }

    /** Event **/
    $(window).on('keydown', playSound);
});
