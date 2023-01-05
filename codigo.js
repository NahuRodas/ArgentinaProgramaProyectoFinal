    //------- Codigo para la barra de navegacion ----------

    // Declaracion de variables.
var btnSobreMi = document.getElementById('btn-sobre-mi'),
    btnProyectos = document.getElementById('btn-proyectos'),
    btnCv = document.getElementById('btn-cv'),
    btnContacto = document.getElementById('btn-contacto'),
    proyectos = document.getElementById('proyectos'),
    contacto = document.getElementById('contacto'),
    cv = document.getElementById('cv');
 
btnSobreMi.addEventListener('click', e =>{
    window.scrollTo({
        top: 0,
        left: 0
    });
})

btnProyectos.addEventListener('click', e =>{
    window.scrollTo({
        top: proyectos.offsetTop,
        left: proyectos.offsetLeft
    });
})

btnContacto.addEventListener('click', e =>{
    window.scrollTo({
        top: contacto.offsetTop,
        left: contacto.offsetLeft
    })
})

btnCv.addEventListener('click', e =>{
    window.scrollTo({
        top: cv.offsetTop,
        left: cv.offsetLeft
    })
})



    //------- Codigo para generar el movimento del slider ---------

    // Declaracion de variables.
const slider = document.getElementById('slider');
let sldierSection = document.querySelectorAll('.slider-section'),
    sldierSectionLast = sldierSection[sldierSection.length - 1];

const btnLeft = document.getElementById('btn-izquierda'),
      btnRight = document.getElementById('btn-derecha');

    // Colocamos la ultima imagen a la izquierda de la primera.
slider.insertAdjacentElement('afterbegin', sldierSectionLast);

    // Funcion para mover el slider hacia la derecha.
function NextImg() {
    let sldierSectionFirst = document.querySelectorAll('.slider-section')[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sldierSectionFirst);
        slider.style.marginLeft = "-100%";
    },500);
}

    // Funcion para mover el slider hacia la izquierda.
function PrevImg() {
    let sldierSection = document.querySelectorAll('.slider-section'),
        sldierSectionLast = sldierSection[sldierSection.length - 1];

    slider.style.marginLeft = "0%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sldierSectionLast);
        slider.style.marginLeft = "-100%";
    },500);
}

    // Ejecucion de las funciones con los eventos de los botones derecha e izquierda.
btnRight.addEventListener('click', function(){
    NextImg();
});

btnLeft.addEventListener('click', function(){
    PrevImg();
});

    // Slide automatico.
/* setInterval(function(){
    NextImg();
},4000); */