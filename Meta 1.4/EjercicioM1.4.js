// Datos de ejemplo para trabajar en los ejercicios
const estudiantes = [
  { id: 1, nombre: "Ana", carrera: "Ingeniería", promedio: 8.7, materiasAprobadas: 32 },
  { id: 2, nombre: "Luis", carrera: "Computación", promedio: 9.2, materiasAprobadas: 36 },
  { id: 3, nombre: "Marta", carrera: "Computación", promedio: 7.8, materiasAprobadas: 28 },
  { id: 4, nombre: "Pedro", carrera: "Ingeniería", promedio: 8.3, materiasAprobadas: 34 },
  { id: 5, nombre: "Carlos", carrera: "Computación", promedio: 9.5, materiasAprobadas: 38 },
  { id: 6, nombre: "Sofia", carrera: "Matemáticas", promedio: 8.9, materiasAprobadas: 30 }
];

const calificaciones = [85, 92, 78, 90, 65, 88, 72, 95, 81, 79];
/* // Ejercicio 1
const estudiantesComputacion = estudiantes.filter(compu => compu.carrera == "Computación");

console.log("Estudiantes que son de computación: \n");
console.log(estudiantesComputacion);

const estudiantesDestacados = estudiantes.filter(prom => prom.promedio >= 8.5);

console.log("Estudiantes que tienen un promedio mayor o igual a 8.5\n");
console.log(estudiantesDestacados);

const estudiantesAvanzados = estudiantes.filter(materias => materias.materiasAprobadas > 30);
console.log("Estudiantes que tienen más de 30 materias aprobadas:\n");
console.log(estudiantesAvanzados);
*/

/* // Ejercicio 2
const calificaciones = [85, 92, 78, 90, 65, 88, 72, 95, 81, 79];

const nombresEstudiantes = estudiantes.map(nombresAlumnos => nombresAlumnos.nombre);
console.log("Nombres de todos los estudiantes: \n", nombresEstudiantes);

const promediosEstudiantes = estudiantes.map(promediosAlumnos => [promediosAlumnos.promedio, promediosAlumnos.nombre]);
console.log("Promedios de todos los estudiantes: \n", promediosEstudiantes);

const calificacionesEscala10 = calificaciones.map(calificaciones => (calificaciones/10));
console.log("Calificaciones en escala de 10: \n", calificacionesEscala10);

*/

/* // Ejercicio 3
// 3.1. Calcular el promedio general de todos los estudiantes
const promedioGeneral = estudiantes.reduce((suma, estudiantes) => {return suma = (suma + estudiantes.promedio);}, 0) / estudiantes.length;
// Aqui nomas agarramos los primeros dos decimales del promedio
console.log("Promedio general de las calificaciones obtenidas: ", promedioGeneral.toFixed(2));


// 3.2. Contar cuántos estudiantes hay por cada carrera
const estudiantesPorCarrera = estudiantes.reduce((conteo, estudiante) => {
    conteo[estudiante.carrera] = ( conteo[estudiante.carrera] || 0) + 1;
    return conteo;
}, {});

console.log("Estudiantes por carrera: \n", estudiantesPorCarrera);

// 3.3. Encontrar la calificación más alta
const calificacionMaxima = calificaciones.reduce((valor, calificacion) => (valor > calificacion ? valor : calificacion), -Infinity);
console.log("La calificacion mas alta es de: ", calificacionMaxima);
*/

/*// Ejercicio 4
// 4.1. Obtener los nombres de los estudiantes de Computación con promedio mayor a 9.0
const mejoresComputacion = estudiantes
  .filter(estudiante => estudiante.promedio >= 9.0 )
  .map(estudiante => estudiante.nombre);
 console.log("Estudiantes de Computación con promedio mayor a 9.0: \n", mejoresComputacion);
 
 // 4.2. Calcular el promedio de materias aprobadas solo para estudiantes de Ingeniería
const promedioMateriasIngenieria = estudiantes
  .filter(Ingenieros => Ingenieros.carrera == "Ingeniería")
  .reduce((suma, Ingenieros, _, arr) => {return suma + Ingenieros.materiasAprobadas / arr.length;}, 0);
  console.log("El promedio de materias aprobadas de los estudiantes de ingenieria es de: ", promedioMateriasIngenieria);
  
// 4.3. Convertir calificaciones a escala 0-10 y luego filtrar solo las mayores a 8.5
const calificacionesAltas = calificaciones
  .map(calificaciones => (calificaciones/10))
  .filter(calificaciones => calificaciones > 8.5);
console.log("Las calificaciones mayores a 8.5 son de: \n", calificacionesAltas);
*/

/*
// Ejercicio 5
// Crear una función que reciba un array de estudiantes y devuelva un objeto con:
// - promedioGeneral: el promedio de todos los estudiantes
// - porCarrera: objeto con promedios por cada carrera
// - mejorEstudiante: nombre del estudiante con mayor promedio
function generarReporte(estudiantes) {
    // Promedio general
    const promedioGeneral = estudiantes.reduce((suma, estudiante) => suma + estudiante.promedio, 0) / estudiantes.length;
    console.log("El promedio general es de: ", promedioGeneral);
    // Promedios por carrera
    const porCarrera = estudiantes.reduce((acumulador, estudiante, _, arr) =>{
        if(!acumulador[estudiante.carrera]) {
            acumulador[estudiante.carrera] = arr
                .filter(e => e.carrera == estudiante.carrera)
                .reduce((suma, e, _, arrCarrera) => suma + e.promedio / arrCarrera.length, 0);
        }
        return acumulador
    }, {});
    console.log("Los promedios de cada carrera son de: \n ", porCarrera)
    // Mejor estudiante
    const mejorEstudiante = estudiantes.reduce((mejor, estudiante) => mejor.promedio > estudiante.promedio ? mejor : estudiante).nombre;
    console.log("El estudiante con el mejor promedio es: ", mejorEstudiante)
}
generarReporte(estudiantes);
*/
/*
// Ejercicio 6
// 6.1. Implementar la función de orden superior procesarDatos
function procesarDatos(arreglo, ...operaciones) {
    // a lo que entendi de aqui, la parte de ...operaciones significa que podremos meter mas de un argumento y al final volvera estos argumentos en un arreglo
    return operaciones.reduce((resultado, operacion) => operacion(resultado), arreglo);
}
// Esto me costo entender pero es una forma de hacer, como podemos observar hay más de una llave, lo que pasa aqui 
// es que cree dos funciones de orden superior, una guardará el dato que vamos a obtener, mientras que la otra va a recibir
// el arreglo de los estudiantes, y seguido de esto usaremos el filter o el map para quedarnos solo con los datos que queramos
const filtrarPorCarrera = carrera => arreglo => 
        arreglo.filter(estudiante => estudiante.carrera == carrera);
const filtrarPorPromedio = minimo => arreglo => 
        arreglo.filter(estudiante => estudiante.promedio >= minimo);
const mapearNombrePromedio = arreglo => 
        arreglo.map(estudiante => ({Nombre: estudiante.nombre, Promedio: estudiante.promedio}));

// 6.2. Usar la función procesarDatos con las operaciones definidas
const resultadoComputacion = procesarDatos(
  estudiantes,
  filtrarPorCarrera("Computación"),
  filtrarPorPromedio(8.0),
  mapearNombrePromedio
);

procesarDatos();
console.log("Los estudiantes de Computación que tienen promedio mayor o igual a 8.0 son:\n", resultadoComputacion);
*/