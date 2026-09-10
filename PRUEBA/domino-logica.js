class Ficha {

    constructor(
        numeroA,
        colorA,
        numeroB,
        colorB
    ) {

        this.numeroA = numeroA;
        this.colorA = colorA;

        this.numeroB = numeroB;
        this.colorB = colorB;
    }
}


// ======================================================
// COLORES
// ======================================================

const colores = [
    "red",
    "yellow",
    "blue",
    "green"
];


// ======================================================
// PREPARAR LOS COLORES DE LOS 7 DOBLES
// ======================================================

/*
Tenemos 7 dobles y 4 colores.

Creamos inicialmente dos unidades de cada color:
2 rojos
2 amarillos
2 azules
2 verdes

Después eliminamos un color al azar.

Así siempre tendremos una distribución:
2 - 2 - 2 - 1

Después barajamos el array para que cada doble
reciba un color diferente en cada partida.
*/

const coloresDobles = [
    "red",
    "red",
    "yellow",
    "yellow",
    "blue",
    "blue",
    "green",
    "green"
];


const indiceColorEliminar =
    Math.floor(
        Math.random() *
        coloresDobles.length
    );


coloresDobles.splice(
    indiceColorEliminar,
    1
);


// Barajamos los colores de los dobles
for (
    let i = coloresDobles.length - 1;
    i > 0;
    i--
) {

    const indiceAleatorio =
        Math.floor(
            Math.random() *
            (i + 1)
        );


    const colorTemporal =
        coloresDobles[i];


    coloresDobles[i] =
        coloresDobles[
            indiceAleatorio
        ];


    coloresDobles[
        indiceAleatorio
    ] =
        colorTemporal;
}


// ======================================================
// CREAR LAS 28 FICHAS
// ======================================================

const fichas = [];

let indiceDoble = 0;


