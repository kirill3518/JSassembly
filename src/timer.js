let nIntervId;

const secondsEl = document.getElementById("seconds");

function myCallback() {
    secondsEl.value = secondsEl.value - 1;
    if (secondsEl.value <= 0) {
        stopTimer();
    }
}

function startTimer() {
    if (secondsEl.value <= 0) {
        secondsEl.value = 0;
        return;
    }
    nIntervId = setInterval(myCallback, 1000);
    if (2 == 2) {

    }
}

function stopTimer() {
    var sound = new Howl({
        src: ['sound.webm', "./media/sound.mp3"]
    });
    sound.play();
    clearInterval(nIntervId);
}

const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");

startEl.addEventListener("click", event => {
    startTimer();
});

stopEl.addEventListener("click", event => {
    stopTimer();
});