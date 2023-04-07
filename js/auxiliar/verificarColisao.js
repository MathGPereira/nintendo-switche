export default function verificaColisao(alvo, relativo, nuvem) {
    setInterval(() => {
        const posicaoDoCano = relativo.offsetLeft;
        const posicaoAlvo = Number(window.getComputedStyle(alvo).bottom.replace("px", ""));
        const posicaoDaNuvem = nuvem.offsetLeft;

        if(posicaoDoCano <= 64 && posicaoAlvo < 45 && posicaoDoCano > 0) {
            alvo.style.bottom = `${posicaoAlvo}px`;
            alvo.style.animation = "none";
            alvo.src = "../img/game-over.png";
            alvo.style.height = "70px";
            alvo.style.marginLeft = "14px";

            relativo.style.animation = "none";
            relativo.style.left = `${posicaoDoCano}px`;

            nuvem.style.animation = "none";
            nuvem.style.left = `${posicaoDaNuvem}px`;
        }
    }, 5);
}