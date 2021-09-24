let g= parseInt(document.getElementById("count-el").innerText);
// g=g+1;
// console.log(g);
function increment (){
    g=g+1;
    document.getElementById("count-el").innerText = g;
    
}
let t= 0 
let b = document.getElementById("total-el").textContent
function save (){
    console.log(g);
    t =t+g
    let a = g + "-"
    let b = document.getElementById("total-el").textContent
    let pg = document.getElementById("save-el").innerText
    pg = pg + a
    document.getElementById("save-el").innerText = pg 
    document.getElementById("total-el").textContent = "Total entires:"+ t
    g = 0
    document.getElementById("count-el").textContent = g
    
}