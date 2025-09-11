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
const estudiantesComputacion = estudiantes.filter(compu => compu.carrera == "Computación");

console.log("Estudiantes que son de computación: \n");
console.log(estudiantesComputacion);

const estudiantesDestacados = estudiantes.filter(prom => prom.promedio >= 8.5);

console.log("Estudiantes que tienen un promedio mayor o igual a 8.5\n");
console.log(estudiantesDestacados);

const estudiantesAvanzados = estudiantes.filter(materias => materias.materiasAprobadas > 30);
console.log("Estudiantes que tienen más de 30 materias aprobadas:\n");
console.log(estudiantesAvanzados);


