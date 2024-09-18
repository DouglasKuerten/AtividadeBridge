import Circulo from "./Circulo";
import Quadrado from "./Quadrado";
import Renderizador2D from "./Renderizador2D";
import Renderizador3D from "./Renderizador3D";

let renderizador2D = new Renderizador2D();
let renderizador3D = new Renderizador3D();

let circulo = new Circulo(renderizador2D);
circulo.renderizar();

let quadrado = new Quadrado(renderizador2D);
quadrado.renderizar();

circulo = new Circulo(renderizador3D);
circulo.renderizar();

quadrado = new Quadrado(renderizador3D);
quadrado.renderizar();
