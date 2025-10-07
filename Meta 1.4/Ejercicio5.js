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
