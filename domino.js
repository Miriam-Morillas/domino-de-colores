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
   let coloresCorrectos = true;
   for (const ficha of fichas) {
    if (ficha.colorA === ficha.colorB) {
        coloresCorrectos = false;
    }
   }
}

console.log(
    "Antes de barajar:",
    fichas.map(
        ficha=>
            `${ficha.numeroA}-${ficha.numeroB}`
    )
);

for (let i = fichas.length - 1; i > 0; i--) {
    const indiceAleatorio =
    Math.floor(
        Math.random() * (i+1)
    );
    const fichaTemporal =
    fichas[i];

    fichas[i] =
    fichas[indiceAleatorio];

    fichas[indiceAleatorio] =
    fichaTemporal;
}

console.log(
    "Después de barajar:",
    fichas.map(
        ficha =>
            `${ficha.numeroA}-${ficha.numeroB}`
    )
);
console.log(
    "Fichas después de barajar:",
    fichas.length
);

const fichasJugador = [];
const fichasMaquina = [];
const fichasPozo = [];

for (let i=0; i<7; i++) {
    const fichaSacada =
      fichas.pop();
    fichasJugador.push(
        fichaSacada 
    );  
}

for (let i=0; i<7; i++) {
    const fichaSacada = 
    fichas.pop();
    fichasMaquina.push(
        fichaSacada
    );
}

for (let i = 0; i <14; i++ ) {
    const fichaSacada =
    fichas.pop();
    fichasPozo.push(
        fichaSacada
    );
}

console.log(
    "Fichas del jugador:",
    fichasJugador.length
);

console.log(
    "Fichas de la máquina:",
    fichasMaquina.length
);

console.log(
    "Fichas del pozo:",
    fichasPozo.length
);

console.log(
    "Fichas sin repartir:",
    fichas.length
);

console.log(
    "Jugador:",
    fichasJugador
);

console.log(
    "Máquina",
    fichasMaquina
);

console.log(
    "Pozo",
    fichasPozo
);