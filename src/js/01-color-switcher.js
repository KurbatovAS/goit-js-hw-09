'use strict';

const bodyEl = document.querySelector('body');
const startButtonEL = document.querySelector('[data-start]');
const stopButtonEL = document.querySelector('[data-stop]');

startButtonEL.addEventListener('click', () => {
    colorChanger.start()
});

stopButtonEL.addEventListener('click', () => {
    colorChanger.stop()
});

const colorChanger = {
    intervalId: null,

    start() {
        startButtonEL.disabled = true;
        stopButtonEL.disabled = false;

        this.intervalId = setInterval(() => {            
            bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
        }, 1000);
    },

    stop() {
        clearInterval(this.intervalId);
        startButtonEL.disabled = false;
        stopButtonEL.disabled = true;       
    },
};

startButtonEL.disabled = false;
stopButtonEL.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}