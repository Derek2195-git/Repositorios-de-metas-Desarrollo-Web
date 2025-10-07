<template>
  <div class="d-flex justify-center my-4">
    <v-progress-circular v-if="loading" indeterminate color="primary" />
  </div>
</template>

<script setup>
    defineProps({
    loading: { type: Boolean, default: false }
    })
</script>
