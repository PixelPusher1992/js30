$(document).ready(function () {

    /** LESSON 1 **/
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



    /** LESSON 2 **/
    /* arrows variables */
    const $secondsArrow = $('.second-hand');
    const $minArrow = $('.min-hand');
    const $hoursArrow = $('.hour-hand');

    /* main function */
    function setDate() {
        const now = new Date();

        /* seconds settings */
        const seconds = now.getSeconds();
        const secondDegrees = ((seconds / 60) * 360) + 90;
        $secondsArrow.css('transform', `rotate(${secondDegrees}deg)`);

        /* minutes settings */
        const min = now.getMinutes();
        const minDegrees = ((min / 60) * 360) + 90;
        $minArrow.css('transform', `rotate(${minDegrees}deg)`);

        /* hours settings */
        const hours = now.getHours();
        const hoursDegrees = ((hours / 12) * 360) + 90;
        $hoursArrow.css('transform', `rotate(${hoursDegrees}deg)`);
    }
    setInterval(setDate, 1000);



    /** LESSON 3 **/
    const inputs = $('.input3');

    function handleUpdate() {
        const $suffix = $(this).attr('data-sizing') || '';
        document.documentElement.style.setProperty(`--${this.name}`, this.value + $suffix);
    }
    inputs.each(function () {
        $(this).on('change', handleUpdate);
        $(this).on('mousemove', handleUpdate);
    })
});
