import { dateCalcForm, timerDiv, switchButtonEl } from "./main.js";

export function switchEl() {
    if (dateCalcForm.style.display == 'block') {
        dateCalcForm.style.display = 'none';
        timerDiv.style.display = 'block';
        // switchButtonEl.innerText = "Показать калькулятор";
    } else {
        dateCalcForm.style.display = 'block';
        timerDiv.style.display = 'none';
        // switchButtonEl.innerText = "Показать таймер";
    }
}
