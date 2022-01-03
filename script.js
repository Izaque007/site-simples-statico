alert("Ola seja bem vindo.")


//então abaixo temos um teste de log bem simples com variavel.
/* 
var a;

a = "doce de leite";

console.log(a);



                                             //teste dois


 var a = 50 ;

 a += 50 ;



 console.log(a)


 */
//teste com palavras e juntando palavas
/* 
  var p2= "doido"

  var str= "ola mundo " + p2



  console.log(str)

 */

// if= se. 
// else= se não.

//teste usando esses comandos
/* 
 

  let idade = prompt ("Qual a sua Idade ?")

 
  
  let confirma = confirm ("  essa é sua idade "+ idade +" se sim confirme  ")

  


   if (idade >= 18 && idade <= 70  )

   
  {
       alert ( "ok entrada liberada" )
    
  }
  

else 
  {
      
       alert( "volte mais tarde" )

 } */
// // // // // // //  // // // // // // // //
/* 
  let nomePiloto = prompt (" Qual seu nome, piloto ")
  let velocidade = 0
  let novaVelocidade = prompt("A que velocidade voce gostaria de acelerar")
  let confirmarVelocidade = confirm("Estamos acelerando para " + novaVelocidade + "km")
  if(confirmarVelocidade) {
       velocidade = novaVelocidade
  }

  if(velocidade <= 0) {
       alert("Nave esta parada. Considere partir e aumentar a velocidade.")
  } else if(velocidade < 40) {
       alert("Voce esta devagar. Podemos aumentar mais.")
  } else if(velocidade < 80) {
       alert("Parece uma boa velocidadepara manter.")
  } else if(velocidade <100) {
       alert("Velocidade alta. Considere diminuir.")
  } else {
       alert("Velocidade perigosa. Controle automático forçado.")
  } 

*/

// // // // // conversor de anos luz // // // // // // // 
/* 
 let distaciaInly = prompt ("Digite a distacia em anos luz")
let chosenOption= prompt ("Para qual unidade deseja coveter\n1. Parse(pc)\n2. Unidade Astronomica (AU) " +
                          " \n3. Quilometros (km)\n\n(Digite o numero da  opção desejada)")
let chosenUnity
let convertedDistance

switch (chosenOption) {
     case "1":
          chosenUnity = "Parsec"
          convertedDistance = distaciaInly * 0.306601
          break
     case "2":
          chosenUnity = "Unidade Astronomica"
          convertedDistance = distaciaInly * 63241.1
          break
     case "3":
          chosenUnity = "Quilometros"
          convertedDistance = distaciaInly * 9.5 * Math.pow(10, 12)
          break
     default:
          chosenUnity = "Unidade Desconhecida"
          convertedDistance = " problemas na comversão"
}
alert("Distancia em anos luz=" + distaciaInly + "\n" + chosenUnity + "=" + convertedDistance)  */

/* ||= ou Contador de letras a de uma frasse */
/* 
    let fruta = "Abacaxi"
   let position = 0
   let frutaLength = fruta.length
   
   while(position < frutaLength ){
       if(fruta [position] == "a" || fruta [position] == "A" ) {
        console.log(position)
    } 
     position += 1
   }
    */


/*  Contador de dobras espaciais */
/* 
    let warpCount = 0
  let chosenOption = ""

  let spaceship = prompt ("Digite o nome da nave") 

  chosenOption = prompt ("Deseja entrar em dobra espacial\n1 - Sim\n2-Não")

  while(chosenOption =="1") {
       warpCount += 1 
       chosenOption =prompt ("Deseja ir para a proxima dobra espacial\n1 - Sim\n2-Não")
  }
  
  alert("Nave=" + spaceship + "\nQuantidade de dobras=" + warpCount)
    




    let sapaceship = "Helmet"
  let newSpaceship = ""

  for(let i = 0; i < sapaceship.length; i++) {
      if(sapaceship[i] == "e"){
           newSpaceship += "i"
      } else {
           newSpaceship += sapaceship[i]
      }
  }

console.log(newSpaceship)  */


/* IVERTER NOME DA NAVE ATÉ A LETRA E */

/* let spaceshipName = prompt ("Qual é o nome da nave")

let  invertedName = ""

for(let i = spaceshipName.length -1; i >= 0; i--) {
   if(spaceshipName[i] == "e") {
        break
   }
   invertedName += spaceshipName[i]
}
alert("Nome original da nave=" + spaceshipName + "\nNome após ocultação=" + invertedName) 
 
*/


