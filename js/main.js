/*

var nome = "Rick Gonçalves"
var idade = 24;
alert ("Bem vindo " +nome+ " você tem "+idade+" anos")
var frase = "Japão é o melhor time do mundo"

// comentario 
console.log(nome);
console.log(nome +" "+idade);
console.log(frase.replace("Japão", "Brasil")); //trocar uma palavra pela outra

var lista = ["maçã","pêra","laranja"];
//console.log(lista[0]);
//lista.push("uva") adicionar valor
//lista.pop([0]); remover valor
//console.log(lista.length) tamanho da lista
//console.log(lista.reverse()) inverter a lissta
//console.log(lista.join(" - "));  resultado : maçã - pêra - laranja
//console.log(lista);

var fruta = {nome: "maça", cor: "vermelha"};
var frutas = [{nome: "maça", cor: "vermelha"},{nome: "banana", cor: "amarela"},{nome: "uva", cor: "roxa"}]
console.log(frutas);


var idade = prompt ("Qual é sua idade")
if (idade >= 18){
    alert("você é maior de idade")
}else{
    alert("você é menor de idade")
};


var count = 1;            // estrutura de repetição while
while (count <= 5){
    console.log(count);
    alert(count);
    count = count + 1;   
};

var count;
for (count=0; count <=5; count++){            //estrutura de repetição com for
    alert(count);
};

var d = new Date(); //informa a data do dia
//alert(d);
//alert(d.getDate());
alert(d.getMonth());
//alert(d.getDay());
//alert(d.getHours());

function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    frase.replace(nome,novo_nome)
}
alert(setReplace("Vai Japão","Japão","Brasil"));

*/

function clicou(){
   //alert("Obrigado por clicar");
   document.getElementById("agradecimento").innerHTML = "<b>Obrigado por Clicar</b>" ;    
   //console.log(document.getElementById("agradecimento"))
}

function redirecionar(){
    window.open("https://github.com/Rickein/aula_javascript"); //abre uma nova aba 
    //window.location.href("https://github.com/Rickein/aula_javascript"); // abre olink na mesma aba
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "<b> Obrigado por passar o mouse </b>" ;
    elemento.innerHTML = " Obrigado por passar o mouse "      //innerHTML = trocar elemento do site
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "<b> Obrigado por passar o mouse </b>" ;
    elemento.innerHTML = "Passe o mouse aqui "
}