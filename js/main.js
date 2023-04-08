import ligaTelaMostraJogo from "./auxiliar/ligaTelaMostraJogo.js";
import verificaColisao from "./auxiliar/verificarColisao.js";
import mudaEstadoDoNintendo from "./auxiliar/mudaEstado.js";
import ativaWindows from "./auxiliar/ativaWindows.js";
import restart from "./auxiliar/restart.js";
import pular from "./acoes/pular.js";

const mario = document.querySelector("[data-mario]");
const cano = document.querySelector("[data-cano]");
const nuvem = document.querySelector("[data-nuvem]");
const botaoAbrir = document.querySelector("[data-abrir]");
const tela = document.querySelector("[data-tela]");
const ladoDireito = document.querySelector("[data-lado-direito]");
const botaoLigar = document.querySelector("[data-ligar]");
const resetar = document.querySelector("[data-restart]");
const botaoPular = document.querySelectorAll("[data-pular]");

ativaWindows(mario)
botaoAbrir.addEventListener("click", () => mudaEstadoDoNintendo(tela, ladoDireito));
botaoLigar.addEventListener("click", () => ligaTelaMostraJogo(tela, mario, cano, nuvem));
resetar.addEventListener("click", () => restart(mario, cano, nuvem));
botaoPular.forEach(botao => botao.addEventListener("touchstart", evento => pular(evento, mario)));
verificaColisao(mario, cano, nuvem);
