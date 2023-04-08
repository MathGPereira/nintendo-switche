import removeClassePular from "../auxiliar/removePular.js";

export default function pular(evento, alvo) {
    if(evento.code === "Space") {
        alvo.classList.add("tela__mario--pular");
        removeClassePular(alvo);
    }
}
