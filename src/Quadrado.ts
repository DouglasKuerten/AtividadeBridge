import Forma from "./Forma";

export default class Quadrado extends Forma {
    renderizar(): void {
        console.log(`Renderizando quadrado`);
        this.renderizador.renderizarForma();
    }

}