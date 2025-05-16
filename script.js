// script.js (Fixed)
let clicks = 0;
const MAX_CLICKS = 40;

function buttonclick() {
    const intervalId = setInterval(() => {
        const buttons = document.getElementsByClassName("btn-control-md btn-full-width");
        if (buttons.length > 0 && clicks < MAX_CLICKS) {
            buttons[0].click();
            clicks++;
        } else {
            clicks = 0
            clearInterval(intervalId); 
        }
    }, 650);
}