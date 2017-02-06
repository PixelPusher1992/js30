/** LESSON 16 **/
$(document).ready(function () {


    const hero = $('.hero'),
          text = hero.children('h1'),
          size = 50;
    
    function shadow(e) {
        const width = hero.outerWidth();
        const height = hero.outerHeight();
        let {offsetX:x, offsetY:y} = e;
        if (this !== e.target) {
            x = x + e.target.offsetLeft;
            y = y + e.target.offsetTop;
        }
        const xSize = Math.round((x / width * size) - (size / 2));
        const ySize = Math.round((y / height * size) - (size / 2));

        text.css({
            'text-shadow': `${xSize}px ${ySize}px 0 red,
                            ${xSize * -1}px ${ySize * -1}px 0 blue,
                            ${xSize}px ${ySize * -1}px 0 green,
                            ${xSize * -1}px ${ySize}px 0 yellow`
        });
    }

    hero.on('mousemove', shadow);

});