function crearPuntos(numero) {
    const contenedor =
        document.createElement("div");
    contenedor.classList.add(
        "patron-puntos"
    );
    const filaArriba =
        document.createElement("div");
    const filaCentro =
        document.createElement("div");
    const filaAbajo =
        document.createElement("div");

    filaArriba.classList.add(
        "fila-arriba"
    );
    filaCentro.classList.add(
        "fila-centro"
    );
    filaAbajo.classList.add(
        "fila-abajo"
    );
    contenedor.appendChild(
        filaArriba
    );
    contenedor.appendChild(
        filaCentro
    );
    contenedor.appendChild(
        filaAbajo
    );
    if (numero === 1) {
        const punto =
            document.createElement("div");
        punto.classList.add(
            "punto"
        );
        filaCentro.appendChild(
            punto
        );
    }
    if (numero === 2) {
        const puntoArriba =
            document.createElement("div");
        const puntoAbajo =
            document.createElement("div");
        puntoArriba.classList.add(
            "punto"
        );
        puntoAbajo.classList.add(
            "punto"
        );
        filaArriba.appendChild(
            puntoArriba
        );
        filaAbajo.appendChild(
            puntoAbajo
        );
    }
    if (numero === 3) {
        const puntoArriba =
            document.createElement("div");
        const puntoCentro =
            document.createElement("div");
        const puntoAbajo =
            document.createElement("div");
        puntoArriba.classList.add(
            "punto"
        );
        puntoCentro.classList.add(
            "punto"
        );
        puntoAbajo.classList.add(
            "punto"
        );
        filaArriba.appendChild(
            puntoArriba
        );
        filaCentro.appendChild(
            puntoCentro
        );
        filaAbajo.appendChild(
            puntoAbajo
        );
    }
    if (numero === 4) {
        const puntoArribaIzquierda =
            document.createElement("div");
        const puntoArribaDerecha =
            document.createElement("div");
        const puntoAbajoIzquierda =
            document.createElement("div");
        const puntoAbajoDerecha =
            document.createElement("div");

        puntoArribaIzquierda.classList.add(
            "punto"
        );
        puntoArribaDerecha.classList.add(
            "punto"
        );
        puntoAbajoIzquierda.classList.add(
            "punto"
        );
        puntoAbajoDerecha.classList.add(
            "punto"
        );
        filaArriba.classList.add(
            "fila-doble"
        );
        filaAbajo.classList.add(
            "fila-doble"
        );
        filaArriba.appendChild(
            puntoArribaIzquierda
        );
        filaArriba.appendChild(
            puntoArribaDerecha
        );
        filaAbajo.appendChild(
            puntoAbajoIzquierda
        );
        filaAbajo.appendChild(
            puntoAbajoDerecha
        );
    }
    if (numero === 5) {
        const puntoArribaIzquierda =
            document.createElement("div");
        const puntoArribaDerecha =
            document.createElement("div");
        const puntoCentro =
            document.createElement("div");
        const puntoAbajoIzquierda =
            document.createElement("div");
        const puntoAbajoDerecha =
            document.createElement("div");

        puntoArribaIzquierda.classList.add(
            "punto"
        );
        puntoArribaDerecha.classList.add(
            "punto"
        );
        puntoCentro.classList.add(
            "punto"
        );
        puntoAbajoIzquierda.classList.add(
            "punto"
        );
        puntoAbajoDerecha.classList.add(
            "punto"
        );
        filaArriba.classList.add(
            "fila-doble"
        );
        filaAbajo.classList.add(
            "fila-doble"
        );
        filaArriba.appendChild(
            puntoArribaIzquierda
        );
        filaArriba.appendChild(
            puntoArribaDerecha
        );
        filaCentro.appendChild(
            puntoCentro
        );
        filaAbajo.appendChild(
            puntoAbajoIzquierda
        );
        filaAbajo.appendChild(
            puntoAbajoDerecha
        );
    }
    if (numero === 6) {
        const puntoArribaIzquierda =
            document.createElement("div");
        const puntoArribaDerecha =
            document.createElement("div");
        const puntoCentroIzquierda =
            document.createElement("div");
        const puntoCentroDerecha =
            document.createElement("div");
        const puntoAbajoIzquierda =
            document.createElement("div");
        const puntoAbajoDerecha =
            document.createElement("div");
        puntoArribaIzquierda.classList.add(
            "punto"
        );
        puntoArribaDerecha.classList.add(
            "punto"
        );
        puntoCentroIzquierda.classList.add(
            "punto"
        );
        puntoCentroDerecha.classList.add(
            "punto"
        );
        puntoAbajoIzquierda.classList.add(
            "punto"
        );
        puntoAbajoDerecha.classList.add(
            "punto"
        );
        filaArriba.classList.add(
            "fila-doble"
        );
        filaCentro.classList.add(
            "fila-doble"
        );
        filaAbajo.classList.add(
            "fila-doble"
        );
        filaArriba.appendChild(
            puntoArribaIzquierda
        );
        filaArriba.appendChild(
            puntoArribaDerecha
        );
        filaCentro.appendChild(
            puntoCentroIzquierda
        );
        filaCentro.appendChild(
            puntoCentroDerecha
        );
        filaAbajo.appendChild(
            puntoAbajoIzquierda
        );
        filaAbajo.appendChild(
            puntoAbajoDerecha
        );
    }
    return contenedor;
}
function crearFichaVisual(ficha) {
    const fichaVisual =
        document.createElement("div");
    fichaVisual.classList.add(
        "ficha"
    );

    if (ficha.numeroA === ficha.numeroB) {
        fichaVisual.classList.add(
            "doble"
        );
    }



    const mitadA =
        document.createElement("div");
    mitadA.classList.add(
        "mitad-arriba"
    );
    mitadA.style.backgroundColor =
        ficha.colorA;
    const puntosA =
        crearPuntos(
            ficha.numeroA
        );
    mitadA.appendChild(
        puntosA
    );
    const mitadB =
        document.createElement("div");
    mitadB.classList.add(
        "mitad-abajo"
    );
    mitadB.style.backgroundColor =
        ficha.colorB;
    const puntosB =
        crearPuntos(
            ficha.numeroB
        );
    mitadB.appendChild(
        puntosB
    );
    fichaVisual.appendChild(
        mitadA
    );
    fichaVisual.appendChild(
        mitadB
    );

   if (ficha.tipo === "roba2") {

    fichaVisual.classList.add(
        "especial-roba2"
    );

} else if (
    ficha.tipo === "bloqueo"
) {

    fichaVisual.classList.add(
        "especial-bloqueo"
    );
}
    return fichaVisual;
}
function crearFichaOculta() {
    const fichaOculta =
        document.createElement("div");
    fichaOculta.classList.add(
        "ficha-oculta"
    );
    return fichaOculta;
}
let fichaSeleccionada = null;
function mostrarFichasJugador() {
    const zonaFichasJugador =
        document.querySelector(
            ".fichas-jugador"
        );
    zonaFichasJugador.innerHTML = "";
    for (const ficha of fichasJugador) {
        const fichaVisual =
            crearFichaVisual(ficha);
        if (
            turno === "jugador" &&
            !partidaTerminada
        ) {
            if (esJugable(ficha)) {
                fichaVisual.classList.add(
                    "jugable"
                );
            } else {
                fichaVisual.classList.add(
                    "no-jugable"
                );
            }
        }
        if (ficha === fichaSeleccionada) {
            fichaVisual.classList.add(
                "seleccionada"
            );
        }
        fichaVisual.addEventListener(
            "click",
            function () {
                if (partidaTerminada) {
                    return;
                }
                if (turno !== "jugador") {
                    mostrarMensaje(
                        "Espera a que termine el turno de la máquina"
                    );
                    return;
                }
                fichaSeleccionada = ficha;
                console.log(
                    "Ficha seleccionada:",
                    fichaSeleccionada
                );
                mostrarMensaje(
                    "Ficha seleccionada. Elige izquierda o derecha"
                );
                mostrarFichasJugador();
            }
        );
        zonaFichasJugador.appendChild(
            fichaVisual
        );

    }
}
mostrarFichasJugador();
function mostrarFichasMaquina() {
    const zonaFichasMaquina =
        document.querySelector(
            ".fichas-maquina"
        );
    zonaFichasMaquina.innerHTML = "";
    for (const ficha of fichasMaquina) {
        const fichaVisual =
            crearFichaOculta();
        zonaFichasMaquina.appendChild(
            fichaVisual
        );
    }
}
mostrarFichasMaquina();
function mostrarFichasPozo() {
    const zonaFichasPozo =
        document.querySelector(
            ".fichas-pozo"
        );
    zonaFichasPozo.innerHTML = "";
    const rotaciones = [
        -12, 8, -5, 14, -9, 4, 11,
        -3, 7, -14, 2, 9, -6, 5
    ];
    const posicionesX = [
        5, 40, 75, 20, 100, 55, 120,
        10, 85, 35, 110, 25, 70, 125
    ];
    const posicionesY = [
        5, 12, 3, 42, 30, 58, 10,
        72, 65, 20, 48, 78, 38, 28
    ];
    for (
        let i = 0;
        i < fichasPozo.length;
        i++
    ) {
        const fichaVisual =
            crearFichaOculta();
        fichaVisual.style.left =
            posicionesX[
            i % posicionesX.length
            ] + "px";

        fichaVisual.style.top =
            posicionesY[
            i % posicionesY.length
            ] + "px"

        fichaVisual.style.transform =
            `rotate(${rotaciones[
            i % rotaciones.length
            ]
            }deg)`;
        zonaFichasPozo.appendChild(
            fichaVisual
        );
    }
}
mostrarFichasPozo();
function mostrarTablero() {
    const zonaTablero =
        document.querySelector(
            ".cadena-fichas"
        );
    zonaTablero.innerHTML = "";
    for (const ficha of tablero) {
        const fichaVisual =
            crearFichaVisual(ficha);
        zonaTablero.appendChild(
            fichaVisual
        );
    }
}
mostrarTablero();
function actualizarInformacionPartida() {
    const infoTurno =
        document.querySelector(
            "#info-turno"
        );
    const infoPozo =
        document.querySelector(
            "#info-pozo"
        );
    const infoMaquina =
        document.querySelector(
            "#info-maquina"
        );
    const infoJugador =
        document.querySelector(
            "#info-jugador"
        );
    if (turno === "jugador") {
        infoTurno.textContent =
            "Jugador";

    } else if (turno === "maquina") {
        infoTurno.textContent =
            "Máquina";
    }
    infoPozo.textContent =
        fichasPozo.length;

    infoMaquina.textContent =
        fichasMaquina.length;

    infoJugador.textContent =
        fichasJugador.length
}

