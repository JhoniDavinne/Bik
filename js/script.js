//Ativar links do menu
document.querySelectorAll(".header-menu a").forEach((link) => {
    const url = location.href;
    const href = link.href;
    if (url.includes(href)) {
        link.classList.add("ativo");
    }
});

//Ativar itens do orcamento
new URLSearchParams(location.search).forEach((parametro) => {
    const elemento = document.getElementById(parametro);
    if (elemento) {
        elemento.checked = true;
    }
});

//Perguntas frequentes
document.querySelectorAll(".perguntas button").forEach((pergunta) => {
    pergunta.addEventListener("click", (event) => {
        const pergunta = event.currentTarget;
        const controls = pergunta.getAttribute("aria-controls");
        const resposta = document.getElementById(controls);

        resposta.classList.toggle("ativo");
        const ativa = resposta.classList.contains("ativo");
        pergunta.setAttribute("aria-expanded", ativa);  
    })
});

//Galeria de bicicletas
document.querySelectorAll(".bicicleta-imagens img").forEach((img) => {
    img.addEventListener("click", (event) => {
        const img = event.currentTarget;
        const media = matchMedia("(min-width: 1000px)").matches;
        if (media) {
            document.querySelector(".bicicleta-imagens").prepend(img);
        }
    });
});

//Animacao
if (window.SimpleAnime) {
    new SimpleAnime();
}