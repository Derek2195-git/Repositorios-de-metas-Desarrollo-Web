<template>
  <div class="card tarjeta-estilo">
    <img :src="imagen" class="card-img-top" :alt="titulo">
    <div class="card-body">
      <h5 class="card-title">{{ titulo }}</h5>
      <p class="card-text">{{ texto }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tarjeta',
  props: {
    imagen: {
      type: String,
      required: true
    },
    titulo: {
      type: String,
      required: true
    },
    texto: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.tarjeta-estilo {
  width: 18rem;
  margin: 0 auto;
}
</style>