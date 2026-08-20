class Ficha {
    constructor(numeroA, colorA, numeroB, colorB) {
        this.numeroA = numeroA;
        this.colorA = colorA;

        this.numeroB = numeroB;
        this.colorB = colorB;
    }
}

const fichaPrueba = new Ficha(
    3,
    "rojo",
    5,
    "azul"
);

console.log("Ficha de prueba:", 
    fichaPrueba
);
