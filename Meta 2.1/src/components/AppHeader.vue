<template>
  <header class="header">
    <div class="container">
      <h1>Bienvenido a Mi Sitio Web</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
.header {
  background-image: url("https://picsum.photos/id/1060/536/354?blur=2");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 100px 20px;
  text-align: center;
  color: #369167;
  width: 100%;
  margin: 0;
}

.header h1 {
  font-size: 60px;
  font-weight: bold;
  margin: 0;
}
</style>