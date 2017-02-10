/** LESSON 27 **/
$(document).ready(function () {


    const slider = $('.items');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.on('mousedown', (e) => {
        isDown = true;
        slider.addClass('active');

        startX = e.clientX - slider.offset().left;
        scrollLeft = slider.scrollLeft();
    });
    slider.on('mouseleave', () => {
        isDown = false;
        slider.removeClass('active');
    });
    slider.on('mouseup', () => {
        isDown = false;
        slider.removeClass('active');
    });
    slider.on('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.clientX - slider.offset().left;
        const walk = x - startX;
        slider.scrollLeft(scrollLeft - walk);
        console.log(walk);
    });


});