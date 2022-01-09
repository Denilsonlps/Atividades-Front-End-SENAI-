

let dataAtual = 14/12/2021
let dataLimite = 20/12/2021

if (dataAtual > dataLimite){
    console.log("Data de evento não encontrada. Tente outra data.")
dataAtual = false
}else{
    dataAtual = true;
}



let dados = {"Nome": "Denilson", "Idade": 18, "Endereço": "Rua da União, N°57, Bairro: Vila Nova República, São Luis-Ma"}
let idadeLimite = 18

if(dados.Idade < idadeLimite){
    console.log("Voçê presisar ser maior de idade para realizar o cadastro")
    dados = false;
} else {
     dados = true;
}





let listaDeParticipantes = ['pessoa1','pessoa2', 'pessoa3','pessoa4','pessoa5','pessoa6','pessoa7','pessoa8','pessoa9'].length;
// o comando .lengthb verifica a quantidade de conteudo de uma lista da variavel
if (listaDeParticipantes > 100){
    console.log("Quantidade excedida")
    listaDeParticipantes = false
} else{
    listaDeParticipantes = true;
}

if(dataAtual == true && dados == true && listaDeParticipantes == true){
    console.log("Cadastro Realizadocom sucesso.")
}
