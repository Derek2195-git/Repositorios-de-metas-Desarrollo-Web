<template>
  <v-container>
    <!-- Tarjetas -->
    <Tarjeta />

    <!-- Tabla -->
     <TablaDatos />
  </v-container>
  <!-- Botón y pie de página-->
  <AppFooter />
</template>

<script>
import Tarjeta from '@/components/TarjetaConImagen.vue'
import TablaDatos from '@/components/TablaDeDatos.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  components: { Tarjeta, TablaDatos, AppFooter },
}
</script>
