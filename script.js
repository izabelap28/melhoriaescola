
let carrinho = [];

function adicionarCarrinho(produto){
carrinho.push(produto);

let lista = document.getElementById("listaCarrinho");
let item = document.createElement("li");

item.innerText = produto;

lista.appendChild(item);

alert("Produto adicionado ao carrinho");
}

function simularDetector(){

alert("Sistema ativo!");

}

function simularPerigo(){

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
