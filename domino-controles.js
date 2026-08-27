const botonIzquierda =
    document.querySelector(
        "#btn-izquierda"
    );

botonIzquierda.addEventListener(
    "click",
    function () {

        if (fichaSeleccionada === null) {

            mostrarMensaje(
                "Selecciona una ficha antes de elegir un lado."
            );

            return;
        }

        const jugadaCorrecta =
            jugarFichaJugador(
                fichaSeleccionada,
                "izquierda"
            );

        if (jugadaCorrecta) {

            fichaSeleccionada =
                null;

           actualizarInterfazVisual();

if (partidaTerminada) {

    mostrarMensajeResultado();

    return;
}


// Si la ficha ha bloqueado a la máquina,
// el jugador vuelve a jugar
if (turno === "jugador") {

    mostrarMensajeEfecto();

    activarControlesJugador();

    return;
}


// Si ahora juega la máquina
if (turno === "maquina") {

    if (ultimoEfecto !== null) {

        mostrarMensajeEfecto();

        setTimeout(
            function () {

                ejecutarTurnoMaquinaVisual();
            },
            1200
        );

    } else {

        ejecutarTurnoMaquinaVisual();
    }
}

        } else {

            mostrarMensaje(
                "Esa ficha no encaja en el extremo izquierdo."
            );
        }
    }
);

const botonDerecha =
    document.querySelector(
        "#btn-derecha"
    );

botonDerecha.addEventListener(
    "click",
    function () {

        if (fichaSeleccionada === null) {

            mostrarMensaje(
                "Selecciona una ficha antes de elegir un lado."
            );

            return;
        }

        const jugadaCorrecta =
            jugarFichaJugador(
                fichaSeleccionada,
                "derecha"
            );

        if (jugadaCorrecta) {

            fichaSeleccionada =
                null;

            actualizarInterfazVisual();

            if (partidaTerminada) {

                mostrarMensajeResultado();

                return;
            }

            ejecutarTurnoMaquinaVisual();

        } else {

            mostrarMensaje(
                "Esa ficha no encaja en el extremo derecho."
            );
        }
    }
);

const botonRobar =
    document.querySelector(
        "#btn-robar"
    );


botonRobar.addEventListener(
    "click",
    function () {

        const roboCorrecto =
            robarFichaJugador();


        if (roboCorrecto) {

            fichaSeleccionada =
                null;

            actualizarInterfazVisual();


            const jugablesJugador =
                obtenerFichasJugables(
                    fichasJugador
                );


            if (jugablesJugador.length > 0) {

                mostrarMensaje(
                    "Has robado una ficha jugable. Selecciónala y juega."
                );

            } else if (
                fichasPozo.length > 0
            ) {

                mostrarMensaje(
                    "La ficha robada no sirve. Debes volver a robar."
                );

            } else {

                mostrarMensaje(
                    "La ficha robada no sirve y el pozo está vacío. Debes pasar."
                );
            }


        } else {

            if (turno !== "jugador") {

                mostrarMensaje(
                    "Espera a que termine el turno de la máquina."
                );

            } else if (
                obtenerFichasJugables(
                    fichasJugador
                ).length > 0
            ) {

                mostrarMensaje(
                    "Tienes una ficha jugable. No puedes robar."
                );

            } else if (
                fichasPozo.length === 0
            ) {

                mostrarMensaje(
                    "El pozo está vacío. Debes pasar el turno."
                );

            } else {

                mostrarMensaje(
                    "No puedes robar en este momento."
                );
            }
        }
    }
);

const botonPasar =
    document.querySelector(
        "#btn-pasar"
    );


botonPasar.addEventListener(
    "click",
    function () {

        const paseCorrecto =
            pasarTurnoJugador();


        if (paseCorrecto) {

            fichaSeleccionada =
                null;

            actualizarInterfazVisual();


            if (partidaTerminada) {

                mostrarMensajeResultado();

                return;
            }


            mostrarMensaje(
                "Has pasado el turno."
            );


            if (turno === "maquina") {

                ejecutarTurnoMaquinaVisual();
            }


        } else {

            if (turno !== "jugador") {

                mostrarMensaje(
                    "Espera a que termine el turno de la máquina."
                );

            } else if (
                obtenerFichasJugables(
                    fichasJugador
                ).length > 0
            ) {

                mostrarMensaje(
                    "Tienes una ficha jugable. No puedes pasar."
                );

            } else if (
                fichasPozo.length > 0
            ) {

                mostrarMensaje(
                    "No puedes pasar todavía. Debes robar una ficha."
                );

            } else {

                mostrarMensaje(
                    "No puedes pasar en este momento."
                );
            }
        }
    }
);
if (
    turno === "maquina" &&
    !partidaTerminada
) {
    ejecutarTurnoMaquinaVisual();
} else {
    mostrarMensaje(
        "Tu turno. Selecciona una ficha"
    );
}
const botonNuevaPartida =
    document.querySelector(
        "#btn-nueva-partida"
    );
botonNuevaPartida.addEventListener(
    "click",
    function () {
        location.reload();
    }
);