function actualizarInterfazVisual() {
    mostrarFichasJugador();
    mostrarFichasMaquina();
    mostrarFichasPozo();
    mostrarTablero();
    actualizarInformacionPartida();
}
actualizarInformacionPartida();

function mostrarMensaje(texto) {
    const zonaMensaje =
        document.querySelector(
            "#mensaje-juego"
        );
    zonaMensaje.textContent =
        texto;
}
function mostrarMensajeEfecto() {

    if (ultimoEfecto === null) {

        return false;
    }


    if (
        ultimoEfecto.tipo === "roba2" &&
        ultimoEfecto.jugador === "jugador"
    ) {

        mostrarMensaje(
            "Has jugado +2. La máquina roba " +
            ultimoEfecto.cantidad +
            " fichas."
        );

        return true;
    }


    if (
        ultimoEfecto.tipo === "roba2" &&
        ultimoEfecto.jugador === "maquina"
    ) {

        mostrarMensaje(
            "La máquina ha jugado +2. Has robado " +
            ultimoEfecto.cantidad +
            " fichas."
        );

        return true;
    }


    if (
        ultimoEfecto.tipo === "bloqueo" &&
        ultimoEfecto.jugador === "jugador"
    ) {

        mostrarMensaje(
            "Has jugado una X. La máquina pierde su turno. Vuelves a jugar."
        );

        return true;
    }


    if (
        ultimoEfecto.tipo === "bloqueo" &&
        ultimoEfecto.jugador === "maquina"
    ) {

        mostrarMensaje(
            "La máquina ha jugado una X. Pierdes tu turno."
        );

        return true;
    }


    return false;
}

