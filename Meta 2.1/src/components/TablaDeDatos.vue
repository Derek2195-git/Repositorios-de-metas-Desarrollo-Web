<template>
  <div class="table-wrapper">
    <table class="table table-bordered table-success">
      <thead>
        <tr>
          <th v-for="(columna, index) in datos.columnas" :key="index" scope="col">
            {{ columna }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(fila, index) in datos.filas" :key="index">
          <td v-for="(valor, cellIndex) in fila" :key="cellIndex">
            {{ valor }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TablaDatos',
  props: {
    datos: {
      type: Object,
      required: true,
      validator: (value) => {
        return value.columnas && value.filas
      }
    }
  }
}
</script>

<style scoped>
.table-wrapper {
  width: 70%;
  margin: 0 auto;
}
</style>