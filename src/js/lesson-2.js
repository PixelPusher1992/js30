/** LESSON 2 **/
$(document).ready(function () {

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
});