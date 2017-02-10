/** LESSON 29 **/
$(document).ready(function () {


    let countdown;
    const timerDisplay = $('.display__time-left');
    const endTime = $('.display__end-time');
    const buttons = $('[data-time]');
    const form = $('[name="customForm"]');

    function timer(seconds) {
        clearInterval(countdown);

        const now = (new Date()).getTime();
        const then = now + seconds * 1000;
        displayTimeLeft(seconds);
        displayEndTime(then);

        countdown = setInterval(() => {
            const secondsLeft = Math.round((then - (new Date()).getTime()) / 1000);

            if(secondsLeft < 0) {
                clearInterval(countdown);
                return;
            }

            displayTimeLeft(secondsLeft);
        }, 1000);
    }
    
    function displayTimeLeft(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remain = seconds % 60;
        const display = `${minutes}:${remain < 10 ? '0' : ''}${remain}`;

        document.title = display;
        timerDisplay.text(display);

    }

    function displayEndTime(timestamp) {
        const end = new Date(timestamp);
        const hours = end.getHours();
        const minutes = end.getMinutes();
        endTime.text(`Be back at ${hours}:${minutes < 10 ? '0' : ''}${minutes}!`)
    }

    function startTimer() {
        const seconds = parseInt(this.dataset.time);
        timer(seconds);
    }

    buttons.on('click', startTimer);
    form.on('submit', function (e) {
        e.preventDefault();
        const mins = $(this).children('[name="minutes"]').val();
        timer(mins * 60);
        $(this)[0].reset();
    })
});