/*  
 let spaceShipName = prompt("Qual é o nome da nave?")

let velocidade = 0

function acelerar(){
    velocidade += 5
}

function desacelerar(){
    if(velocidade < 0){
        alert("Impossívelo realizar ação!! Nave ja esta parada, ou seja, com velocidade de 0 Km/s")
    }else{
        velocidade -= 5
    }
    
}

function dadosBordo(){
    alert(spaceShipName + " " + velocidade + " Km/s")
}

function sairSisitema(){
    alert(`Você saiu do Sistema!!`)
}


function menu(){
      let opcao = prompt("Qual opção você deseja realizar?" + "\n1 - Acelerar nave em 5km/s" + "\n2 - Desacelerar em 5km/s" + "\n3 - Imprimir dados de Bordo" + "\n4 - Sair do programa(SAIR)") 
       switch(opcao){
        case "1":
            acelerar()
        break

        case "2":
            desacelerar()
        break

        case "3":
            dadosBordo()
        break
        
        case "4":
           alert("Saiu do sistema!!")
        break

        default:
        alert("Opção inválida!!!!")
        
    }
return opcao
}

//faz 
do{
    menu()
}
//enquanto
while (menu() != "4")  */

// Não igual (!=) Retorna verdadeiro caso os operandos não sejam iguais.  



// Aqui temos uma fun~çao callbak que fica dentro de uma funçao

/* function  dobrodevelocidade(vecidade, printer) {
console.log("Entrei em dobro de velocidade")
let novavelociade = vecidade * 2 + 10 
//A variavel printer recebera uma função
printer(novavelociade)
return novavelociade
}

let outravelocidade = dobrodevelocidade(60, vecidade => {
   console.log ("Outra Velocidade = " + vecidade  )
}
) 
 

//Outro exemplo usando callbak 
function slowdown(velocity, printer) {
 let desacelerar = 20

 while (velocity > 0) {
      printer(velocity)
      velocity -= desacelerar
 }
 alert("Nave parada")
}

let navevelocidade = 150

slowdown (navevelocidade, function(velocity) {
   console.log("velocidade atual = " + velocity)
})  */


// Abaixo tem um exemplo de objeto  representado po {} e dentro temos um araaw representado por []

/* let nave = {
     nome: "Supernova",
     tipo: "Batalha",
     comandante: ["Silva", "Cap Nascimento", "Fernanda"]

}

nave.comandante.push("Geovana")

console.log(nave) 

 */

//CODICO FALHO DIFICULDADE EM ACHAR O ERRO

/* 
let  nave = {
     velocidade: 0,
     speedUp: function(aceleracao){
          this.velocidade += aceleracao
     }
}

function registrarNave(){
     nave.name = prompt("Informe o nome de sua nave")
     nave.type = prompt("Informe o tipo de sua nave")
     nave.maxVelocidade = number(prompt("Informe a velocidade maxima de sua nave km"))
}

function acelerar(){
     let aceleraçao = number(prompt("Quanto voce deseja acelerar km"))
     nave.speedUp(aceleraçao)
     if (nave.velocidade > nave.maxVelocidade){
          alert("VELOCIDADE MAXIMA ULTRAPASSADA" +
                "\nVelocidade da Nave ="  + nave.velocidade + "km" +
                "Velocidade maxima a nave =" + nave.maxVelocidade + "km")
     }
}

function parar(){
     alert( "Nome=" + nave.name + "\nTipo" + nave.type + "\nVelocidade da nave="
            + nave.velocidade + "\nMaxima da nave=" + nave.maxVelocidade)
              nave.velocidade = 0
}

function menu(){
     let menuOpition
     do {
          menuOpition = prompt("Voce deseja=\n1- Acelerar\n2- Parar")
          switch (menuOpition) {
               case "1":
                    acelerar()
                    break;

               case "2":
                    parar()
                    break;
               default:
                    alert("Opção invalida")
                    
          }
     } while(menuOpition != "2")
}
registrarNave()
menu() */

//JAVASCRIPT ORIENTADO A OBJETO CLASSES AULA JAVASCRIPT INTERMEDIARIO PRATICANDO CLASSES
// ]CODICO NESSECITA DE CORREÇÃO FALHAS PRESENTES... BOA SORTE (-_-)

