<template>
   <!-- NOTA: SI LA PAGINA APARECE EN BLANCO, SE DEBE RECARGAR LA PAGINA -->
<br></br>
  <v-table class="tabla">
    <thead>
      <tr>
        <th class="text-left">
          Columna 1
        </th>
        <th class="text-left">
          Columna 2
        </th>
        <th class="text-left">
          Columna 3
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in datos"
        :key="item.dato1"
      >
        <td>{{ item.dato1 }}</td>
        <td>{{ item.dato2 }}</td>
        <td>{{ item.dato3 }}</td>
      </tr>
    </tbody>
  </v-table>
  <br></br>
</template>

<script setup>
  const datos = [
    {
      dato1: 'valor 1',
      dato2: 'valor 2',
      dato3: 'valor 3'
    },
    {
      dato1: 'valor 4',
      dato2: 'valor 5',
      dato3: 'valor 6'
    }
  ]
</script>