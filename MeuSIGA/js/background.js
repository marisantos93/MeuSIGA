

window.onload = function() { //executa o JavaScript imediatamente após a página ser carregada


var boxes = document.querySelectorAll("#abas div [type='checkbox']"); // seleciona os checkboxes
var ls = localStorage.getItem("box"); // atribui o localStorage (LS) à variável ls

if(ls){ // verifica se o LS existe (se ls é verdadeiro)
   var b = ls.split(","); // converte o LS em array
   for(var x=0; x<boxes.length; x++){ // loop nos checkboxes
      document.getElementById(boxes[x].id).parentNode.style.display = "none"; // seleciona a div-pai so checkbox
      if(~b.indexOf(boxes[x].id)){ // verifica se o id do checkbox existe na array do LS
         document.getElementById(boxes[x].id).checked = true; // checa o checkbox
         document.querySelector("[data-id='"+boxes[x].id+"']").style.display = "inline-block"; // mostra a div da imagem relacionada com o data-id igual ao id do checkbox

         document.getElementById("aplica").style.display = 'none'; // oculta botão aplicar
         document.getElementById("edita").style.display = 'block'; // mostra botão editar
         document.getElementById("cancela").style.display = 'none'; // oculta botão cancela
      }
   }
   var checados = b;
}else{
   var checados = []; // cria uma array
}
   for(var x=0; x<boxes.length; x++){ // loop nos checkbox
      boxes[x].onchange = function(){ // evento change
         var idx = checados.indexOf(this.id); // atribui à variável idx se o id do checkbox existe na array
         if(this.checked && !~idx){ // verifica se está checado e não existe na array
            checados.push(this.id); // adiciona o id na array
            //document.getElementById(this.id).parentNode.style.display = "none"; // oculta a div-pai do checkbox
            //document.querySelector("[data-id='"+this.id+"']").style.display = "block"; // mostra a div da imagem relacionada com data-id igual ao id do checkbox
            document.getElementById("aplica").style.display = 'inline'; // mostra botão aplicar
            document.getElementById("edita").style.display = 'none'; // oculta botão editar
            document.getElementById("cancela").style.display = 'inline'; // mostra botão cancela

         }else{
            checados.splice(idx, 1); // remove da array quando é deschecado (acho que nem precisa disso)
         }
         localStorage.setItem("box", checados); // cria o LS com o valor da array
      }
   } 


//Verifca se os checkbox estão marcados, caso esteja, pega as img correspondentes
function checar(){

     var checa = document.getElementsByName("toggle"); //Pega todos os elementos com o nome toggle
     var img = document.getElementsByName("icons"); //Pega todos os elementos com o nome icon


     var numElementos = checa.length; //Atribuo a numElementos a quantidade de elementos contidos em checa
     var i = 0;

     while (i <= numElementos){ //Loop até tam de numElementos
        if(checa[i].checked == true){ // se elemento i de checa estiver marcado

               document.getElementById("zoom"+i).style.display = 'inline-block'; // mostra imagem
               document.getElementById("consulta"+i).style.display = 'none'; // oculta checkbox marcada
               document.getElementById("aplica").style.display = 'none'; // oculta botão aplicar
               document.getElementById("edita").style.display = 'inline'; // mostra botão editar
               document.getElementById("cancela").style.display = 'none'; // oculta botão cancela


            }

        else{ //senão
            document.getElementById("consulta"+i).style.display = 'none'; // oculta checkbox marcada
        }
        
        i++;
     }
}

document.getElementById('aplica').onclick = checar; //Crio um botão suspenso, executa uma função quando o botão com o id = aplica for selecionado




//função que retira as imagens e retorna para os checkbox

function retornar(){

     var checa = document.getElementsByName("toggle"); //Pega todos os elementos com o nome toggle
     var img = document.getElementsByName("icons"); //Pega todos os elementos com o nome icon


     var numElementos = checa.length; //Atribuo a numElementos a quantidade de elementos contidos em checa
     var i = 0;

     while (i <= numElementos){ //Loop até tam de numElementos

        if(checa[i].checked == true){ // se elemento i de checa estiver marcado

               document.getElementById("zoom"+i).style.display = 'none'; // oculta imagem
               document.getElementById("consulta"+i).style.display = 'inline-block'; // mostra checkbox marcada
               document.getElementById("aplica").style.display = 'block'; // mostra botão aplicar
               document.getElementById("edita").style.display = 'none'; // oculta botão editar
               document.getElementById("cancela").style.display = 'inline-block'; // mostra botão cancela

            }

        else{
            document.getElementById("consulta"+i).style.display = 'inline-block'; // mostra checkbox marcada
        }
        
        i++;
     }

      

}

document.getElementById('edita').onclick = retornar; //Crio um botão suspenso, executa uma função quando o botão com o id = edita for selecionado


//função que desmarca todos os checkbox

function desmarcar(){

  document.getElementById('aplica').disabled = true; // desbilito o botão com o id= aplica

    var checa = document.getElementsByName("toggle"); //Pega todos os elementos com o nome toggle

    var numElementos = checa.length; //Atribuo a numElementos a quantidade de elementos contidos em checa
    var i = 0;

    for (i = 0; i < numElementos; i++){ //Loop até tam de numElementos

        if (checa[i].type == "checkbox"){ //Se o elemento de checa for do tipo checkbox

            checa[i].checked = false; //desmarco o checkbox

            document.getElementById("consulta"+i).style.display = 'inline-block'; // mostra checkbox 
        }
    }

    document.getElementById('aplica').disabled = 'true'; //desabilito o botão aplicar
    
}

document.getElementById('cancela').onclick = desmarcar; //Crio um botão suspenso, executa uma função quando o botão com o id = cancela for selecionado





function ativar(){

var checa = document.getElementsByName("toggle"); //Pega todos os elementos com o nome toggle

    var numElementos = checa.length; //Atribuo a numElementos a quantidade de elementos contidos em checa

    var bt = document.getElementById("aplica"); //Pega todos os elementos com o nome aplica

    for(var x=0; x<numElementos; x++){ //Loop até tam de numElementos

        checa[x].onclick = function(){ //atribui o elemento onclick ao elemento checa[x] e executa uma função

            var cont = document.querySelectorAll("input[name='toggle']:checked").length; // seleciona os elementos do que tem o nome toggle e que está marcado
            bt.disabled = cont ? false : true; // Se cont for verdadeira executa retorna false senão retorna verdadeiro (operador ternário)
        }
    }
}

document.getElementById('biblio').onclick = ativar;  //Crio um botão suspenso, executa uma função ativar quando o botão com o id = biblio for selecionado
document.getElementById('ensino').onclick = ativar;  //Crio um botão suspenso, executa uma função ativar quando o botão com o id = ensino for selecionado
document.getElementById('assist-estud').onclick = ativar;  //Crio um botão suspenso, executa uma função ativar quando o botão com o id = assist-estud for selecionado
document.getElementById('dados').onclick = ativar;  //Crio um botão suspenso, executa uma função ativar quando o botão com o id = dados for selecionado
document.getElementById('pesquisa').onclick = ativar;  //Crio um botão suspenso, executa uma função ativar quando o botão com o id = pesquisa for selecionado
document.getElementById('ufvjm').onclick = ativar;  //Crio um botão suspenso, executa uma função ativar quando o botão com o id = ufvjmfor selecionado


document.getElementById('tutorial').onclick = abrirTutorial; //Botão suspenso do tutorial

function abrirTutorial(){ //função que abre o tutorial

  window.location ="html/tutorial.html";
}

document.getElementById('creditos').onclick = abrirCreditos; //Botão suspenso dos creditos

function abrirCreditos(){ //função que abre os creditos

  window.location ="html/creditos.html";
}

};


