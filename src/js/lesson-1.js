/** LESSON 1 **/
$(document).ready(function () {

    /* Main function */
    function playSound(e) {
        const $audio = $(`audio[data-key="${e.which}"]`)[0];
        if (!$audio) return;
        $audio.currentTime = 0;
        $audio.play();

        const $key = $(`.key[data-key="${e.which}"]`);
        $key.addClass('playing');
    }

    /* Reverse transition */
    const keys = $('.key');
    keys.each(function () {
        $(this).on('transitionend', removeTransition)
    });

    function removeTransition(e) {
        if (e.originalEvent.propertyName !== 'transform') return;
        $(this).removeClass('playing');
    }

    /* Event */
    $(window).on('keydown', playSound);

});