/** LESSON 23 **/
$(document).ready(function () {



    const msg = new SpeechSynthesisUtterance();
    let voices = [];
    const voicesDropdown = $('[name="voice"]');
    const options = $('[type="range"], [name="text"]');
    const speakButton = $('#speak');
    const stopButton = $('#stop');

    msg.text = $('[name="text"]').val();

    function populateVoices() {
        voices = this.getVoices();
        const voiceOptions = voices
            .map(voice => `<option value="${voice.name}">${voice.name} ${voice.lang}</option>`)
            .join('');
        voicesDropdown.html(voiceOptions);
    }
    
    function setVoice() {
        msg.voice = voices.find(voice => voice.name === this.value);
        toggle();
    }

    function toggle(startOver = true) {
        speechSynthesis.cancel();
        if (startOver) {
            speechSynthesis.speak(msg);
        }
    }

    function setOption() {
        console.log(this.name, this.value);
        msg[this.name] = this.value;
        toggle();
    }

    speechSynthesis.addEventListener('voiceschanged', populateVoices);
    voicesDropdown.on('change', setVoice);
    options.on('change', setOption);
    speakButton.on('click', toggle);
    stopButton.on('click', () => toggle(false));
});