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

let dobleMasAltoJugador = -1;
let fichaDobleMasAltoJugador = null;

for (const ficha of fichasJugador) {
    if (ficha.numeroA === ficha.numeroB) {
        if (ficha.numeroA > dobleMasAltoJugador) {
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
    if (ficha.numeroA === ficha.numeroB) {
        if (ficha.numeroA > dobleMasAltoMaquina) {
            dobleMasAltoMaquina =
            ficha.numeroA;

            fichaDobleMasAltoMaquina = 
            ficha;
        }
    }
}


let turno = null;

let fichaInicial = null;



if (dobleMasAltoJugador > dobleMasAltoMaquina) {

    turno = "jugador";

    fichaInicial =
        fichaDobleMasAltoJugador;



} else if (dobleMasAltoMaquina > dobleMasAltoJugador) {

    turno = "maquina";

    fichaInicial =
        fichaDobleMasAltoMaquina;



} else {

    let sumaMasAltaJugador = -1;

    let sumaMasAltaMaquina = -1;

    let fichaSumaMasAltaJugador = null;

    let fichaSumaMasAltaMaquina = null;


    for (const ficha of fichasJugador) {

        const sumaFicha =
            ficha.numeroA + ficha.numeroB;


        if (sumaFicha > sumaMasAltaJugador) {

            sumaMasAltaJugador =
                sumaFicha;

            fichaSumaMasAltaJugador =
                ficha;
        }
    }

    for (const ficha of fichasMaquina) {

        const sumaFicha =
            ficha.numeroA + ficha.numeroB;


        if (sumaFicha > sumaMasAltaMaquina) {

            sumaMasAltaMaquina =
                sumaFicha;

            fichaSumaMasAltaMaquina =
                ficha;
        }
    }


    if (sumaMasAltaJugador > sumaMasAltaMaquina) {

        turno = "jugador";

        fichaInicial =
            fichaSumaMasAltaJugador;


    } else if (sumaMasAltaMaquina > sumaMasAltaJugador) {

        turno = "maquina";

        fichaInicial =
            fichaSumaMasAltaMaquina;


    } else {

        const empiezaJugador =
            Math.random() < 0.5;


        if (empiezaJugador) {

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

if (turno ==="jugador") {
    const indiceFichaInicial =
    fichasJugador.findIndex(
        ficha => ficha === fichaInicial
    );
    
    if (indiceFichaInicial !== -1) {
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
} else if (turno === "maquina" ){
    const indiceFichaInicial =
    fichasMaquina.findIndex(
        ficha => ficha === fichaInicial
    );

    if (indiceFichaInicial !== -1) {
        const fichaJugada =
        fichasMaquina.splice(
            indiceFichaInicial,
            1
        )[0];

        tablero.push(
            fichaJugada
        );

        turno="jugador";
    }

}

let extremoIzquierdo = 
tablero[0].numeroA;

let extremoDerecho =
tablero[0].numeroB;

function esJugable(ficha) {

    return ( 
        ficha.numeroA === extremoIzquierdo ||
        ficha.numeroA === extremoDerecho ||
        ficha.numeroB === extremoIzquierdo ||
        ficha.numeroB === extremoDerecho
    )
       
}

function obtenerFichasJugables(mano) {
    return mano.filter(
        ficha => esJugable(ficha)
    );
}

function puedeJugarIzquierda(ficha) {
    return (
        ficha.numeroA === extremoIzquierdo ||
        ficha.numeroB === extremoIzquierdo
    );
}

function puedeJugarDerecha(ficha) {
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

function jugarFichaDerecha(ficha) {
    if (ficha.numeroA === extremoDerecho ) {
        tablero.push(
            ficha
        );
        extremoDerecho =
        ficha.numeroB;
    } else if (ficha.numeroB === extremoDerecho) {
        girarFicha(
            ficha
        );
        tablero.push(
            ficha
        );
        extremoDerecho =
        ficha.numeroB;
    }
}

function jugarFichaIzquierda(ficha) {
    if (ficha.numeroB === extremoIzquierdo) {
        tablero.unshift(
            ficha
        );
        extremoIzquierdo =
        ficha.numeroA;
    } else if (ficha.numeroA === extremoIzquierdo) {
        girarFicha(
            ficha
        );
        tablero.unshift(
            ficha
        );

        extremoIzquierdo =
        ficha.numeroA;
    }
}

function jugarFichaJugador(ficha, lado) {
    if (turno !== "jugador") {
        console.log(
            "Ahora no es el turno del jugador"
        );
        return false;
    }
    const indiceFicha =
    fichasJugador.findIndex(
        fichaMano =>
            fichaMano === ficha
    );
    if (indiceFicha === -1) {
        console.log(
            "La ficha no está en la mano del jugador"
        );
        return false;
    }
    if (lado === "izquierda") {
        if (puedeJugarIzquierda(ficha)) {
            jugarFichaIzquierda(
                ficha
            );
        } else {
            console.log(
                "La ficha no puede jugarse a la izquierda"
            );
            return false;
        }
    } else if (lado === "derecha") {
        if (puedeJugarDerecha(ficha)) {
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
    if (comprobarFinPartida() !== null) {
        return true;
    }
    turno = "maquina";
    return true;
}
function robarFicha(mano) {
    if (fichasPozo.length === 0) {
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

function robarFichaJugador() {
    if (turno !== "jugador") {
        console.log(
            "Ahora no es el turno del jugador"
        );
        return false;
    }
    const jugablesJugador =
    obtenerFichasJugables(
        fichasJugador
    );
    if (jugablesJugador.length > 0) {
        console.log(
            "El jugador tiene fichas jugables y no puede robar"
        );
        return false;

    }
    if (fichasPozo.length === 0) {
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

    if (esJugable(fichaRobada)) {
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
    if (turno !== "jugador") {
        console.log(
            "Ahora no es el turno del jugador"
        );
        return false;
    }
    const jugablesJugador = 
    obtenerFichasJugables(
        fichasJugador
    );
    if (jugablesJugador.length > 0) {
        console.log(
            "El jugador tiene fichas jugables y no puede pasar"
        );
        return false;
    }
    if (fichasPozo.length > 0) {
        console.log(
            "Todavía quedan fichas en el pozo. El jugador debe robar"
        );
        return false;
    }
    if (comprobarFinPartida() !== null) {
        return true;
    }
    turno = "maquina";
    console.log(
        "El jugador pasa turno"
    );
    return true
}
function pasarTurnoMaquina() {
    if(turno !== "maquina") {
        console.log(
            "Ahora no es el turno de la máquina"
        );
        return false;
    }
    const jugablesMaquina =
    obtenerFichasJugables(
        fichasMaquina
    );

    if(jugablesMaquina.length > 0) {
        console.log(
            "La máquina tiene fichas jugables y no puede pasar"
        );
        return false;
    }

    if(fichasPozo.length >0) {
        console.log(
            "Todavía quedan fichas en el pozo. La máquina debe robar"
        );
        return false;
    }
    if (comprobarFinPartida() !== null) {
        return true;
    }
    turno = "jugador";
    console.log(
        "La máquina pasa turno"
    );
    return true;
}
function jugarTurnoMaquina() {
    if (turno !== "maquina") {
        console.log(
            "Ahora no es el turno de la máquina"
        );
        return false;
    }
    let jugablesMaquina =
    obtenerFichasJugables(
        fichasMaquina
    );

    while(
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
        if (jugablesMaquina.length === 0) {
            console.log(
                "La máquina no puede jugar"
            );
            return pasarTurnoMaquina();
        }    
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
        if (
            puedeIzquierda &&
            puedeDerecha
        ) {
            const jugarIzquierda =
            Math.random() < 0.5;

            if (jugarIzquierda) {
                jugarFichaIzquierda(
                    fichaElegida
                );
                console.log(
                    "La máquina juega a la izquierda"
                );

            } else {
                jugarFichaDerecha(
                    fichaElegida
                );
                console.log(
                    "La máquina juega a la derecha"
                );
            }

            } else if (puedeIzquierda) {
                jugarFichaIzquierda(
                    fichaElegida
                );
                console.log(
                    "La máquina juega a la izquierda"
                );
            } else if (puedeDerecha) {
                jugarFichaDerecha(
                    fichaElegida
                );
                console.log("La máquina juega a la derecha")
            }
            const indiceFicha =
            fichasMaquina.findIndex(
                ficha =>
                    ficha === fichaElegida
            );

            if (indiceFicha !== -1) {
                fichasMaquina.splice(
                    indiceFicha,
                    1
                );
            }
            if (comprobarFinPartida() !== null) {
                return true;
            }
            turno = "jugador";
            return true;

        }
function calcularPuntos(mano) {
    let total = 0;
    for (const ficha of mano) {
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
    if (puntosJugador < puntosMaquina) {
        console.log(
            "Gana el jugador por tener menos puntos"
        );
        return "jugador";
    } else if(puntosMaquina < puntosJugador) {
        console.log(
            "Gana la máquina por tener menos puntos"
        );
        return "maquina";
    } else{
        console.log(
            "Empate"
        );
        return "empate";
    }
}
function partidaBloqueada() {
    if (fichasPozo.length > 0) {
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
let partidaTerminada = false;
let resultadoPartida = null;

function comprobarFinPartida() {
    if (fichasJugador.length === 0) {
        partidaTerminada = true;
        resultadoPartida = "jugador";
        console.log(
            "El jugador se ha quedado sin fichas"
        );
        console.log(
            "Gana el jugador"
        );
        return resultadoPartida;
    }
    if (fichasMaquina.length === 0) {
        partidaTerminada = true;
        resultadoPartida = "maquina";
        console.log(
            "La máquina se ha quedado sin fichas"
        );
        console.log(
            "Gana la máquina"
        );
        return resultadoPartida;
    }
    if (partidaBloqueada()) {
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