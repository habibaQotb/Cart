let amnt = 0;
let h2 = document.getElementById("display");
function add(input){
    amnt += input;
}
function show(){
    h2.textContent = amnt;
}
function reset(){
    amnt = 0;
}