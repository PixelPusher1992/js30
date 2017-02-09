/** LESSON 19 **/
$(document).ready(function () {


    const video = document.querySelector('.player');
    const canvas = document.querySelector('.photo');
    const ctx = canvas.getContext('2d');
    const strip = document.querySelector('.strip');
    const snap = document.querySelector('.snap');
    const button = document.querySelector('button');

    function getVideo() {
        navigator.mediaDevices.getUserMedia({video: true, audio: false})
            .then(localMediaStream => {
                video.src = window.URL.createObjectURL(localMediaStream);
                video.play();
            })
            .catch(err => {
                console.error('NO NO NO!!!', err);
            });
    }

    function pasteToCanvas() {
        canvas.width = 640;
        canvas.height = 480;

        setInterval(() => {
            ctx.drawImage(video, 0, 0, 640, 480);
            let pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);

            // pixels = redEffect(pixels);

            // pixels = rgbSplit(pixels);
            // ctx.globalAlpha = 0.2;

            pixels = greenScreen(pixels);

            ctx.putImageData(pixels, 0, 0);
        }, 20);
    }

    function takePhoto() {
        snap.currentTime = 0;
        snap.play();

        const data = canvas.toDataURL('image/jpeg');
        const link = document.createElement('a');
        link.href = data;
        link.setAttribute('download', 'handsome');
        link.innerHTML = `<img src="${data}" alt="Handsome Man">`;
        strip.insertBefore(link, strip.firstChild);
    }
    
    function redEffect(pixels) {
        for(let i = 0; i < pixels.data.length; i+=4) {
            pixels.data[i] = pixels.data[i] + 100;
            pixels.data[i + 1] = pixels.data[i + 1] - 50;
            pixels.data[i + 2] = pixels.data[i + 2] * 0.5;
        }
        return pixels;
    }
    
    function rgbSplit(pixels) {
        for(let i = 0; i < pixels.data.length; i+=4) {
            pixels.data[i - 150] = pixels.data[i];
            pixels.data[i + 500] = pixels.data[i + 1];
            pixels.data[i - 550] = pixels.data[i + 2];
        }
        return pixels;
    }

    function greenScreen(pixels) {
        const levels = {};
        document.querySelectorAll('.rgb input').forEach((input) => {
           levels[input.name] = input.value;
        });
        for(let i = 0; i < pixels.data.length; i+=4) {
            var red = pixels.data[i];
            var green = pixels.data[i + 1];
            var blue = pixels.data[i + 2];
            var alpha = pixels.data[i + 3];

            if (red >= levels.rmin && red <= levels.rmax &&
                green >= levels.gmin && green <= levels.gmax &&
                blue >= levels.bmin && blue <= levels.bmax) {
                alpha = 0;
                console.log('Hi');
            }
        }
        return pixels;
    }

    getVideo();

    video.addEventListener('canplay', pasteToCanvas);
    button.addEventListener('click', takePhoto);

});