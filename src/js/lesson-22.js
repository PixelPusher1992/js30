/** LESSON 22 **/
$(document).ready(function () {


    const triggers = $('a');
    $('body').append('<span class="highlight"></span>');
    
    function highlightLink() {
        const linkCoords = this.getBoundingClientRect();
        console.log(linkCoords);
        const coords = {
            width: linkCoords.width,
            height: linkCoords.height,
            top: linkCoords.top + window.scrollY,
            left: linkCoords.left + window.scrollX
        };

        $('.highlight').css({
            'width': `${coords.width}px`,
            'height': `${coords.height}px`,
            'transform': `translate(${coords.left}px, ${coords.top}px)`
        })
    }
    triggers.on('mouseenter', highlightLink);


});