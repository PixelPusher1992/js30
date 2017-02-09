/** LESSON 20 **/
$(document).ready(function () {

    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.interimResults = true;

    let p = document.createElement('p');
    const words = document.querySelector('.words');
    words.appendChild(p);

    recognition.addEventListener('result', e => {
       const transcript = Array.from(e.results)
           .map(result => result[0])
           .map(result => result.transcript)
           .join('');

       p.textContent = transcript;

       if (e.results[0].isFinal) {
           p = document.createElement('p');
           words.appendChild(p);
       }

       if (transcript.includes('погода')){
           window.open("https://sinoptik.ua/%D0%BF%D0%BE%D0%B3%D0%BE%D0%B4%D0%B0-%D0%BA%D0%B8%D0%B5%D0%B2");
       }

        if (transcript.includes('очистить')){
            $('p').remove();
        }

        if (transcript.includes('зеленый фон' || 'зелёный фон')) {
            $('body').css({
                'background': 'green'
            })
        }

        if (transcript.includes('желтый фон')) {
            $('body').css({
                'background': '#ffc600'
            })
        }
    });


    recognition.addEventListener('end', recognition.start);
    recognition.start();

});