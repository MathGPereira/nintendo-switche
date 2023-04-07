export default function mudaEstadoDoNintendo(tela, lado) {
    tela.classList.toggle("videogame__tela--ativo");
    lado.classList.toggle("videogame__lado-direito--ativo");

    setTimeout(() => {
        tela.classList.toggle("videogame__tela--ativo");
        tela.style.width = "581px";

        lado.classList.toggle("videogame__lado-direito--ativo");
        lado.style.right = "0";
    }, 2000);
}
