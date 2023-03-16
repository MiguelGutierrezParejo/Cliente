// Inicializamos variables
let tablero = ['', '', '', '', '', '', '', '', ''];
let jugadorActual = 'X';

// Cogemos el tablero
let cuadrados = document.querySelectorAll('.cuadrado');

// Añadimos a cada cuadrado el addEventListener
cuadrados.forEach((cuadrado, i) => {
    cuadrado.addEventListener('click', () => {
        // Si el cuadrado está ocupado o el juego se ha acabado, no hace nada
        if (tablero[i] !== '' || juegoAcabado()) {
            return;
        }

        // Update the tablero array and the UI
        tablero[i] = jugadorActual;
        cuadrado.textContent = jugadorActual;
        cuadrado.style.color = jugadorActual === 'X' ? 'red' : 'blue';

        // Comprueba si el juego está acabado
        if (juegoAcabado()) {
            finJuego();
        } else {
            // Cambio de jugador
            jugadorActual = jugadorActual === 'X' ? 'O' : 'X';
        }
    });
});

function juegoAcabado() {
    const posicionesVictoria = [
        // Horizontal
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // Vertical
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // Diagonal
        [0, 4, 8],
        [2, 4, 6]
    ];

    // Ccomprueba si se ha ganado
    for (let i = 0; i < posicionesVictoria.length; i++) {
        const [a, b, c] = posicionesVictoria[i];
        if (tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
            return true;
        }
    }

    // Comprueba el empate
    if (!tablero.includes('')) {
        return true;
    }

    // Si nadie ha ganado ni hay empate, el juego continúa
    return false;
}

function finJuego() {
    alert(`Se acabó! ${jugadorActual} gana!`);
    resetearTablero();
}

function resetearTablero() {
    tablero = ['', '', '', '', '', '', '', '', ''];
    jugadorActual = 'X';
    cuadrados.forEach((cuadrado) => {
        cuadrado.textContent = '';
        cuadrado.style.color = 'black';
    });
}
