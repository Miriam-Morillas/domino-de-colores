class Ficha {
    constructor(numeroA, colorA, numeroB, colorB) {
        this.numeroA = numeroA;
        this.colorA = colorA;

        this.numeroB = numeroB;
        this.colorB = colorB;
    }
}
const colores = [
    "red",
    "yellow",
    "blue",
    "green"
];
const fichas = [];
for (let numeroA = 0; numeroA<= 6; numeroA++) {
    for (
        let numeroB = numeroA;
        numeroB <= 6;
        numeroB++

    ) {
        const indiceColorA =
        Math.floor(
            Math.random() * colores.length 
        );
        const colorA =
        colores[indiceColorA];

        let indiceColorB =
        Math.floor(
            Math.random() * colores.length
        );

        let colorB =
        colores[indiceColorB];

        while (colorA === colorB) {
            indiceColorB =
            Math.floor(
                Math.random() * colores.length
            );
            colorB =
            colores[indiceColorB];
        }
        const nuevaFicha =
        new Ficha(
            numeroA,
            colorA,
            numeroB,
            colorB
        );

        fichas.push(
            nuevaFicha
        );
 
    }
    
}    
console.log(
    "Numero de fichas:",
    fichas.length
);

console.log(
    "Todas las fichas:",
    fichas
);

let coloresCorrectos = true;
for (const ficha of fichas) {
    if (ficha.colorA === ficha.colorB) {
        coloresCorrectos = false;
    }
}
console.log(
    "¿Todas las fichas tienen colores distintos?",
    coloresCorrectos
); 