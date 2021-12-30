import { Howl } from "howler";
import Soundmp3 from "./media/sound.mp3";
import { secondsEl } from "./main.js";

let nIntervId;

function myCallback() {
    secondsEl.value = secondsEl.value - 1;
    if (secondsEl.value <= 0) {
        stopTimer();
        playSound();
    }
}

export function startTimer() {
    nIntervId = setInterval(myCallback, 1000);
}

export function stopTimer() {
    clearInterval(nIntervId);
}

function playSound() {
    let id1 = new Howl({
        src: [Soundmp3]
    });
    id1.play();
}