/* 
class naveEspacial {
   constructor(name, tripulação) {
     this.name = name
     this.tripulação = tripulação
     this.engatado = false
     this.portasAbertas = false
}

//ABAIXO TEM O METODO ENGATE
engate() {
     this.engatado = true
     this.portasAbertas = true
}
}

function Menu() {
     let menuOpição
     while (menuOpição != "1" && menuOpição != "2" && menuOpição != "3") {
          menuOpição = prompt(
                               "O que deseja fazer\n" +
                               "1- Engatar nave\n" +
                               "2- Imprimir naves\n" +
                               "3- Sair do progama")
     }
     return menuOpição
}

function criarNaveEspacial(){
     let naveName = prompt("Informe o nome de sua nave")
     let tripulação = prompt("Informe a quantidade de tripulantes")
     let nave =  new naveEspacial(naveName, tripulação)
     return naveEspacial
}

function imprimirListadeNave(naves){
     let naveEspacialLista = ""
     naveEspacial.forEach((naves, index) => {
        naveEspacialLista += (index + 1) + "-" + naveEspacial.name + "(" + naveEspacial.tripulação +" tripulantes)\n"
     })
          alert(naveEspacialLista)
     
}
let engatarNaveEspacial = []

let menuOpição

while (Menu != "3") {
     menuOpição = Menu()
     switch (menuOpição) {

          case "1":
               let adicionarNaveEspacial = criarNaveEspacial()
               adicionarNaveEspacial.engatado()
               engatarNaveEspacial.push(adicionarNaveEspacial)
               break;
          case "2":
               imprimirListadeNave(engatarNaveEspacial)
               break;
     }
     
} */

//MÉTODOS "GET E SET" MAS SÓ UTILIZAREI O GET . COMPLICADO NEM TANTO HEHEHE
/* 
class centralDprocessamento {
     constructor(nome, cargaMensal) {
          this.nome = nome
          this.cargaMensal = cargaMensal
     }
     //MÉTODO ABAIXO get que pode ser chamado como uma variavel
   get cargaCemanal() {
     return this.cargaMensal / 4
   }
}
//O operador new cria uma instancia de um tipo de objeto 
let processadorDrecursos = new centralDprocessamento ("MIA", 500)

console.log(processadorDrecursos.cargaCemanal)

processadorDrecursos.cargaMensal = 600


console.log(processadorDrecursos.cargaCemanal)

 */


//PROBLEMAS NA EXECUÇÃO DO CÓDICO 
/* function adicionarCelular() {
     const celularForm = document.querySelector("form#celulares")
     const novoCelular = celularForm.children[0].cloneNode(true)
     const celularPosição = celularForm.children.length + 1
     novoCelular.querySelector("label").innerText = "Celular" + celularPosição + " = "
     celularForm.appendChild(novoCelular)
     console.log(celularForm.children)
}

 function printCelular() {
      let mensagem = ""
      const Celular = document.querySelectorAll("input[name= 'Celular']")
      Celular.forEach((celular, index) => {
           mensagem += "celular" + (index + 1) + " =" + celular.value + "\n" 
      })
      alert(mensagem)
 } */




// MECHENDO NO HTML PELO JAVASCRIPT

function salvarCasa() {
     let area = document.querySelector("input[name='area']").value
     let numero = document.querySelector("input[name='numero']").value
     let bairro = document.querySelector("input[name='bairro']").value
     let cidade = document.querySelector("input[name='cidade']").value

     let novaListaValor = document.createElement("li")
     novaListaValor.innerText = area + "m2 , numero" + numero + "(" + bairro + "-" + cidade + ")"
     //inerText esta colocando as variaveis armazenadas na variavel dentro da lista que vai ser imprimida

     //aqui estou criando um butom e paasando um tributo para ele lembrando
     // que ele sera incrido no htm asim como a lista
     let botãoRemover = document.createElement("button")
     botãoRemover.type = "button"
     botãoRemover.innerText = "Remover"
     botãoRemover.setAttribute("onclick", "removerCasa(this)")

     novaListaValor.appendChild(botãoRemover)
     //nov lista esta agora recebendo o botão de remover

     document.getElementById("casa-lista").appendChild(novaListaValor)
     //aqui estamos pegando um elemento que ja esta no html e adicionando um filho a ele no cassop um butom

}

function removerCasa(button) {
     let removerLista = button.parentNode
     document.getElementById("casa-lista").removeChild(removerLista)
     //e aqui estamos removendo o li que adicionaqmos no inicio
}

//Evento para o formulário. EVENTO OCORREU DE FORMA DIFERENTE DO PREVISTO

function salvar() {
     let nome = document.querySelector("input[name='nome']").value
     let linguagemProgamada = document.querySelector("select[name='linguagemProgamada']").value
     alert("Nome:" + nome + "\nLiguagem de Progamação:" + linguagemProgamada)
}


