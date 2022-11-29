//bugged

const showtime = document.querySelector(".showtime");
const hours = document.querySelector(".hours");
const mintues = document.querySelector(".mintues");
const seconds = document.querySelector(".seconds");
const button_start = document.querySelector(".button_start");
const button_pause = document.querySelector(".button_pause");
const button_reset = document.querySelector(".button_reset");
const hours_show = document.querySelector(".hours_show");
const min_show = document.querySelector(".min_show");
const sec_show = document.querySelector(".sec_show");
let interval;
let hourss, mintuess, secondss = 0;
let duration = 0;
const updateUI = (duration) => {
    secondss = parseInt(duration % 60);
    mintuess = parseInt(duration / 60);
    hours_show.innerText = hourss;
    min_show.innerText = mintuess;
    sec_show.innerText = secondss;
};
const taketimeinput = () => {
    if (hours.value) {
        duration = parseInt(hours.value) * 60
    }
    if (mintues.value) {
        duration = (duration + parseInt(mintues.value)) * 60;
    } if (seconds.value) {
        duration = (duration + parseInt(seconds.value));
        console.log(duration);
    }
    console.log(duration);
}
const tick = () => {
    if (duration > 0) {
        duration--;
        updateUI(duration);
    } else {
        clearInterval(interval);
    }

}
button_start.addEventListener('click', () => {
    taketimeinput();
    interval = setInterval(tick, 1000);
});
button_pause.addEventListener('click', () => {
    clearInterval(interval);
});
button_reset.addEventListener('click', () => {
    clearInterval(interval);
    time = 0;
    updateUI(0, 0, 0);
})