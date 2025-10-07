<template>
  <v-row>
    <v-col
      v-for="movie in movies"
      :key="movie.imdbID"
      cols="12"
      sm="6"
      md="4"
    >
      <v-card outlined class="cursor-pointer" @click="selectMovie(movie.imdbID)">
        <v-img
          :src="movie.Poster !== 'N/A' ? movie.Poster : placeholder"
          height="320"
        />
        <v-card-title>{{ movie.Title }}</v-card-title>
        <v-card-subtitle>{{ movie.Year }}</v-card-subtitle>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
    const props = defineProps({
    movies: { type: Array, required: true }
    })
    const emit = defineEmits(['select-movie'])
    const placeholder = 'https://via.placeholder.com/300x450?text=No+Image'

    const selectMovie = (id) => {
    emit('select-movie', id)
    }
</script>
