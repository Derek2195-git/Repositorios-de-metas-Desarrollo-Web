<template>
  <div class="text-center pa-4">
    <v-btn size="x-large"
    href="https://getbootstrap.com/docs/5.3/getting-started/introduction/"
    target="_blank"
    variant="flat"
    color="success"
    > Enviar </v-btn>
  </div>
  <v-footer class="text-center d-flex flex-column ga-2 py-4" color="blue-grey-darken-3">
    <div class="text-caption font-weight-regular opacity-60">
      Esta meta es una migración de lo realizado en Vue a Vuetify, con algunos añadidos adicionales.
    </div>
    <div>
      {{ new Date().getFullYear() }} — <strong>2</strong>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
.footer-content {
  text-align: center;
  padding: 1rem 0;
}
</style>