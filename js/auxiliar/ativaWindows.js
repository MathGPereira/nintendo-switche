import pular from "../acoes/pular.js";

export default function ativaWindows(mario) {
    window.addEventListener("keydown", evento => pular(evento, mario));
}
