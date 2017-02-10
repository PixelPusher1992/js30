/** LESSON 26 **/
$(document).ready(function () {


    const triggers = $('.cool > li'),
          background = $('.dropdownBackground'),
          nav = $('.top');

    function handleEnter() {
        $(this).addClass('trigger-enter');
        setTimeout(() => {
            if ($(this).hasClass('trigger-enter')){
                $(this).addClass('trigger-enter-active');
            }
        }, 150);

        background.addClass('open');

        const dropdown = $(this).children('.dropdown');
        const dropdownCoords = dropdown[0].getBoundingClientRect();
        const navCoords = nav[0].getBoundingClientRect();
        const coords = {
            height: dropdownCoords.height,
            width: dropdownCoords.width,
            top: dropdownCoords.top - navCoords.top,
            left: dropdownCoords.left - navCoords.left
        };

        background.css({
            'width': `${coords.width}px`,
            'height': `${coords.height}px`,
            'transform': `translate(${coords.left}px, ${coords.top}px)`
        })

    }

    function handleLeave() {
        $(this).removeClass('trigger-enter trigger-enter-active');

        background.removeClass('open');
    }

    triggers.on('mouseenter', handleEnter);
    triggers.on('mouseleave', handleLeave);


});