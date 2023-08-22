/*======================= sticky navbar =================== */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*========================= scroll sections ovtive link ==================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*======================= sticky navbar =================== */
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*======================= remove toggle icon and navbar when click navbar link (scroll) =================== */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*======================= scroll reveal =================== */
ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {
    origin:
        'bottom'
});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*======================= typed js =================== */
const typed = new Typed('.multiple-text', {
    strings: ['Desenvolvedor Web Front-End' , 'Designer Grafico' , 'Editor de Video', 'Youtuber', 'Blogueiro' ,],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

function leiaMais(){
    var pontos=document.getElementById("pontos");
    var maisTexto=document.getElementById("mais");
    var btnLeiaMais=document.getElementById("btnLeiaMais");

    if(pontos.style.display === "none"){
        pontos.style.display="inline";
        maisTexto.style.display="none";
        btnLeiaMais.innerHTML="Leia Mais";
    }else{
        pontos.style.display="none";
        maisTexto.style.display="inline";
        btnLeiaMais.innerHTML="Leia Menos";
    }
    
}

function leiaMais2(){
    var pontos=document.getElementById("pontos2");
    var maisTexto=document.getElementById("mais2");
    var btnLeiaMais=document.getElementById("btnLeiaMais2");

    if(pontos.style.display === "none"){
        pontos.style.display="inline";
        maisTexto.style.display="none";
        btnLeiaMais.innerHTML="Leia Mais";
    }else{
        pontos.style.display="none";
        maisTexto.style.display="inline";
        btnLeiaMais.innerHTML="Leia Menos";
    }
    
}

function leiaMais3(){
    var pontos=document.getElementById("pontos3");
    var maisTexto=document.getElementById("mais3");
    var btnLeiaMais=document.getElementById("btnLeiaMais3");

    if(pontos.style.display === "none"){
        pontos.style.display="inline";
        maisTexto.style.display="none";
        btnLeiaMais.innerHTML="Leia Mais";
    }else{
        pontos.style.display="none";
        maisTexto.style.display="inline";
        btnLeiaMais.innerHTML="Leia Menos";
    }
    
}

function leiaMais4(){
    var pontos=document.getElementById("pontos4");
    var maisTexto=document.getElementById("mais4");
    var btnLeiaMais=document.getElementById("btnLeiaMais4");

    if(pontos.style.display === "none"){
        pontos.style.display="inline";
        maisTexto.style.display="none";
        btnLeiaMais.innerHTML="Leia Mais";
    }else{
        pontos.style.display="none";
        maisTexto.style.display="inline";
        btnLeiaMais.innerHTML="Leia Menos";
    }
    
}

function leiaMais5(){
    var pontos=document.getElementById("pontos5");
    var maisTexto=document.getElementById("mais5");
    var btnLeiaMais=document.getElementById("btnLeiaMais5");

    if(pontos.style.display === "none"){
        pontos.style.display="inline";
        maisTexto.style.display="none";
        btnLeiaMais.innerHTML="Leia Mais";
    }else{
        pontos.style.display="none";
        maisTexto.style.display="inline";
        btnLeiaMais.innerHTML="Leia Menos";
    }
    
}

function leiaMais6(){
    var pontos=document.getElementById("pontos6");
    var maisTexto=document.getElementById("mais6");
    var btnLeiaMais=document.getElementById("btnLeiaMais6");

    if(pontos.style.display === "none"){
        pontos.style.display="inline";
        maisTexto.style.display="none";
        btnLeiaMais.innerHTML="Leia Mais";
    }else{
        pontos.style.display="none";
        maisTexto.style.display="inline";
        btnLeiaMais.innerHTML="Leia Menos";
    }
    
}

function leiaMais7(){
    var pontos=document.getElementById("pontos7");
    var maisTexto=document.getElementById("mais7");
    var btnLeiaMais=document.getElementById("btnLeiaMais7");

    if(pontos.style.display === "none"){
        pontos.style.display="inline";
        maisTexto.style.display="none";
        btnLeiaMais.innerHTML="Leia Mais";
    }else{
        pontos.style.display="none";
        maisTexto.style.display="inline";
        btnLeiaMais.innerHTML="Leia Menos";
    }
    
}