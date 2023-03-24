

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("bootstrap");
        habilidades[3].classList.add("comunicacion");
        habilidades[4].classList.add("trabajoenequipo");
        habilidades[5].classList.add("dedicacion");
    }
}

window.onscroll = function(){
    efectoHabilidades();
 }


 let btnUno = document.querySelector('.btn-1'); 

btnUno.addEventListener('click', mensaje);

function mensaje() {
    alert('Lo sentimos, link en reparacion.')
};

let btnDos = document.querySelector('.btn-2'); 

btnDos.addEventListener('click', mensaje);

function mensaje() {
    alert('Lo sentimos, link en reparacion.')
};

let btnTres = document.querySelector('.btn-3'); 

btnTres.addEventListener('click', mensaje);

function mensaje() {
    alert('Lo sentimos, link en reparacion.')
};

let btnCuat = document.querySelector('.btn-4'); 

btnCuat.addEventListener('click', mensaje);

function mensaje() {
    alert('Lo sentimos, link en reparacion.')
};

let btnCin = document.querySelector('.btn-5'); 

btnCin.addEventListener('click', mensaje);

function mensaje() {
    alert('Lo sentimos, link en reparacion.')
};

let btnSeis = document.querySelector('.btn-6'); 

btnSeis.addEventListener('click', mensaje);

function mensaje() {
    alert('Lo sentimos, link en reparacion.')
};
