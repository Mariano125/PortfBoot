

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