/*proximo passo primeira parte ok*/
var entradaMensagem = document.getElementById('entradaTexto');
var opçoes = document.getElementById('opçoes');
var incremento = document.getElementById('incremento');
var btncodificar = document.getElementById('enigmab1');
var btndecodificar = document.getElementById('enigmab2');
var alfabeto = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
var submit = document.querySelector('submit');
var saidaMensagem = document.querySelector('.saidaMensagem');

/* segunda parte ok*/
opçoes.addEventListener("change", function () {

    
    if(opçoes.value == 'cifraDeCesar') {
        incremento.style.display = 'block';
    
        
    }else if (opçoes.value == 'base64') {
        incremento.style.display = 'none';
    
    }else {
        alert('Escolha entre Cifra de Cesar ou Base64')
    }
    })


function codCesar() {
  var mensagem = entradaMensagem.value;
  var mensagemMinuscula = mensagem.toLowerCase()
  var transformarNumero = (Number(incremento.value) % 26)
  var codificada = '';

  for(var i = 0; i < mensagemMinuscula.length; i++){
     for(var j =0; j < alfabeto.length; j++){
       if(mensagemMinuscula[i] == alfabeto[j]){
         codificada += alfabeto [j + transformarNumero]
         break;
     } else if (mensagemMinuscula[i] == ' ') {
        codificada += ' ';
         break;
     }
    }
  

}
return codificada
}


  function decCesar() {
    var mensagem = entradaMensagem.value;
    var letraMinuscula = mensagem.toLowerCase()
    var numeroTransform = (Number(incremento.value) % 26)
    var codificada = '';
  
    for(var i = 0; i < letraMinuscula.length; i++){
       for(var j = alfabeto.length - 1; j >= 0; j--){
         if(letraMinuscula[i] == alfabeto[j]){
            codificada += alfabeto [j + numeroTransform]
           break;
       } else if (letraMinuscula[i] == ' ') {
        codificada += ' ';
           break;
       }
      }
      
  
  }
  return codificada
}
  
function codBase(){
    var mensagem = entradaMensagem.value;
    return btoa(mensagem);
}

function decBase(){
    var mensagem = entradaMensagem.value;
    return atob(mensagem);
}


submit.addEventListener('click', function(e){
    e.preventDefault();
    
    if(opçoes.value === "base64"){
        if(submit.value === "codificar"){
           
            saidaMensagem.innerText = codBase();
            
        }else{
            
            saidaMensagem.innerText = decBase();
        }
    }else if(opçoes.value === "cifraDeCesar"){
        if(saidaMensagem.value === "codificar"){
            saidaMensagem.innerText = codCesar();
            
        }else{
            
            saidaMensagem.innerText = decCesar();
        }
    }
});

