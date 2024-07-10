let numeroSecreto = 0
let intentos = 0
let listaNumerosSorteados = []
let numeroMaximo = 10


/* let parrafo = document.querySelector('p');
//devuelve el primer elemento que coincida con el selector CSS
parrafo.innerHTML = 'Indica un numero del 1 al 10' */

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log('intentos ' + intentos);
    console.log(numeroSecreto);
    console.log(numeroDeUsuario);

    if (numeroDeUsuario === numeroSecreto) {
        //preguntarle a naranja si entiende este codigo
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`)
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (numeroDeUsuario < numeroSecreto) {
            asignarTextoElemento('p','El numero es Mayor')
        }else{
            asignarTextoElemento('p','El numero es menor')
        }
        intentos++;
        limpiarCaja()
        return;
    }
    

    console.log(numeroDeUsuario == numeroSecreto);
}
function limpiarCaja(){
    /*     Estructura sin resumir
        let valorCaja = document.querySelector('#valorUsuario');
        valorCaja.value = ''; */
        document.querySelector('#valorUsuario').value = '';
    }
function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

  console.log('Numero Generado ' + numeroGenerado);
  console.log(listaNumerosSorteados);


  if (listaNumerosSorteados.length == numeroGenerado) {
    asignarTextoElemento('p','Ya se sortearon todos los numeros posibles')
    
  } else{

      if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto()
      }else{
        listaNumerosSorteados.push(numeroGenerado)
        return numeroGenerado
      }
  }

}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secretin')
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`)
    numeroSecreto = generarNumeroSecreto();
    intentos = 1        
}
function reiniciarJuego(){
    limpiarCaja()
    condicionesIniciales()
    document.querySelector('#reiniciar').setAttribute('disabled','true')
}

condicionesIniciales()





