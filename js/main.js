console.log("Mi cv")


//Funciones


function ocultar_elemento(elemento){
    elemento.style.display='none'
}

function mostrar_elemento(elemento){
    elemento.style.display='inline-table'
}

function modificar_parrafo (parrafo){
    document.getElementById('about_me').innerHTML=parrafo;
}

//variables
//let intro_about_me = document.getElementById("about_me");

const about_me_intro='Soy diseñadora UX/UI, desarrolladora web frontend y también licenciada en nutrición.                                            ';

const about_me='Soy diseñadora UX/UI, desarrolladora web frontend y también licenciada en nutrición. Durante la pandemia, conoci este nuevo mundo y tuve la oportunidad de aprender nuevas herramientas. Uno de mis objetivos es poder seguir este camino laboral y profesionalmente, capacitandome, adquiriendo nuevas habilidades y llevandolas a la práctica. Y por qué no, cuando sea propicio, darle mi persepectiva en relación a la salud y la nutricón cuando.';


let boton = document.getElementById("boton");

let boton_ocultar = document.getElementById("boton_ocultar");



//Código

modificar_parrafo(about_me_intro);

ocultar_elemento(boton_ocultar);

boton.addEventListener('click', function(){

    modificar_parrafo(about_me);
    ocultar_elemento(boton)
    
    mostrar_elemento(boton_ocultar);

});

boton_ocultar.addEventListener('click',function(){
    ocultar_elemento(boton_ocultar);
    modificar_parrafo(about_me_intro);
    mostrar_elemento(boton)
})




/* document.getElementById("boton_ocultar").addEventListener('click', function(){

    document.getElementById("about_me").style.display='none';
    
    document.getElementById("boton_ocultar").style.display='none';
}); */