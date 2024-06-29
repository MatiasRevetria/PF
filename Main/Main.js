function saludar(nombre){
    console.log('Hola' + nombre)
}

function saludo(callback) {
    let nombre = prompt('Ingrese su nombre')
    callback(nombre)
};

saludo(saludar);

function Animal(nombre,especie){
    this.nombre = nombre;
    this.especie = especie;
}

Animal.prototype = {
    hablar: ()=>{
        console.log("Hola soy "+this.nombre+" y soy un "+this.especie);
    }
}

const Dog = Object.create(Animal.prototype);

function cambiar() {
    let x = document.getElementsByClassName("banner");
    x[0].textContent = "GOTY"
}
