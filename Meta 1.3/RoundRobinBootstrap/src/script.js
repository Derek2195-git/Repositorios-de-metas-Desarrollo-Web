// Creamos los arreglos para los procesos, los contadores de estos, y un listado de procesos terminados
let procesos = [];
let contadores = [];
let terminados = [];
let procesosTerminados = 0;
let numProcesos = 3;

const log = document.getElementById('log');
// Ejecutaremos la simulacion al presionar el boton
document.getElementById('btnSimulacion').addEventListener('click', () => {
    log.textContent = "";
    imprimirTexto("Iniciando simulación:\n");
    inicializarSimulacion();
    iniciarSimulacion();
});

function inicializarSimulacion() {
    // Vamos a crear diferentes procesos, y para esto se nos especifica que debemos crear objetos con el 
    // numero de proceso y el arreglo de lineas de codigo
    procesos = [
        {
            id: 1,
            codigo: ["a = 1 + 2;", "console.log('1+2');", "console.log(a);"]
        },
        {
            id: 2,
            codigo: ["b = 3 + 4;", "console.log('3+4');"]
        },
        {
            id: 3,
            codigo: ["c = 5 + 6;", "console.log('5+6');", "console.log(c);"]
        }
    ];
    // Iniciamos en ceros a los contadores e inicializamos al arreglo que se encargara de checar si los procesos se acabaron como falso
    for (let i = 0; i < numProcesos; i++) {
        contadores.push(0);
        terminados.push(false);
    }
}

// Este es el codigo del JDoodle, solo que cambiamos algunas cosas
function iniciarSimulacion() {
    let hayProcesosActivos = true;
    // Mientras aún queden procesos activos, el codigo se repetirá indefinidamente
    while (hayProcesosActivos) {
        hayProcesosActivos = false;
        // Con un for nos iremos llendo proceso por proceso, emulando el funcionamiento del algoritmo de RoundRobin
        for (let i = 0; i < procesos.length; i++) {
            let proceso = procesos[i];
            let contador = contadores[i];
            // Si hay un proceso terminado, escribimos que ya se acabo y nos pasamos al siguiente cilo
            if (terminados[i]) {
                imprimirTexto("Proceso " + proceso.id);
                imprimirTexto("Proceso terminado");
            } else if (contador < proceso.codigo.length) { // Aqui simplemente ponemos la linea de codigo del arreglo de procesos
                imprimirTexto("Proceso " + proceso.id);
                imprimirTexto("Línea de código: " + proceso.codigo[contador]);
                contadores[i]++;
                hayProcesosActivos = true;
              // Cuando el contador actual tenga el mismo valor que la longitud del objeto correspondiente, se determinara como terminado
              // Y actualizaremos el arreglo de terminados
                if (contadores[i] >= proceso.codigo.length) {
                    terminados[i] = true;
           }
       }
    }
      // Imprimimos un pequeño salto de linea entre ciclos
    imprimirTexto("");
    }
    imprimirTexto("Simulación terminada.");
}

// Para actualizar el texto en la carta que esta en el html usamos esto, simplemente añado el texto y hago un salto de linea
function imprimirTexto(texto) {
    log.textContent += texto + "\n";
}
