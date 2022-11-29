//bugged
const show_hours = document.querySelector(".show_hours");
const show_minutes = document.querySelector(".show_minutes");
const show_secs = document.querySelector(".show_secs");

const start_counting = document.getElementById("start_counting");
const pause_counting = document.getElementById("pause_counting");
const reset_counting = document.getElementById("reset_counting");
let seconds = 00;
let remsec = 00;
let minutes = 00;
let hours = 00;
let intervalref;

function secondstoother(seconds) {
    remsec = seconds % 60;
    minutes = seconds / 60;
    hours = 00;
    if (minutes >= 60) {
        hours = hours / 60;
    }
    updateUI();
}
function updateUI() {
    show_hours.innerHTML = Math.round(hours);
    show_minutes.innerHTML = Math.round(minutes);
    show_secs.innerHTML = Math.round(remsec);

}
start_counting.addEventListener('click', () => {
    intervalref = setInterval(() => {
        seconds++;
        secondstoother(seconds);

    }, 1000);

})
pause_counting.addEventListener('click', () => {
    state = false;
    clearInterval(intervalref);
})
reset_counting.addEventListener('click', () => {
    clearInterval(intervalref);
    seconds = 00;
    remsec = 00;
    minutes = 00;
    hours = 00;
    updateUI();
})