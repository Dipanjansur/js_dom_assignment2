const textenter=document.getElementById("textenter");
const word_cnum=document.querySelector(".word_cnum");
const letter_cnum=document.querySelector(".letter_cnum");
let letter;
letter=textenter.value;
textenter.addEventListener('input',()=>{
letter=textenter.value;
countnum();
});
function countnum(){
let word_count=0;
let letter_count=0;

    letter.trim();
    for(let i=0;i<letter.length;i++){
        if(letter.charAt(i)==' '){
            word_count++;
            continue;
        }
        letter_count++;
    }
    word_cnum.innerText=word_count;
    letter_cnum.innerText=letter_count;
}

