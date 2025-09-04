// Creamos los arreglos para los procesos, los contadores de estos, y un listado de procesos terminados
let procesos = [];
let contadores = [];
let terminados = [];
let procesosTerminados = 0;

let numProcesos = 3;


console.log("Ejecutando " + numProcesos + " procesos\n");

inicializarSimulacion();
iniciarSimulacion();

console.log("\nSimulación terminada.");

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
    // Iniciamos en ceros a los contadores y nuestro arreglopara 
    for (let i = 0; i < numProcesos; i++) {
        contadores.push(0);
        terminados.push(false);
    }
}

function iniciarSimulacion() {
    console.log("Iniciando simulación:\n");
    
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
                console.log("Proceso " + proceso.id);
                console.log("Terminado")
            } else if (contador < proceso.codigo.length) {
                // Si no se acabó el proceso, procedemos a escribir la linea de codigo correspondiente del proceso
                console.log("Proceso " + proceso.id);
                console.log("Línea de código: " + proceso.codigo[contador]);
                contadores[i]++;
                
                // Cuando el contador actual tenga el mismo valor que la longitud del objeto correspondiente, se determinara como terminado
                // Y actualizaremos el arreglo de terminados
                if (contadores[i] >= proceso.codigo.length) {
                    terminados[i] = true;
                    procesosTerminados++;
                }
                
                hayProcesosActivos = true;
            }
        }
        // Hacemos un salto de linea para diferenciar cada ciclo
        console.log(""); 
    }
}