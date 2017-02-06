/** LESSON 8 **/
$(document).ready(function () {

    const canvas = document.querySelector('#draw');
    function canvasSize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    canvasSize();
    $(window).resize(canvasSize);

    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = 'BADA55';
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 50;

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    let hue = 0;
    let direct = true;

    function draw(e) {
        if(!isDrawing) return;
        console.log(ctx.lineWidth);

        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        [lastX, lastY] = [e.offsetX, e.offsetY];

        hue++;
        if (hue > 360) {
            hue = 0;
        }
        if (ctx.lineWidth >= 50 || ctx.lineWidth < 1) {
            direct = !direct;
        }
        if(direct){
            ctx.lineWidth += 1/5;
        } else {
            ctx.lineWidth -= 1/5;
        }
    }
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
    });
    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('mouseout', () => isDrawing = false);

});