function mostrarResultadoFinal() {
    const zonaResultado =
        document.querySelector(
            "#resultado-partida"
        );
    const tituloResultado =
        document.querySelector(
            "#resultado-titulo"
        );
    const ganadorResultado =
        document.querySelector(
            "#resultado-ganador"
        );
    const perdedorResultado =
        document.querySelector(
            "#resultado-perdedor"
        );
    if (resultadoPartida === "jugador") {
        tituloResultado.textContent =
            "¡Has ganado!";
        ganadorResultado.textContent =
            "Jugador";
        perdedorResultado.textContent =
            "Máquina";
    } else if (
        resultadoPartida === "maquina"
    ) {
        tituloResultado.textContent =
            "Ha ganado la máquina";
        ganadorResultado.textContent =
            "Máquina";
        perdedorResultado.textContent =
            "Jugador";
    } else if (
        resultadoPartida === "empate"
    ) {
        tituloResultado.textContent =
            "Empate";
        ganadorResultado.textContent =
            "Ninguno";
        perdedorResultado.textContent =
            "Ninguno";
    }
    zonaResultado.classList.add(
        "visible"
    );
}
function mostrarMensajeResultado() {
    desactivarControlesJugador();
    actualizarMarcadorSiCorresponde();
    if (resultadoPartida === "jugador") {
        mostrarMensaje(
            "¡Has ganado la partida!"
        );
    } else if (
        resultadoPartida === "maquina"
    ) {
        mostrarMensaje(
            "La máquina ha ganado la partida"
        );
    } else if (
        resultadoPartida === "empate"
    ) {
        mostrarMensaje(
            "La partida ha terminado en empate"
        );
    }
    mostrarResultadoFinal();
}
const CLAVE_MARCADOR =
    "domino-marcador";