for (
    let numeroA = 0;
    numeroA <= 6;
    numeroA++
) {

    for (
        let numeroB = numeroA;
        numeroB <= 6;
        numeroB++
    ) {

        let colorA;

        let colorB;


        // ==================================================
        // DOBLES
        // ==================================================

        /*
        Los dobles son monocolor.

        Ejemplo:
        5 verde | 5 verde
        */

        if (numeroA === numeroB) {

            colorA =
                coloresDobles[
                    indiceDoble
                ];


            colorB =
                colorA;


            indiceDoble++;


        // ==================================================
        // FICHAS NORMALES
        // ==================================================

        } else {

            const indiceColorA =
                Math.floor(
                    Math.random() *
                    colores.length
                );


            colorA =
                colores[
                    indiceColorA
                ];


            let indiceColorB =
                Math.floor(
                    Math.random() *
                    colores.length
                );


            colorB =
                colores[
                    indiceColorB
                ];


            // Las dos mitades deben tener
            // colores diferentes
            while (
                colorA === colorB
            ) {

                indiceColorB =
                    Math.floor(
                        Math.random() *
                        colores.length
                    );


                colorB =
                    colores[
                        indiceColorB
                    ];
            }
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


// ======================================================
// BARAJAR LAS 28 FICHAS
// ======================================================

for (
    let i = fichas.length - 1;
    i > 0;
    i--
) {

    const indiceAleatorio =
        Math.floor(
            Math.random() *
            (i + 1)
        );


    const fichaTemporal =
        fichas[i];


    fichas[i] =
        fichas[
            indiceAleatorio
        ];


    fichas[
        indiceAleatorio
    ] =
        fichaTemporal;
}


// ======================================================
// REPARTIR LAS FICHAS
// ======================================================

const fichasJugador = [];

const fichasMaquina = [];

const fichasPozo = [];


// 7 fichas para el jugador
for (let i = 0; i < 7; i++) {

    const fichaSacada =
        fichas.pop();


    fichasJugador.push(
        fichaSacada
    );
}


// 7 fichas para la máquina
for (let i = 0; i < 7; i++) {

    const fichaSacada =
        fichas.pop();


    fichasMaquina.push(
        fichaSacada
    );
}


// 14 fichas para el pozo
for (let i = 0; i < 14; i++) {

    const fichaSacada =
        fichas.pop();


    fichasPozo.push(
        fichaSacada
    );
}


// ======================================================
// BUSCAR EL DOBLE MÁS ALTO
// ======================================================

let dobleMasAltoJugador = -1;

let fichaDobleMasAltoJugador = null;


for (const ficha of fichasJugador) {

    if (
        ficha.numeroA ===
        ficha.numeroB
    ) {

        if (
            ficha.numeroA >
            dobleMasAltoJugador
        ) {

            dobleMasAltoJugador =
                ficha.numeroA;


            fichaDobleMasAltoJugador =
                ficha;
        }
    }
}


let dobleMasAltoMaquina = -1;

let fichaDobleMasAltoMaquina = null;


for (const ficha of fichasMaquina) {

    if (
        ficha.numeroA ===
        ficha.numeroB
    ) {

        if (
            ficha.numeroA >
            dobleMasAltoMaquina
        ) {

            dobleMasAltoMaquina =
                ficha.numeroA;


            fichaDobleMasAltoMaquina =
                ficha;
        }
    }
}


// ======================================================
// DECIDIR QUIÉN EMPIEZA
// ======================================================

let turno = null;

let fichaInicial = null;


if (
    dobleMasAltoJugador >
    dobleMasAltoMaquina
) {

    turno = "jugador";

    fichaInicial =
        fichaDobleMasAltoJugador;


} else if (
    dobleMasAltoMaquina >
    dobleMasAltoJugador
) {

    turno = "maquina";

    fichaInicial =
        fichaDobleMasAltoMaquina;


} else {

    let sumaMasAltaJugador = -1;

    let sumaMasAltaMaquina = -1;


    let fichaSumaMasAltaJugador =
        null;

    let fichaSumaMasAltaMaquina =
        null;


    for (const ficha of fichasJugador) {

        const sumaFicha =
            ficha.numeroA +
            ficha.numeroB;


        if (
            sumaFicha >
            sumaMasAltaJugador
        ) {

            sumaMasAltaJugador =
                sumaFicha;


            fichaSumaMasAltaJugador =
                ficha;
        }
    }


    for (const ficha of fichasMaquina) {

        const sumaFicha =
            ficha.numeroA +
            ficha.numeroB;


        if (
            sumaFicha >
            sumaMasAltaMaquina
        ) {

            sumaMasAltaMaquina =
                sumaFicha;


            fichaSumaMasAltaMaquina =
                ficha;
        }
    }


    if (
        sumaMasAltaJugador >
        sumaMasAltaMaquina
    ) {

        turno = "jugador";

        fichaInicial =
            fichaSumaMasAltaJugador;


    } else if (
        sumaMasAltaMaquina >
        sumaMasAltaJugador
    ) {

        turno = "maquina";

        fichaInicial =
            fichaSumaMasAltaMaquina;


    } else {

        const empiezaJugador =
            Math.random() < 0.5;


        if (empiezaJugador) {

            turno =
                "jugador";


            fichaInicial =
                fichaSumaMasAltaJugador;

        } else {

            turno =
                "maquina";


            fichaInicial =
                fichaSumaMasAltaMaquina;
        }
    }
}


// ======================================================
// CREAR TABLERO Y COLOCAR FICHA INICIAL
// ======================================================

const tablero = [];


const turnoInicial =
    turno;


// Si empieza el jugador
if (turno === "jugador") {

    const indiceFichaInicial =
        fichasJugador.findIndex(
            ficha =>
                ficha ===
                fichaInicial
        );


    if (
        indiceFichaInicial !== -1
    ) {

        const fichaJugada =
            fichasJugador.splice(
                indiceFichaInicial,
                1
            )[0];


        tablero.push(
            fichaJugada
        );
    }


    // Ya ha colocado su ficha inicial
    turno = "maquina";


// Si empieza la máquina
} else if (
    turno === "maquina"
) {

    const indiceFichaInicial =
        fichasMaquina.findIndex(
            ficha =>
                ficha ===
                fichaInicial
        );


    if (
        indiceFichaInicial !== -1
    ) {

        const fichaJugada =
            fichasMaquina.splice(
                indiceFichaInicial,
                1
            )[0];


        tablero.push(
            fichaJugada
        );


        // Ya ha colocado su ficha inicial
        turno = "jugador";
    }
}


// ======================================================
// ESTADO GENERAL DE LA PARTIDA
// ======================================================

let partidaTerminada =
    false;


let resultadoPartida =
    null;


/*
Aquí guardaremos el efecto producido
por la última ficha jugada.

Puede ser:

null
bloqueo
bloqueo-roba2
*/

let ultimoEfecto =
    null;


// ======================================================
// EXTREMOS DEL TABLERO
// ======================================================

let extremoIzquierdo =
    tablero[0].numeroA;


let colorExtremoIzquierdo =
    tablero[0].colorA;


let extremoDerecho =
    tablero[0].numeroB;


let colorExtremoDerecho =
    tablero[0].colorB;


// ======================================================
// COMPROBAR SI UNA FICHA ES JUGABLE
// ======================================================

/*
El color NO decide si una ficha
se puede colocar.

Para colocarla solamente tiene
que coincidir el número.

El color únicamente determina
si después se activa un efecto.
*/

function esJugable(ficha) {

    return (

        ficha.numeroA ===
            extremoIzquierdo ||

        ficha.numeroA ===
            extremoDerecho ||

        ficha.numeroB ===
            extremoIzquierdo ||

        ficha.numeroB ===
            extremoDerecho
    );
}


// ======================================================
// OBTENER FICHAS JUGABLES
// ======================================================

function obtenerFichasJugables(
    mano
) {

    return mano.filter(
        ficha =>
            esJugable(ficha)
    );
}


// ======================================================
// COMPROBAR EN QUÉ LADO PUEDE JUGAR
// ======================================================

function puedeJugarIzquierda(
    ficha
) {

    return (

        ficha.numeroA ===
            extremoIzquierdo ||

        ficha.numeroB ===
            extremoIzquierdo
    );
}


function puedeJugarDerecha(
    ficha
) {

    return (

        ficha.numeroA ===
            extremoDerecho ||

        ficha.numeroB ===
            extremoDerecho
    );
}


// ======================================================
// GIRAR UNA FICHA
// ======================================================

function girarFicha(ficha) {

    const numeroTemporal =
        ficha.numeroA;


    const colorTemporal =
        ficha.colorA;


    ficha.numeroA =
        ficha.numeroB;


    ficha.colorA =
        ficha.colorB;


    ficha.numeroB =
        numeroTemporal;


    ficha.colorB =
        colorTemporal;
}


// ======================================================
// JUGAR UNA FICHA A LA DERECHA
// ======================================================

function jugarFichaDerecha(
    ficha
) {

    /*
    Para jugar a la derecha:

    extremo | numeroA - numeroB

    La mitad A será la que se conecta
    con el extremo del tablero.

    Antes de cambiar el extremo
    comprobamos también si coincide
    el color.
    */


    if (
        ficha.numeroA ===
        extremoDerecho
    ) {

        const coincideColor =
            ficha.colorA ===
            colorExtremoDerecho;


        tablero.push(
            ficha
        );


        extremoDerecho =
            ficha.numeroB;


        colorExtremoDerecho =
            ficha.colorB;


        return coincideColor;


    } else if (
        ficha.numeroB ===
        extremoDerecho
    ) {

        girarFicha(
            ficha
        );


        const coincideColor =
            ficha.colorA ===
            colorExtremoDerecho;


        tablero.push(
            ficha
        );


        extremoDerecho =
            ficha.numeroB;


        colorExtremoDerecho =
            ficha.colorB;


        return coincideColor;
    }


    return false;
}


// ======================================================
// JUGAR UNA FICHA A LA IZQUIERDA
// ======================================================

function jugarFichaIzquierda(
    ficha
) {

    /*
    Para jugar a la izquierda:

    numeroA - numeroB | extremo

    La mitad B será la que se conecta
    con el extremo del tablero.
    */


    if (
        ficha.numeroB ===
        extremoIzquierdo
    ) {

        const coincideColor =
            ficha.colorB ===
            colorExtremoIzquierdo;


        tablero.unshift(
            ficha
        );


        extremoIzquierdo =
            ficha.numeroA;


        colorExtremoIzquierdo =
            ficha.colorA;


        return coincideColor;


    } else if (
        ficha.numeroA ===
        extremoIzquierdo
    ) {

        girarFicha(
            ficha
        );


        const coincideColor =
            ficha.colorB ===
            colorExtremoIzquierdo;


        tablero.unshift(
            ficha
        );


        extremoIzquierdo =
            ficha.numeroA;


        colorExtremoIzquierdo =
            ficha.colorA;


        return coincideColor;
    }


    return false;
}


// ======================================================
// ROBAR UNA FICHA DEL POZO
// ======================================================

function robarFicha(mano) {

    if (
        fichasPozo.length === 0
    ) {

        console.log(
            "El pozo está vacío"
        );


        return null;
    }


    const fichaRobada =
        fichasPozo.pop();


    mano.push(
        fichaRobada
    );


    return fichaRobada;
}


// ======================================================
// APLICAR EFECTO DE COLOR
// ======================================================

function aplicarEfectoColor(
    ficha,
    quienJuega,
    coincideColor
) {

    ultimoEfecto =
        null;


    /*
    Si solamente coincide el número,
    no hay ningún efecto especial.
    */

    if (!coincideColor) {

        return;
    }


    const esDoble =
        ficha.numeroA ===
        ficha.numeroB;


    // ==================================================
    // NÚMERO + COLOR + DOBLE
    // BLOQUEO + ROBA 2
    // ==================================================

    if (esDoble) {

        let manoRival;


        if (
            quienJuega ===
            "jugador"
        ) {

            manoRival =
                fichasMaquina;

        } else {

            manoRival =
                fichasJugador;
        }


        let cantidadRobada =
            0;


        for (
            let i = 0;
            i < 2;
            i++
        ) {

            if (
                fichasPozo.length ===
                0
            ) {

                break;
            }


            robarFicha(
                manoRival
            );


            cantidadRobada++;
        }


        ultimoEfecto = {

            tipo:
                "bloqueo-roba2",

            jugador:
                quienJuega,

            cantidad:
                cantidadRobada
        };


    // ==================================================
    // NÚMERO + COLOR
    // BLOQUEO
    // ==================================================

    } else {

        ultimoEfecto = {

            tipo:
                "bloqueo",

            jugador:
                quienJuega
        };
    }
}


// ======================================================
// JUGAR UNA FICHA DEL JUGADOR
// ======================================================

function jugarFichaJugador(
    ficha,
    lado
) {

    if (
        turno !==
        "jugador"
    ) {

        console.log(
            "Ahora no es el turno del jugador"
        );


        return false;
    }


    /*
    Eliminamos cualquier efecto
    de una jugada anterior.
    */

    ultimoEfecto =
        null;


    const indiceFicha =
        fichasJugador.findIndex(
            fichaMano =>
                fichaMano ===
                ficha
        );


    if (
        indiceFicha === -1
    ) {

        console.log(
            "La ficha no está en la mano del jugador"
        );


        return false;
    }


    let coincideColor =
        false;


    // ==================================================
    // JUGAR A LA IZQUIERDA
    // ==================================================

    if (
        lado ===
        "izquierda"
    ) {

        if (
            puedeJugarIzquierda(
                ficha
            )
        ) {

            coincideColor =
                jugarFichaIzquierda(
                    ficha
                );

        } else {

            console.log(
                "La ficha no puede jugarse a la izquierda"
            );


            return false;
        }


    // ==================================================
    // JUGAR A LA DERECHA
    // ==================================================

    } else if (
        lado ===
        "derecha"
    ) {

        if (
            puedeJugarDerecha(
                ficha
            )
        ) {

            coincideColor =
                jugarFichaDerecha(
                    ficha
                );

        } else {

            console.log(
                "La ficha no puede jugarse a la derecha"
            );


            return false;
        }


    } else {

        console.log(
            "Lado no válido"
        );


        return false;
    }


    // Quitamos la ficha de su mano
    fichasJugador.splice(
        indiceFicha,
        1
    );


    // Comprobamos si ha ganado
    if (
        comprobarFinPartida() !==
        null
    ) {

        return true;
    }


    // Aplicamos la nueva mecánica
    aplicarEfectoColor(
        ficha,
        "jugador",
        coincideColor
    );


    /*
    Si se ha producido cualquier
    efecto de color, la máquina
    pierde su turno.

    Por tanto vuelve a jugar
    el jugador.
    */

    if (
        ultimoEfecto !==
        null
    ) {

        turno =
            "jugador";

    } else {

        turno =
            "maquina";
    }


    console.log(
        "Ficha jugada correctamente"
    );


    console.log(
        "Coincidencia de color:",
        coincideColor
    );


    console.log(
        "Efecto:",
        ultimoEfecto
    );


    console.log(
        "Turno actual:",
        turno
    );


    return true;
}


// ======================================================
// ROBAR - JUGADOR
// ======================================================

function robarFichaJugador() {

    ultimoEfecto =
        null;


    if (
        turno !==
        "jugador"
    ) {

        console.log(
            "Ahora no es el turno del jugador"
        );


        return false;
    }


    const jugablesJugador =
        obtenerFichasJugables(
            fichasJugador
        );


    if (
        jugablesJugador.length >
        0
    ) {

        console.log(
            "El jugador tiene fichas jugables y no puede robar"
        );


        return false;
    }


    if (
        fichasPozo.length ===
        0
    ) {

        console.log(
            "No hay fichas en el pozo"
        );


        return false;
    }


    const fichaRobada =
        robarFicha(
            fichasJugador
        );


    console.log(
        "El jugador ha robado:",
        fichaRobada
    );


    if (
        esJugable(
            fichaRobada
        )
    ) {

        console.log(
            "La ficha robada se puede jugar"
        );

    } else {

        console.log(
            "La ficha robada no se puede jugar"
        );
    }


    return true;
}


// ======================================================
// PASAR TURNO - JUGADOR
// ======================================================

function pasarTurnoJugador() {

    ultimoEfecto =
        null;


    if (
        turno !==
        "jugador"
    ) {

        console.log(
            "Ahora no es el turno del jugador"
        );


        return false;
    }


    const jugablesJugador =
        obtenerFichasJugables(
            fichasJugador
        );


    if (
        jugablesJugador.length >
        0
    ) {

        console.log(
            "El jugador tiene fichas jugables y no puede pasar"
        );


        return false;
    }


    if (
        fichasPozo.length >
        0
    ) {

        console.log(
            "Todavía quedan fichas en el pozo. El jugador debe robar"
        );


        return false;
    }


    if (
        comprobarFinPartida() !==
        null
    ) {

        return true;
    }


    turno =
        "maquina";


    console.log(
        "El jugador pasa turno"
    );


    return true;
}


// ======================================================
// PASAR TURNO - MÁQUINA
// ======================================================

function pasarTurnoMaquina() {

    ultimoEfecto =
        null;


    if (
        turno !==
        "maquina"
    ) {

        console.log(
            "Ahora no es el turno de la máquina"
        );


        return false;
    }


    const jugablesMaquina =
        obtenerFichasJugables(
            fichasMaquina
        );


    if (
        jugablesMaquina.length >
        0
    ) {

        console.log(
            "La máquina tiene fichas jugables y no puede pasar"
        );


        return false;
    }


    if (
        fichasPozo.length >
        0
    ) {

        console.log(
            "Todavía quedan fichas en el pozo. La máquina debe robar"
        );


        return false;
    }


    if (
        comprobarFinPartida() !==
        null
    ) {

        return true;
    }


    turno =
        "jugador";


    console.log(
        "La máquina pasa turno"
    );


    return true;
}


// ======================================================
// TURNO AUTOMÁTICO DE LA MÁQUINA
// ======================================================

function jugarTurnoMaquina() {

    if (
        turno !==
        "maquina"
    ) {

        console.log(
            "Ahora no es el turno de la máquina"
        );


        return false;
    }


    ultimoEfecto =
        null;


    let jugablesMaquina =
        obtenerFichasJugables(
            fichasMaquina
        );


    // ==================================================
    // ROBAR
    // ==================================================

    while (
        jugablesMaquina.length === 0 &&
        fichasPozo.length > 0
    ) {

        const fichaRobada =
            robarFicha(
                fichasMaquina
            );


        console.log(
            "La máquina ha robado:",
            fichaRobada
        );


        jugablesMaquina =
            obtenerFichasJugables(
                fichasMaquina
            );
    }


    // ==================================================
    // PASAR
    // ==================================================

    if (
        jugablesMaquina.length ===
        0
    ) {

        console.log(
            "La máquina no puede jugar"
        );


        return pasarTurnoMaquina();
    }


    // ==================================================
    // ELEGIR UNA FICHA
    // ==================================================

    const fichaElegida =
        jugablesMaquina[0];


    const puedeIzquierda =
        puedeJugarIzquierda(
            fichaElegida
        );


    const puedeDerecha =
        puedeJugarDerecha(
            fichaElegida
        );


    let coincideColor =
        false;


    // Puede jugar en ambos lados
    if (
        puedeIzquierda &&
        puedeDerecha
    ) {

        const jugarIzquierda =
            Math.random() < 0.5;


        if (jugarIzquierda) {

            coincideColor =
                jugarFichaIzquierda(
                    fichaElegida
                );


            console.log(
                "La máquina juega a la izquierda"
            );

        } else {

            coincideColor =
                jugarFichaDerecha(
                    fichaElegida
                );


            console.log(
                "La máquina juega a la derecha"
            );
        }


    // Solo izquierda
    } else if (
        puedeIzquierda
    ) {

        coincideColor =
            jugarFichaIzquierda(
                fichaElegida
            );


        console.log(
            "La máquina juega a la izquierda"
        );


    // Solo derecha
    } else if (
        puedeDerecha
    ) {

        coincideColor =
            jugarFichaDerecha(
                fichaElegida
            );


        console.log(
            "La máquina juega a la derecha"
        );
    }


    // Quitamos la ficha de su mano
    const indiceFicha =
        fichasMaquina.findIndex(
            ficha =>
                ficha ===
                fichaElegida
        );


    if (
        indiceFicha !==
        -1
    ) {

        fichasMaquina.splice(
            indiceFicha,
            1
        );
    }


    // Comprobamos si ha ganado
    if (
        comprobarFinPartida() !==
        null
    ) {

        return true;
    }


    // Aplicamos la nueva mecánica
    aplicarEfectoColor(
        fichaElegida,
        "maquina",
        coincideColor
    );


    /*
    Si hay coincidencia de color,
    el jugador pierde su turno
    y la máquina vuelve a jugar.
    */

    if (
        ultimoEfecto !==
        null
    ) {

        turno =
            "maquina";

    } else {

        turno =
            "jugador";
    }


    console.log(
        "Coincidencia de color:",
        coincideColor
    );


    console.log(
        "Efecto:",
        ultimoEfecto
    );


    console.log(
        "Turno actual:",
        turno
    );


    return true;
}


// ======================================================
// CALCULAR PUNTOS
// ======================================================

function calcularPuntos(
    mano
) {

    let total =
        0;


    for (
        const ficha of mano
    ) {

        total +=
            ficha.numeroA +
            ficha.numeroB;
    }


    return total;
}


// ======================================================
// DECIDIR GANADOR POR BLOQUEO
// ======================================================

function decidirGanadorPorBloqueo() {

    const puntosJugador =
        calcularPuntos(
            fichasJugador
        );


    const puntosMaquina =
        calcularPuntos(
            fichasMaquina
        );


    console.log(
        "Puntos del jugador:",
        puntosJugador
    );


    console.log(
        "Puntos de la máquina:",
        puntosMaquina
    );


    if (
        puntosJugador <
        puntosMaquina
    ) {

        console.log(
            "Gana el jugador por tener menos puntos"
        );


        return "jugador";


    } else if (
        puntosMaquina <
        puntosJugador
    ) {

        console.log(
            "Gana la máquina por tener menos puntos"
        );


        return "maquina";


    } else {

        console.log(
            "Empate"
        );


        return "empate";
    }
}


// ======================================================
// COMPROBAR SI LA PARTIDA ESTÁ BLOQUEADA
// ======================================================

function partidaBloqueada() {

    if (
        fichasPozo.length >
        0
    ) {

        return false;
    }


    const jugablesJugador =
        obtenerFichasJugables(
            fichasJugador
        );


    const jugablesMaquina =
        obtenerFichasJugables(
            fichasMaquina
        );


    if (
        jugablesJugador.length === 0 &&
        jugablesMaquina.length === 0
    ) {

        return true;
    }


    return false;
}


// ======================================================
// COMPROBAR FINAL DE LA PARTIDA
// ======================================================

function comprobarFinPartida() {

    // ==================================================
    // GANA EL JUGADOR
    // ==================================================

    if (
        fichasJugador.length ===
        0
    ) {

        partidaTerminada =
            true;


        resultadoPartida =
            "jugador";


        console.log(
            "El jugador se ha quedado sin fichas"
        );


        console.log(
            "Gana el jugador"
        );


        return resultadoPartida;
    }


    // ==================================================
    // GANA LA MÁQUINA
    // ==================================================

    if (
        fichasMaquina.length ===
        0
    ) {

        partidaTerminada =
            true;


        resultadoPartida =
            "maquina";


        console.log(
            "La máquina se ha quedado sin fichas"
        );


        console.log(
            "Gana la máquina"
        );


        return resultadoPartida;
    }


    // ==================================================
    // PARTIDA BLOQUEADA
    // ==================================================

    if (
        partidaBloqueada()
    ) {

        partidaTerminada =
            true;


        resultadoPartida =
            decidirGanadorPorBloqueo();


        console.log(
            "La partida está bloqueada"
        );


        console.log(
            "Resultado:",
            resultadoPartida
        );


        return resultadoPartida;
    }


    // La partida continúa
    return null;
}