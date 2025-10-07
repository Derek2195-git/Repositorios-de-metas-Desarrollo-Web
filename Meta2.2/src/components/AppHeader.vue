<template>
  <v-sheet
    height="150px"
    class="d-flex align-center justify-center"
    :style="{
      backgroundImage: 'url(https://picsum.photos/id/1060/536/354?blur=2)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }"
  >
    <v-container class="text-center">
      <h1 class="text-h2 font-weight-bold" style="color: #369167;">
        Bienvenido a Mi Sitio Web
      </h1>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>