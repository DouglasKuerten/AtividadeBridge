import Forma from "./Forma";

export default class Circulo extends Forma {
    renderizar(): void {
        console.log(`Renderizando circulo`);
        this.renderizador.renderizarForma();
    }

}