<template>
  <v-row justify="center" class="my-6">
    <v-col cols="12" sm="6" md="4" lg="3"> 
      <v-card class="tarjeta-estilo" outlined>
        <v-img 
        src="https://picsum.photos/id/870/536/354?grayscale&blur=2"
        height="200px"
        cover
        ></v-img>
        <v-card-title> Tarjeta 1 </v-card-title>
        <v-card-text>Esta es la descripción de la tarjeta 1. El contenido que se agregue aqui automaticamente se acomodara en la tarjeta.</v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6" md="4" lg="3"> 
      <v-card class="tarjeta-estilo" outlined>
        <v-img 
        src="https://picsum.photos/id/237/200/300"
        height="200px"
        cover
        ></v-img>
        <v-card-title> Tarjeta 2 </v-card-title>
        <v-card-text>Esta es la descripción de la tarjeta 2.</v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: 'tarjetas-fila'
  }
</script>

<style scoped>
.tarjeta-estilo {
  width: 100%;
}
</style>