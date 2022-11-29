const show_color = document.querySelector(".show_color");
const red_val = document.querySelector(".red_val");
const green_val = document.querySelector(".green_val");
const blue_val = document.querySelector(".blue_val");
const guess_button = document.querySelector(".guess_button");
const start_game = document.querySelector(".start_game");
const reset_game = document.querySelector(".reset_game");
const mistake_num = document.querySelector(".mistake_num");
let inputcolor = '';
let gencolor = '';
let mistake = 0;
let hexrange = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
const gen_random_color = () => {
    let num = 0;
    for (let i = 0; i < 5; i++) {

        num += hexrange[(Math.round(Math.random() * 15))];

    }
    gencolor = '#' + num;
    console.log(gencolor);
}
guess_button.addEventListener('click', () => {
    inputcolor = '#';
    inputcolor += red_val.value;
    inputcolor += green_val.value;
    inputcolor += blue_val.value;
    if (inputcolor != gencolor) {
        mistake_num.innerText = `MISTAKE COUNT:${++mistake}`;
    } else {
        mistake_num.innerText = "GOT IT COLOR"
    }
});

start_game.addEventListener('click', () => {
    gen_random_color();
    show_color.style.backgroundColor = gencolor;
})
