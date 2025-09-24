<template>
    <h2> hola chicos</h2>
  <v-row>
    <v-col cols="12" md="4">
      <v-card
        subtitle="This is a card subtitle"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!"
        title="This is a title"
      ></v-card>

      <div class="text-center text-caption">Using Props Only</div>
    </v-col>

    <v-col cols="12" md="4">
      <v-card>
        <template v-slot:title>
          This is a title
        </template>

        <template v-slot:subtitle>
          This is a card subtitle
        </template>

        <template v-slot:text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!
        </template>
      </v-card>

      <div class="text-center text-caption">Using Slots Only</div>
    </v-col>

    <v-col cols="12" md="4">
      <v-card>
        <v-card-item>
          <v-card-title>This is a title</v-card-title>

          <v-card-subtitle>This is a card subtitle</v-card-subtitle>
        </v-card-item>

        <v-card-text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!
        </v-card-text>
      </v-card>

      <div class="text-center text-caption">Using Markup Only</div>
    </v-col>
  </v-row>
  <v-card
    class="mx-auto"
    prepend-icon="$vuetify"
    subtitle="The #1 Vue UI Library"
    width="400"
  >
    <template v-slot:title>
      <span class="font-weight-black">Welcome to Vuetify</span>
    </template>

    <v-card-text class="bg-surface-light pt-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!
    </v-card-text>
  </v-card>
  <app-footer />
</template>