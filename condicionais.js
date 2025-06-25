// condicional IF, só irá executar o comando "executou comando" se tiver em condição TRUE.
let ehLigado = true

if(ehLigado){
    console.log ("executou comando")
}

// condicional IF só executa se for true. ele verifica se o codigo que está dentro do scopo-
// estiver correto, ele executa a mensagem. neste script "o item comprado é : leite"
// exemplo de uma lista de mercado. 
let possuiOvos = true
let itemComprados = ""

if (possuiOvos){
itemComprados = "leite"
}

console.log ("o item comprado é : " + itemComprados)

// agora a condicional ELSE, diferente da IF, ela executa se tiver false
// condicional ELSE, é a SENÃO for true será false
// seguindo o exemplo da lista de mercado.
let possuiOvoss = false
let  itensCompradoss = ""

if (possuiOvoss){
 itensCompradoss = "leite"
}
else{
    console.log ("passou na padaria e comprou")
    itensCompradoss = "Pão francês"
}
console.log ("o item comprado é : " + itensCompradoss)

//aqui iremos usar a condicional ELSE IF, usei ela em IF encadeado, uma condicional junto da outra.
//Condicional ELSE IF ela representa o SENÃO, se não executar true e o false, irá executar o ELSE IF.
let nivelDeFome = 15

if (nivelDeFome ===1){
    console.log ("pouca fome")
}else if (nivelDeFome ===2){
    console.log("muita fome")
}
else{
    console.log("morrendo de fome")
}