function saludar(nombre){
    console.log('Hola' + nombre)
}

function saludo(callback) {
    let nombre = prompt('Ingrese su nombre')
    callback(nombre)
};

saludo(saludar);