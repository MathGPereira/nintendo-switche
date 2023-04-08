import removeClassePular from "../auxiliar/removePular.js";

export default function pular(evento, alvo) {
    alert(evento.target.dataset.pular);
    if(evento.code === "Space" || evento.target.dataset.pular === "pular") {
        alvo.classList.add("tela__mario--pular");
        removeClassePular(alvo);
    }
}
