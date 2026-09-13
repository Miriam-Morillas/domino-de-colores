DomUno - Dominó de colores

DomUno es un juego web basado en el dominó tradicional, pero con algunas mecánicas inspiradas en UNO.

El juego utiliza las 28 fichas clásicas del dominó doble-seis, aunque en este caso cada mitad de la ficha tiene también un color. Gracias a eso, además de hacer coincidir los números como en un dominó normal, se pueden activar efectos especiales cuando también coincide el color.

La partida enfrenta a un jugador contra la máquina y todo funciona directamente desde el navegador.

Cómo jugar

Al empezar una partida se crean las 28 fichas y se reparten de esta forma:

- 7 fichas para el jugador.
- 7 fichas para la máquina.
- 14 fichas en el pozo.

La primera ficha se coloca automáticamente.

Para decidir quién empieza, primero se compara el doble más alto que tenga cada uno. Si hace falta, se compara la ficha con mayor suma de puntos y, si todavía hay empate, se decide al azar.

Durante el turno del jugador se puede seleccionar una ficha y elegir si se quiere colocar a la izquierda o a la derecha del tablero.

Para poder colocarla, uno de sus números tiene que coincidir con el número del extremo correspondiente.

Si el jugador no tiene ninguna ficha jugable, puede robar una ficha del pozo.

Solo se puede robar una ficha por turno.

Si la ficha robada puede jugarse, hay que colocarla.

Si la ficha robada tampoco sirve, se puede pasar el turno.

Si el pozo está vacío y tampoco hay ninguna jugada posible, también se puede pasar.

Mecánica de colores

La base del juego sigue siendo la del dominó tradicional: para jugar una ficha tiene que coincidir el número.

El color no decide si una ficha se puede colocar o no. Solo sirve para activar efectos especiales después de hacer una jugada válida.

Las jugadas pueden ser:

- Mismo número: la jugada es normal y el turno pasa al rival.
- Mismo número y mismo color: el rival pierde su turno y el jugador vuelve a jugar.
- Doble con mismo número y mismo color: el rival pierde su turno, roba hasta 2 fichas del pozo y el jugador vuelve a jugar.

Las fichas normales tienen dos colores diferentes.

Los dobles son monocolor, así que las dos mitades tienen el mismo color.

Los colores utilizados son rojo, amarillo, azul y verde.

En el caso de los dobles, los colores se reparten de forma bastante equilibrada. Se parte de dos posiciones de cada color y se elimina una al azar, por lo que al final el reparto queda siempre 2-2-2-1.

La máquina

La máquina juega automáticamente.

Cuando tiene varias posibilidades, analiza qué fichas puede colocar a la izquierda y a la derecha y elige la opción que considera mejor.

Da prioridad a:

1. Dobles que también coincidan en color.
2. Fichas que coincidan en número y color.
3. Jugadas normales por coincidencia de número.

Si tiene varias jugadas parecidas, intenta quitarse fichas con más puntos.

La máquina utiliza la misma regla de robo que el jugador.

Si no tiene ninguna ficha jugable, roba una sola ficha.

Si esa ficha sirve, la juega.

Si tampoco sirve, pasa el turno.

También se ha añadido un pequeño tiempo de espera antes de sus movimientos para que el turno de la máquina no sea instantáneo.

Final de la partida

La partida termina cuando uno de los dos jugadores se queda sin fichas.

También puede terminar si la partida queda bloqueada.

Se considera que una partida está bloqueada cuando el pozo está vacío y ninguno de los dos jugadores puede realizar una jugada.

En ese caso se suman los puntos de las fichas que le quedan a cada uno.

- Gana quien tenga menos puntos.
- Si los dos tienen la misma cantidad de puntos, la partida termina en empate.

Marcador

El juego guarda un marcador con las victorias y derrotas del jugador.

Este marcador se guarda utilizando localStorage, por lo que se mantiene aunque se recargue la página o se empiece una nueva partida.

Los empates no suman ni victoria ni derrota.

Pantalla de inicio

El juego tiene una pantalla de inicio propia con el logo de DomUno y tres opciones:

- Jugar.
- Reglas del juego.
- Salir.

Desde esta pantalla se puede empezar una partida, consultar las reglas o salir.

Reglas del juego

El botón Reglas del juego abre un panel donde se explican las reglas principales de la partida.

En él se explica cómo colocar una ficha, qué ocurre cuando coincide el número y el color, cómo funcionan los dobles, cuándo se puede robar, cuándo se puede pasar y cómo termina una partida.

Pantalla de salida

Al pulsar Salir aparece una pantalla de despedida.

Desde esa pantalla se puede volver directamente al menú principal con el botón Volver al inicio.

Nueva partida

El botón Nueva partida reinicia completamente la partida.

Se vuelven a crear las fichas, se asignan los colores, se reparten las manos, se prepara el pozo y se decide de nuevo la ficha inicial.

De esta forma se genera una partida nueva, pero se vuelve directamente al tablero sin pasar otra vez por el menú principal.

Cómo ejecutarlo

El proyecto no necesita instalación ni dependencias externas.

1. Descarga o clona el repositorio.
2. Abre la carpeta del proyecto.
3. Abre index.html en un navegador.

También se puede ejecutar usando una extensión como Live Server desde Visual Studio Code.

Estructura del proyecto

- index.html: contiene la estructura principal, la pantalla de inicio, las reglas, la salida y la zona de juego.
- styles.css: contiene los estilos, animaciones, diseño responsive, fichas y tablero.
- domino-logica.js: contiene la creación de fichas, las reglas de la partida, los turnos y el final del juego.
- domino-interfaz.js: se encarga de mostrar las fichas, actualizar la pantalla, enseñar mensajes y gestionar el marcador.
- domino-controles.js: controla los botones y las acciones del jugador.
- fondo-madera.png: textura utilizada en el diseño del tablero.
- fondonegro.png: fondo utilizado en la zona central del tablero.
- inicio nuevo/logo-domuno.png: logo principal del juego.
- inicio nuevo/inicioIn.png: fondo utilizado en la pantalla de inicio.

Tecnologías utilizadas

- HTML
- CSS
- JavaScript
- DOM
- localStorage

Funcionalidades principales

1. Creación automática de las 28 fichas del dominó doble-seis.
2. Asignación aleatoria de colores.
3. Reparto aleatorio de fichas.
4. Reparto equilibrado de colores para los dobles.
5. Selección automática de la ficha inicial.
6. Posibilidad de jugar a izquierda o derecha.
7. Validación de jugadas mediante coincidencia de número.
8. Efectos especiales cuando también coincide el color.
9. Bloqueo del turno del rival.
10. Robo de hasta 2 fichas mediante los dobles.
11. Robo máximo de una ficha por turno cuando no hay jugadas.
12. Posibilidad de pasar si la ficha robada tampoco sirve.
13. Máquina con selección automática de jugadas.
14. Misma regla de robo y pase para jugador y máquina.
15. Detección de victoria y derrota.
16. Detección de partidas bloqueadas.
17. Resolución de bloqueos mediante suma de puntos.
18. Posibilidad de empate.
19. Marcador guardado mediante localStorage.
20. Pantalla de inicio con logo y menú.
21. Panel con las reglas del juego.
22. Pantalla de salida.
23. Nueva partida sin volver al menú principal.
24. Diseño adaptable a ordenador, tablet y móvil.
25. Animaciones y tiempos visuales para hacer la partida más agradable.
