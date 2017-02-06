/** LESSON 13 **/
$(document).ready(function () {

    function debounce(func, wait = 20, immediate = true) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    const sliderImages = $('.slide-in');

    function checkSlide(e) {
        sliderImages.each(function () {
            const slideInAt = window.scrollY + window.innerHeight - ($(this).height() / 2);
            const imageBottom = $(this).offset().top + $(this).height();
            const isHalfShown = slideInAt > $(this).offset().top;
            const isNotScrollerPassed = window.scrollY < imageBottom;
            if (isHalfShown && isNotScrollerPassed) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        })
    }

    $(window).on('scroll', debounce(checkSlide));

});