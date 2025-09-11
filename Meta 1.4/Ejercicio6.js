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
