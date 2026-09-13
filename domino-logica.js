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
    ] = colorTemporal;
}

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

        if (
            numeroA === numeroB
        ) {
            colorA =
                coloresDobles[
                    indiceDoble
                ];

            colorB = colorA;

            indiceDoble++;
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
    ] = fichaTemporal;
}

const fichasJugador = [];
const fichasMaquina = [];
const fichasPozo = [];

for (
    let i = 0;
    i < 7;
    i++
) {
    const fichaSacada =
        fichas.pop();

    fichasJugador.push(
        fichaSacada
    );
}

for (
    let i = 0;
    i < 7;
    i++
) {
    const fichaSacada =
        fichas.pop();

    fichasMaquina.push(
        fichaSacada
    );
}

for (
    let i = 0;
    i < 14;
    i++
) {
    const fichaSacada =
        fichas.pop();

    fichasPozo.push(
        fichaSacada
    );
}

let dobleMasAltoJugador = -1;
let fichaDobleMasAltoJugador = null;

for (
    const ficha of fichasJugador
) {
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

for (
    const ficha of fichasMaquina
) {
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

    for (
        const ficha of fichasJugador
    ) {
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

    for (
        const ficha of fichasMaquina
    ) {
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

        if (
            empiezaJugador
        ) {
            turno = "jugador";

            fichaInicial =
                fichaSumaMasAltaJugador;
        } else {
            turno = "maquina";

            fichaInicial =
                fichaSumaMasAltaMaquina;
        }
    }
}

const tablero = [];

const turnoInicial = turno;

if (
    turno === "jugador"
) {
    const indiceFichaInicial =
        fichasJugador.findIndex(
            ficha =>
                ficha === fichaInicial
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

    turno = "maquina";

} else if (
    turno === "maquina"
) {
    const indiceFichaInicial =
        fichasMaquina.findIndex(
            ficha =>
                ficha === fichaInicial
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

        turno = "jugador";
    }
}

let partidaTerminada = false;
let resultadoPartida = null;
let ultimoEfecto = null;

let jugadorHaRobado = false;
let maquinaHaRobado = false;

let extremoIzquierdo =
    tablero[0].numeroA;

let colorExtremoIzquierdo =
    tablero[0].colorA;

let extremoDerecho =
    tablero[0].numeroB;

let colorExtremoDerecho =
    tablero[0].colorB;

function esJugable(ficha) {
    return (
        ficha.numeroA === extremoIzquierdo ||
        ficha.numeroA === extremoDerecho ||
        ficha.numeroB === extremoIzquierdo ||
        ficha.numeroB === extremoDerecho
    );
}

function obtenerFichasJugables(
    mano
) {
    return mano.filter(
        ficha =>
            esJugable(ficha)
    );
}

function puedeJugarIzquierda(
    ficha
) {
    return (
        ficha.numeroA === extremoIzquierdo ||
        ficha.numeroB === extremoIzquierdo
    );
}

function puedeJugarDerecha(
    ficha
) {
    return (
        ficha.numeroA === extremoDerecho ||
        ficha.numeroB === extremoDerecho
    );
}

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

function jugarFichaDerecha(
    ficha
) {
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

function jugarFichaIzquierda(
    ficha
) {
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

function jugarFichaJugador(
    ficha,
    lado
) {
    if (
        turno !== "jugador"
    ) {
        console.log(
            "Ahora no es el turno del jugador"
        );

        return false;
    }

    ultimoEfecto = null;

    const indiceFicha =
        fichasJugador.findIndex(
            fichaMano =>
                fichaMano === ficha
        );

    if (
        indiceFicha === -1
    ) {
        console.log(
            "La ficha no está en la mano del jugador"
        );

        return false;
    }

    let coincideColor = false;

    if (
        lado === "izquierda"
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

    } else if (
        lado === "derecha"
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

    fichasJugador.splice(
        indiceFicha,
        1
    );

    jugadorHaRobado = false;

    if (
        comprobarFinPartida() !==
        null
    ) {
        return true;
    }

    aplicarEfectoColor(
        ficha,
        "jugador",
        coincideColor
    );

    if (
        ultimoEfecto !== null
    ) {
        turno = "jugador";
    } else {
        turno = "maquina";
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

function aplicarEfectoColor(
    ficha,
    quienJuega,
    coincideColor
) {
    ultimoEfecto = null;

    if (
        !coincideColor
    ) {
        return;
    }

    const esDoble =
        ficha.numeroA ===
        ficha.numeroB;

    if (
        esDoble
    ) {
        let manoRival;

        if (
            quienJuega === "jugador"
        ) {
            manoRival =
                fichasMaquina;
        } else {
            manoRival =
                fichasJugador;
        }

        let cantidadRobada = 0;

        for (
            let i = 0;
            i < 2;
            i++
        ) {
            if (
                fichasPozo.length === 0
            ) {
                break;
            }

            robarFicha(
                manoRival
            );

            cantidadRobada++;
        }

        ultimoEfecto = {
            tipo: "bloqueo-roba2",
            jugador: quienJuega,
            cantidad: cantidadRobada
        };

    } else {
        ultimoEfecto = {
            tipo: "bloqueo",
            jugador: quienJuega
        };
    }
}

function robarFichaJugador() {
    ultimoEfecto = null;

    if (
        turno !== "jugador"
    ) {
        console.log(
            "Ahora no es el turno del jugador"
        );

        return false;
    }

    if (
        jugadorHaRobado
    ) {
        console.log(
            "El jugador ya ha robado una ficha este turno"
        );

        return false;
    }

    const jugablesJugador =
        obtenerFichasJugables(
            fichasJugador
        );

    if (
        jugablesJugador.length > 0
    ) {
        console.log(
            "El jugador tiene fichas jugables y no puede robar"
        );

        return false;
    }

    if (
        fichasPozo.length === 0
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

    jugadorHaRobado = true;

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

function pasarTurnoJugador() {
    ultimoEfecto = null;

    if (
        turno !== "jugador"
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
        jugablesJugador.length > 0
    ) {
        console.log(
            "El jugador tiene fichas jugables y no puede pasar"
        );

        return false;
    }

    if (
        fichasPozo.length > 0 &&
        !jugadorHaRobado
    ) {
        console.log(
            "Todavía quedan fichas en el pozo. El jugador debe robar una ficha"
        );

        return false;
    }

    if (
        comprobarFinPartida() !==
        null
    ) {
        return true;
    }

    jugadorHaRobado = false;

    turno = "maquina";

    console.log(
        "El jugador pasa turno"
    );

    return true;
}

function pasarTurnoMaquina() {
    ultimoEfecto = null;

    if (
        turno !== "maquina"
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
        jugablesMaquina.length > 0
    ) {
        console.log(
            "La máquina tiene fichas jugables y no puede pasar"
        );

        return false;
    }

    if (
        fichasPozo.length > 0 &&
        !maquinaHaRobado
    ) {
        console.log(
            "Todavía quedan fichas en el pozo. La máquina debe robar una ficha"
        );

        return false;
    }

    if (
        comprobarFinPartida() !==
        null
    ) {
        return true;
    }

    maquinaHaRobado = false;

    turno = "jugador";

    console.log(
        "La máquina pasa turno"
    );

    return true;
}

function valorarJugadaMaquina(
    ficha,
    lado
) {
    let colorConexion = null;
    let colorExtremo = null;

    if (
        lado === "izquierda"
    ) {
        colorExtremo =
            colorExtremoIzquierdo;

        if (
            ficha.numeroB ===
            extremoIzquierdo
        ) {
            colorConexion =
                ficha.colorB;

        } else if (
            ficha.numeroA ===
            extremoIzquierdo
        ) {
            colorConexion =
                ficha.colorA;

        } else {
            return -1;
        }

    } else if (
        lado === "derecha"
    ) {
        colorExtremo =
            colorExtremoDerecho;

        if (
            ficha.numeroA ===
            extremoDerecho
        ) {
            colorConexion =
                ficha.colorA;

        } else if (
            ficha.numeroB ===
            extremoDerecho
        ) {
            colorConexion =
                ficha.colorB;

        } else {
            return -1;
        }

    } else {
        return -1;
    }

    const coincideColor =
        colorConexion ===
        colorExtremo;

    const esDoble =
        ficha.numeroA ===
        ficha.numeroB;

    let puntuacion =
        ficha.numeroA +
        ficha.numeroB;

    if (
        coincideColor &&
        esDoble
    ) {
        puntuacion += 100;

    } else if (
        coincideColor
    ) {
        puntuacion += 50;
    }

    return puntuacion;
}

function elegirMejorJugadaMaquina(
    jugablesMaquina
) {
    let mejorJugada = null;
    let mejorPuntuacion = -1;

    for (
        const ficha of jugablesMaquina
    ) {
        if (
            puedeJugarIzquierda(
                ficha
            )
        ) {
            const puntuacionIzquierda =
                valorarJugadaMaquina(
                    ficha,
                    "izquierda"
                );

            if (
                puntuacionIzquierda >
                mejorPuntuacion
            ) {
                mejorPuntuacion =
                    puntuacionIzquierda;

                mejorJugada = {
                    ficha: ficha,
                    lado: "izquierda"
                };

            } else if (
                puntuacionIzquierda ===
                    mejorPuntuacion &&
                Math.random() < 0.5
            ) {
                mejorJugada = {
                    ficha: ficha,
                    lado: "izquierda"
                };
            }
        }

        if (
            puedeJugarDerecha(
                ficha
            )
        ) {
            const puntuacionDerecha =
                valorarJugadaMaquina(
                    ficha,
                    "derecha"
                );

            if (
                puntuacionDerecha >
                mejorPuntuacion
            ) {
                mejorPuntuacion =
                    puntuacionDerecha;

                mejorJugada = {
                    ficha: ficha,
                    lado: "derecha"
                };

            } else if (
                puntuacionDerecha ===
                    mejorPuntuacion &&
                Math.random() < 0.5
            ) {
                mejorJugada = {
                    ficha: ficha,
                    lado: "derecha"
                };
            }
        }
    }

    console.log(
        "Mejor puntuación de la máquina:",
        mejorPuntuacion
    );

    console.log(
        "Mejor jugada encontrada:",
        mejorJugada
    );

    return mejorJugada;
}

function jugarTurnoMaquina() {
    if (
        turno !== "maquina"
    ) {
        console.log(
            "Ahora no es el turno de la máquina"
        );

        return false;
    }

    ultimoEfecto = null;
    maquinaHaRobado = false;

    let jugablesMaquina =
        obtenerFichasJugables(
            fichasMaquina
        );

    if (
        jugablesMaquina.length === 0 &&
        fichasPozo.length > 0
    ) {
        const fichaRobada =
            robarFicha(
                fichasMaquina
            );

        maquinaHaRobado = true;

        console.log(
            "La máquina ha robado:",
            fichaRobada
        );

        jugablesMaquina =
            obtenerFichasJugables(
                fichasMaquina
            );
    }

    if (
        jugablesMaquina.length === 0
    ) {
        console.log(
            "La máquina no puede jugar"
        );

        return pasarTurnoMaquina();
    }

    const mejorJugada =
        elegirMejorJugadaMaquina(
            jugablesMaquina
        );

    if (
        mejorJugada === null
    ) {
        console.log(
            "Error: no se encontró ninguna jugada para la máquina"
        );

        return false;
    }

    const fichaElegida =
        mejorJugada.ficha;

    const ladoElegido =
        mejorJugada.lado;

    console.log(
        "La máquina ha elegido:",
        fichaElegida
    );

    console.log(
        "Lado elegido:",
        ladoElegido
    );

    let coincideColor = false;

    if (
        ladoElegido === "izquierda"
    ) {
        coincideColor =
            jugarFichaIzquierda(
                fichaElegida
            );

        console.log(
            "La máquina juega a la izquierda"
        );

    } else if (
        ladoElegido === "derecha"
    ) {
        coincideColor =
            jugarFichaDerecha(
                fichaElegida
            );

        console.log(
            "La máquina juega a la derecha"
        );
    }

    const indiceFicha =
        fichasMaquina.findIndex(
            ficha =>
                ficha === fichaElegida
        );

    if (
        indiceFicha !== -1
    ) {
        fichasMaquina.splice(
            indiceFicha,
            1
        );
    }

    maquinaHaRobado = false;

    if (
        comprobarFinPartida() !==
        null
    ) {
        return true;
    }

    aplicarEfectoColor(
        fichaElegida,
        "maquina",
        coincideColor
    );

    if (
        ultimoEfecto !== null
    ) {
        turno = "maquina";
    } else {
        turno = "jugador";
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

function calcularPuntos(
    mano
) {
    let total = 0;

    for (
        const ficha of mano
    ) {
        total +=
            ficha.numeroA +
            ficha.numeroB;
    }

    return total;
}

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

function partidaBloqueada() {
    if (
        fichasPozo.length > 0
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

function comprobarFinPartida() {
    if (
        fichasJugador.length === 0
    ) {
        partidaTerminada = true;

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

    if (
        fichasMaquina.length === 0
    ) {
        partidaTerminada = true;

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

    if (
        partidaBloqueada()
    ) {
        partidaTerminada = true;

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

    return null;
}