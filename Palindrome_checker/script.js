const number_in=document.querySelector("#number_in");
const submitbutton=document.querySelector(".submitbutton");
const res=document.querySelector(".res");
let number;
submitbutton.addEventListener('click',()=>{
    number=number_in.value;
    checkPalandrome(number);
})
function checkPalandrome(number){
let rem=0;
let temp=number;
while(temp>0){
    rem=rem*10+(temp%10);
    temp=Math.round(temp/10);
    console.log(rem);
}
if(rem==number){
    res.innerText="True";
}else{
    res.innerText="False";

}
}