function cargarMarcador() {
    const guardado =
        localStorage.getItem(
            CLAVE_MARCADOR
        );
    if (!guardado) {
        return {
            victorias: 0,
            derrotas: 0
        };
    }
    try {
        const datos =
            JSON.parse(
                guardado
            );
        return {
            victorias:
                datos.victorias || 0,
            derrotas:
                datos.derrotas || 0

        };
    } catch (error) {
        return {
            victorias: 0,
            derrotas: 0
        };
    }
}
const marcador =
    cargarMarcador();
let marcadorRegistrado =
    false;
function guardarMarcador() {
    localStorage.setItem(
        CLAVE_MARCADOR,
        JSON.stringify(
            marcador
        )
    );
}
function mostrarMarcador() {
    const elementoMarcador =
        document.querySelector(
            "#info-marcador"
        );
    if (elementoMarcador) {
        elementoMarcador.textContent =
            `${marcador.victorias} / ${marcador.derrotas}`;
    }
}
function actualizarMarcadorSiCorresponde() {
    if (
        marcadorRegistrado ||
        !partidaTerminada
    ) {
        return;
    }
    marcadorRegistrado = true;
    if (resultadoPartida === "jugador") {
        marcador.victorias++;
    } else if (
        resultadoPartida === "maquina"
    ) {
        marcador.derrotas++;
    }
    guardarMarcador();
    mostrarMarcador();
}
function desactivarControlesJugador() {
    document.querySelector(
        "#btn-izquierda"
    ).disabled = true;

    document.querySelector(
        "#btn-derecha"
    ).disabled = true;

    document.querySelector(
        "#btn-robar"
    ).disabled = true;

    document.querySelector(
        "#btn-pasar"
    ).disabled = true;
}

function activarControlesJugador() {
    if (partidaTerminada) {
        return;
    }
    document.querySelector(
        "#btn-izquierda"
    ).disabled = false;

    document.querySelector(
        "#btn-derecha"
    ).disabled = false;

    document.querySelector(
        "#btn-robar"
    ).disabled = false;

    document.querySelector(
        "#btn-pasar"
    ).disabled = false;
}
function ejecutarTurnoMaquinaVisual() {

    console.log(
        "Entramos en el turno visual de la máquina"
    );


    if (partidaTerminada) {

        desactivarControlesJugador();

        mostrarMensajeResultado();

        return;
    }


    if (turno !== "maquina") {

        return;
    }


    desactivarControlesJugador();

    mostrarMensaje(
        "La máquina está pensando..."
    );


    setTimeout(
        function () {

            jugarTurnoMaquina();

            actualizarInterfazVisual();


            if (partidaTerminada) {

                desactivarControlesJugador();

                mostrarMensajeResultado();

                return;
            }


            // La máquina ha jugado una X
            // y vuelve a tener el turno
            if (turno === "maquina") {

                mostrarMensajeEfecto();

                setTimeout(
                    function () {

                        ejecutarTurnoMaquinaVisual();
                    },
                    1200
                );

                return;
            }


            // La máquina ha jugado +2
            if (
                ultimoEfecto !== null &&
                ultimoEfecto.tipo === "roba2"
            ) {

                mostrarMensajeEfecto();

                activarControlesJugador();

                return;
            }


            // Turno normal del jugador
            activarControlesJugador();

            mostrarMensaje(
                "Tu turno. Selecciona una ficha."
            );
        },

        1500
    );
}