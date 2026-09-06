 DomUno - Dominó de colores

Proyecto web inspirado en el dominó tradicional y combinado con algunas mecánicas de UNO.

DomUno utiliza las 28 fichas clásicas del dominó doble-seis, pero añade colores y efectos especiales para hacer las partidas más dinámicas.

Para colocar una ficha debe coincidir el número con uno de los extremos del tablero. Si además coincide el color, se activa un efecto sobre el rival, de forma parecida a algunas cartas especiales de UNO.

El juego enfrenta a un jugador contra la máquina y toda la partida se desarrolla directamente en el navegador.

Cómo jugar

Al comenzar la partida se crean las 28 fichas del dominó doble-seis y se reparten:

- 7 fichas para el jugador.
- 7 fichas para la máquina.
- 14 fichas en el pozo.

La primera ficha se coloca automáticamente. Se intenta comenzar con el doble más alto y, si es necesario, se utiliza la ficha con mayor suma de puntos.

Durante el turno del jugador:

1. Selecciona una ficha de su mano.
2. Elige si quieres colocarla a la izquierda o a la derecha.
3. La ficha solo puede colocarse si alguno de sus números coincide con el extremo correspondiente del tablero.
4. Si no tienes ninguna ficha jugable, debes robar del pozo.
5. Si el pozo está vacío y tampoco puedes jugar, puedes pasar el turno.

Mecánica de colores

La base del juego sigue siendo la del dominó tradicional: para colocar una ficha debe coincidir el número con uno de los extremos del tablero.

La parte inspirada en UNO aparece con los colores y sus efectos:

- Mismo número:jugada normal y el turno pasa al rival.
- Mismo número y mismo color: el rival pierde su turno y el jugador vuelve a jugar.
- Doble con mismo número y mismo color: el rival pierde su turno y roba hasta 2 fichas del pozo. El jugador vuelve a jugar.

Las fichas normales tienen dos colores diferentes.

Las fichas dobles son monocolor, es decir, tienen el mismo color en ambas mitades.

Los colores de los dobles se reparten de forma equilibrada entre rojo, amarillo, azul y verde.

La máquina

La máquina juega de forma automática.

Cuando tiene varias posibilidades, analiza las fichas que puede colocar tanto a la izquierda como a la derecha y da prioridad a:

1. Dobles que coincidan también en color.
2. Fichas que coincidan en número y color.
3. Jugadas normales por coincidencia de número.

Entre jugadas similares intenta utilizar las fichas con más puntos.

También se ha añadido un pequeño tiempo de espera antes de sus movimientos para que los turnos no sean inmediatos.

 Final de la partida

La partida termina cuando uno de los dos jugadores se queda sin fichas.

También puede terminar si la partida queda bloqueada y ninguno de los dos puede realizar una jugada.

En ese caso:

- Gana quien tenga menos puntos en su mano.
- Si ambos tienen la misma cantidad de puntos, la partida termina en empate.

Marcador

El juego guarda un marcador con las victorias y derrotas del jugador.

El marcador se almacena mediante localStorage, por lo que se mantiene aunque se recargue la página.

Los empates no suman ni victoria ni derrota.

Cómo ejecutarlo

El proyecto no necesita instalación ni dependencias externas.

1. Descarga o clona el repositorio.
2. Abre la carpeta del proyecto.
3. Abre index.html en un navegador.

También puede ejecutarse utilizando una extensión como Live Server desde Visual Studio Code.

Estructura

- index.html — estructura principal de la aplicación.
- styles.css — estilos, tablero, fichas y adaptación visual.
- domino-logica.js — creación de fichas y reglas de la partida.
- domino-interfaz.js — representación visual y actualización de la interfaz.
- domino-controles.js — gestión de botones y acciones del jugador.
- fondo-madera.png — imagen utilizada en el diseño.
- fondonegro.png — fondo utilizado para el tablero.

Tecnologías utilizadas

- HTML
- CSS
- JavaScript
- LocalStorage

Funcionalidades principales

1. Generación automática de las 28 fichas del dominó doble-seis.
2. Reparto aleatorio de fichas.
3. Selección automática de la ficha inicial.
4. Colocación de fichas por izquierda o derecha.
5. Mecánica basada en la coincidencia de número y color.
6. Efecto de bloqueo inspirado en UNO.
7. Efecto de robo de hasta 2 fichas mediante los dobles.
8. Robo de fichas desde el pozo.
9. Paso de turno cuando no existen jugadas posibles.
10. Máquina con selección automática de jugadas.
11. Detección de victoria, derrota, bloqueo y empate.
12. Marcador de partidas guardado en el navegador.
13. Nueva partida sin necesidad de volver al menú inicial.
