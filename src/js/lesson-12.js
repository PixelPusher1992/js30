/** LESSON 12 **/
$(document).ready(function () {

    const pressed = [];
    const secretCode = 'viktor';
    $(window).on('keyup', (e) => {
        pressed.push(e.key);
        pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
        if(pressed.join('').includes(secretCode)){
            cornify_add();
        }
    });

});