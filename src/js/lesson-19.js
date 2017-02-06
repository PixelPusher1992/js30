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
            pixels = redEffect(pixels);
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
        console.log('Hi');
    }
    
    function redEffect(pixels) {
        for(let i = 0; i < pixels.data.length; i+=4) {
            pixels.data[i] = pixels.data[i] + 100;
            pixels.data[i + 1] = pixels.data[i + 1] - 50;
            pixels.data[i + 2] = pixels.data[i + 2] * 0.5;
        }
        return pixels;
    }
    
    getVideo();

    video.addEventListener('canplay', pasteToCanvas);
    button.addEventListener('click', takePhoto);

});