import removeClassePular from "../auxiliar/removePular.js";

export default function pular(evento, alvo) {
    console.log(evento.changedTouches[0].target.dataset.pular);
    if(evento.code === "Space" || evento.changedTouches[0].target.dataset.pular === "pular") {
        alvo.classList.add("tela__mario--pular");
        removeClassePular(alvo);
    }
}
