// =====================================
// BARRETO WEB 2.0
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    // ============================
    // LOADER
    // ============================

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {

        if(loader){

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";

            },600);

        }

    });

    // ============================
    // MENU MOBILE
    // ============================

    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector("#menu");

    if(menuToggle && menu){

        menuToggle.addEventListener("click",()=>{

            menu.classList.toggle("active");

            const icon = menuToggle.querySelector("i");

            if(menu.classList.contains("active")){

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            }else{

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });

    }

    // ============================
    // FECHAR MENU
    // ============================

    document.querySelectorAll("#menu a").forEach(link=>{

        link.addEventListener("click",()=>{

            menu.classList.remove("active");

            const icon = menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });

    // ============================
    // ROLAGEM SUAVE
    // ============================

    document.querySelectorAll('a[href^="#"]').forEach(link=>{

        link.addEventListener("click",function(e){

            e.preventDefault();

            const destino = document.querySelector(this.getAttribute("href"));

            if(destino){

                destino.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

});
// ============================
// HEADER AO ROLAR
// ============================

const header = document.querySelector("#header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("header-scroll");

    } else {

        header.classList.remove("header-scroll");

    }

});

// ============================
// ANIMAÇÕES AO ROLAR
// ============================

const elementos = document.querySelectorAll(

".card, .portfolio-card, .plano, .depoimento-card, .faq-item"

);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

elementos.forEach((item) => {

    item.classList.add("hidden");

    observer.observe(item);

});

// ============================
// BOTÃO VOLTAR AO TOPO
// ============================

const btnTopo = document.createElement("button");

btnTopo.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

btnTopo.className = "btn-topo";

document.body.appendChild(btnTopo);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        btnTopo.classList.add("mostrar");

    } else {

        btnTopo.classList.remove("mostrar");

    }

});

btnTopo.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
// ============================
// CONTADORES
// ============================

const numeros = document.querySelectorAll(".hero-stats h2");

const iniciarContador = (elemento) => {

    const texto = elemento.innerText.replace(/\D/g, "");

    if (!texto) return;

    const alvo = parseInt(texto);

    let atual = 0;

    const incremento = Math.ceil(alvo / 40);

    const timer = setInterval(() => {

        atual += incremento;

        if (atual >= alvo) {

            elemento.innerText = alvo + "+";

            clearInterval(timer);

        } else {

            elemento.innerText = atual + "+";

        }

    }, 40);

};

numeros.forEach(item => {

    iniciarContador(item);

});

// ============================
// EFEITO NOS BOTÕES
// ============================

document.querySelectorAll(
".btn-primary,.btn-secondary,.btn-demo,.btn-orcamento,.btn-header"
).forEach(botao => {

    botao.addEventListener("mouseenter", () => {

        botao.style.transform = "translateY(-5px) scale(1.03)";

    });

    botao.addEventListener("mouseleave", () => {

        botao.style.transform = "";

    });

});

// ============================
// EFEITO NAS IMAGENS
// ============================

document.querySelectorAll(".portfolio-card img").forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.transform = "scale(1.08)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "";

    });

});

// ============================
// ANO AUTOMÁTICO
// ============================

const copyright = document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML =
    `© ${new Date().getFullYear()} Barreto Web • Todos os direitos reservados.`;

}

console.log("🚀 Barreto Web 2.0 carregada com sucesso!");
