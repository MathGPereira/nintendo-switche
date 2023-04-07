import pular from "../acoes/pular";

export default function ativaWindows(mario) {
    window.addEventListener("keydown", evento => pular(evento, mario));
}
