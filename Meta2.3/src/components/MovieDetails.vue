<template>
  <v-dialog v-model="isOpen" max-width="800" persistent>
    <v-card class="pa-4">
      <v-row>
        <v-col cols="12" md="4">
          <v-img
            :src="movie.Poster !== 'N/A' ? movie.Poster : '/placeholder.png'"
            height="400"
          ></v-img>
        </v-col>
        <v-col cols="12" md="8">
          <h2 class="text-h5 mb-2">{{ movie.Title }} ({{ movie.Year }})</h2>
          <p><strong>Director:</strong> {{ movie.Director }}</p>
          <p><strong>Actores:</strong> {{ movie.Actors }}</p>
          <p><strong>Género:</strong> {{ movie.Genre }}</p>
          <p><strong>Duración:</strong> {{ movie.Runtime }}</p>
          <p><strong>Calificación IMDb:</strong> {{ movie.imdbRating }}</p>
          <p><strong>Sinopsis:</strong> {{ movie.Plot }}</p>

          <v-btn color="primary" class="mt-4" @click="$emit('close-details')">
            Cerrar
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script setup>
  import { computed } from 'vue'

  const props = defineProps({
    movie: {
      type: Object,
      required: true
    }
  })

  const isOpen = computed(() => !!props.movie)
</script>
