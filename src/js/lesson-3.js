/** LESSON 3 **/
$(document).ready(function () {

    const inputs = $('.input3');

    function handleUpdate() {
        const $suffix = $(this).attr('data-sizing') || '';
        document.documentElement.style.setProperty(`--${this.name}`, this.value + $suffix);
    }
    inputs.each(function () {
        $(this).on('change', handleUpdate);
        $(this).on('mousemove', handleUpdate);
    });

});