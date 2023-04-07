import verificaColisao from "./auxiliar/verificarColisao.js";
import pular from "./acoes/pular.js";

const mario = document.querySelector("[data-mario]");
const cano = document.querySelector("[data-cano]");
const nuvem = document.querySelector("[data-nuvem]");

window.addEventListener("keydown", (evento) => pular(evento, mario));
verificaColisao(mario, cano, nuvem);
