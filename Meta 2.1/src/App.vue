<template>
  <div id="app">
    <AppHeader />
    
    <main class="main-content">
      <div class="cards-container">
        <div class="row justify-content-center">
          <div class="col-auto mb-4" v-for="(tarjeta, index) in tarjetas" :key="index">
            <Tarjeta 
              :imagen="tarjeta.imagen"
              :titulo="tarjeta.titulo"
              :texto="tarjeta.texto"
            />
          </div>
        </div>
      </div>
      
      <div class="table-container">
        <TablaDatos :datos="datosTabla" />
      </div>
      
      <div class="button-container">
        <AppFooter />
      </div>
    </main>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import Tarjeta from './components/TarjetaConImagen.vue'
import TablaDatos from './components/TablaDeDatos.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    Tarjeta,
    TablaDatos
  },
  data() {
    return {
      tarjetas: [
        {
          imagen: "https://picsum.photos/id/870/536/354?grayscale&blur=2",
          titulo: "Tarjeta 1",
          texto: "Esta es la descripción de la tarjeta 1. El contenido que se agregue aqui automaticamente se acomodara en la tarjeta."
        },
        {
          imagen: "https://picsum.photos/id/237/536/354",
          titulo: "Tarjeta 2",
          texto: "Esta es la descripción de la tarjeta 2"
        }
      ],
      datosTabla: {
        columnas: ["Columna 1", "Columna 2", "Columna 3"],
        filas: [
          ["Valor 1", "Valor 2", "Valor 3"],
          ["Valor 4", "Valor 5", "Valor 6"]
        ]
      }
    }
  }
}
</script>

<style>
@import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';

.main-content {
  padding: 2rem 0;
}

.cards-container {
  margin-bottom: 3rem;
}

.table-container {
  margin-bottom: 2rem;
}

.button-container {
  margin-bottom: 2rem;
}

/* Asegurar que el body tenga margen 0 */
body {
  margin: 0;
  padding: 0;
}
</style>