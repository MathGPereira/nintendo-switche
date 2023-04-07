import verificaColisao from "./verificarColisao.js";

export default function restart(alvo, relativo, nuvem) {
    alvo.style.bottom = "0";
    alvo.style.animation = "pularMario 500ms ease-in-out";
    alvo.src = "../../img/gif-mario.gif";
    alvo.style.height = "80px";
    alvo.style.marginLeft = "0";
    
    relativo.style.animation = "movimentaCano 1.5s infinite linear";
    relativo.style.left = "100%";
    
    nuvem.style.animation = "movimentaNuvem 4s linear infinite";
    nuvem.style.right = "-280px";
    
    verificaColisao(alvo, relativo);
    ativaWindows(alvo);
}
