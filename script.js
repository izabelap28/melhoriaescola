
function comprar(){
alert("Produto adicionado ao carrinho");
}

function simular(){

let status = document.getElementById("status");

status.innerText = "⚠️ Perigo Detectado";
status.style.color = "red";

let audio = new Audio("https://www.soundjay.com/button/beep-07.wav");

audio.play();

setTimeout(()=>{
status.innerText = "Seguro";
status.style.color = "green";
},4000);

}
