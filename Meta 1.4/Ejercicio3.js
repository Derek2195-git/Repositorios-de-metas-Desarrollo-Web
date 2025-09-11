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
