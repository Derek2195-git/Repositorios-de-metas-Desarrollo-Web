<template>
  <v-card>
    <v-card-title>Buscar Película</v-card-title>
    <v-card-text>
      <v-form @submit.prevent="onSearch">
        <v-text-field
          v-model="query"
          label="Título de la película"
          outlined
          dense
        />
        <v-select
          v-model="type"
          :items="['movie', 'series', 'episode']"
          label="Tipo"
          outlined
          dense
        />
        <v-text-field
          v-model="year"
          label="Año (opcional)"
          outlined
          dense
        />
        <v-row class="mt-3" justify="space-between">
          <v-btn type="submit" color="primary">Buscar</v-btn>
          <v-btn @click="onClear" text>Limpiar</v-btn>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script setup>
    import { ref } from 'vue';
    const emit = defineEmits(['search-movies', 'clear-results']);

    const query = ref('');
    const type = ref('movie');
    const year = ref('');

    const onSearch = () => {
    if (!query.value.trim()) return
      emit('search-movies', { query: query.value, type: type.value, year: year.value });
    }

    const onClear = () => {
    query.value = ''
    type.value = 'movie'
    year.value = ''
    emit('clear-results')
    }
</script>
