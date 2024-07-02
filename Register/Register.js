const nombre = document.querySelector('#Nombre');
const Apellido = document.querySelector('#Apellido');
const password1 = document.querySelector('#password1');
const password2 = document.querySelector('#password2');
const btn = document.querySelector('.btn');
const form = document.querySelector('.form');

let errores = 0;

form.addEventListener('submit',(event)=>{
    if(nombre.value === ""){
        const e1 = document.querySelector('#error1')
        e1.textContent = "Ingrese su Nombre";
        errores ++;
    };

    if(Apellido.value === ""){
        const e2 = document.querySelector('#error2')
        e2.textContent = "Ingrese su Apellido";
        errores ++;
    };

    if(password1.value.length < 6){
        const p1 = document.querySelector('#pass1')
        p1.textContent = "La contraseña debe tener mas de 6 caracteres";
        errores ++;
    };

    if(password2.value !== password1.value){
        const p2 = document.querySelector('#pass2');
        p2.textContent = "Las contraseñas no coinciden";
        errores ++;
    };

    if(errores > 0){
        event.preventDefault();
        errores = 0;
    }
});