let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function adicionarCarrinho(nome, preco){

carrinho.push({nome, preco});

localStorage.setItem("carrinho", JSON.stringify(carrinho));

atualizarContador();

alert("Produto adicionado ao carrinho");

}

function atualizarContador(){

let contador = document.getElementById("contador");

if(contador){
contador.innerText = carrinho.length;
}

}

function carregarCarrinho(){

let lista = document.getElementById("listaCarrinho");
let total = document.getElementById("total");

if(!lista) return;

lista.innerHTML = "";

let soma = 0;

carrinho.forEach((produto, index)=>{

let item = document.createElement("li");

item.innerHTML = `
${produto.nome} - R$ ${produto.preco}
<button onclick="remover(${index})">Remover</button>
`;

lista.appendChild(item);

soma += produto.preco;

});

total.innerText = soma.toFixed(2);

}

function remover(index){

carrinho.splice(index,1);

localStorage.setItem("carrinho", JSON.stringify(carrinho));

carregarCarrinho();
atualizarContador();

}

function finalizar(){

alert("Compra finalizada com sucesso!");

localStorage.removeItem("carrinho");

location.reload();

}

atualizarContador();
carregarCarrinho();
