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


// Ejercicio 4
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
