import { diffDates, diffToHtml } from "./datecalc.js"; // 1
import { formatError } from "./utils.js"; // 2
import { startTimer, stopTimer } from "./timer.js";
import { switchEl } from "./switching.js";

export const dateCalcForm = document.getElementById("datecalc");
export const secondsEl = document.getElementById("seconds");
export const timerDiv = document.getElementById("timer");

const dateCalcResult = document.getElementById("datecalc__result");
dateCalcForm.addEventListener("submit", handleCalcDates);
function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate); // 3
        dateCalcResult.innerHTML = diffToHtml(diff); // 4
    }
    else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля"); // 5
}


const startEl = document.getElementById("start");
startEl.addEventListener("click", event => {
    startTimer();
});

const stopEl = document.getElementById("stop");
stopEl.addEventListener("click", event => {
    stopTimer();
});

export const switchButtonEl = document.getElementById("switch_button");
switchButtonEl.addEventListener("click", event => {
    switchEl();
});

onload = () => {
    switchEl();
}