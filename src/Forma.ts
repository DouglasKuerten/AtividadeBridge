import Renderizador from "./Renderizador";

export default abstract class Forma {
    protected renderizador: Renderizador;

    constructor(renderizador: Renderizador) {
        this.renderizador = renderizador;
    }

    abstract renderizar(): void;
}