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

const nombresEstudiantes = estudiantes.map(nombresAlumnos => nombresAlumnos.nombre);
console.log("Nombres de todos los estudiantes: \n", nombresEstudiantes);

const promediosEstudiantes = estudiantes.map(promediosAlumnos => [promediosAlumnos.promedio, promediosAlumnos.nombre]);
console.log("Promedios de todos los estudiantes: \n", promediosEstudiantes);

const calificacionesEscala10 = calificaciones.map(calificaciones => (calificaciones/10));
console.log("Calificaciones en escala de 10: \n", calificacionesEscala10);
