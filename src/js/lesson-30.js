/** LESSON 30 **/
$(document).ready(function () {



    const holes = $('.hole');
    const scoreBoard = $('.score');
    const moles = $('.mole');
    const start = $('button');
    let lastHole;
    let timeUp = false;
    let score = 0;

    function randomTime(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
    
    function randomHole(holes) {
        const idx = Math.floor(Math.random() * holes.length);
        const hole = holes[idx];
        if (hole === lastHole){
            return randomHole(holes);
        }

        lastHole = hole;
        return hole;
    }

    function peep() {
        const time = randomTime(200, 1000);
        const hole = randomHole(holes);
        hole.classList.add('up');
        setTimeout(() => {
            hole.classList.remove('up');
            if(!timeUp) peep();
        }, time)
    }

    function startGame() {
        scoreBoard.text('0');
        timeUp = false;
        score = 0;
        peep();
        setTimeout(() => timeUp = true, 10000);
    }

    function bonk(e) {
        if(!e.originalEvent.isTrusted) return;
        score++;
        this.classList.remove('up');
        scoreBoard.text(score);
    }

    moles.on('click', bonk);
    start.on('click', startGame);
});