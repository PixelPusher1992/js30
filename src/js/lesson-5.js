/** LESSON 5 **/
$(document).ready(function () {

    const panels = $('.panel');

    function toggleOpen() {
        if ($(this).hasClass('open')){
            $(this).removeClass('open open-active');
        } else {
            panels.each(function () {
                $(this).removeClass('open open-active');
            });
            $(this).addClass('open');
            $(this).on('transitionend', toggleAcive);
        }
    }

    function toggleAcive(e) {
        if (e.originalEvent.propertyName.includes('flex') && $(this).hasClass('open')){
            $(this).addClass('open-active');
        }
    }

    panels.each(function () {
        $(this).on('click', toggleOpen);
    });

});