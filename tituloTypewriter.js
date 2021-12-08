function maquinaEscrever (elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '',
    textoArray.forEach((letra, i) => {
        setTimeout(function(){
            elemento.innerHTML += letra;
        }, 80 * i)
    })
}

const titulo = document.querySelector('h1');
maquinaEscrever(titulo);