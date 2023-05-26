<script setup lang="ts">
defineProps({
  resource: {
    type: String,
    required: true,
    default: "page"
  }
});
</script>

<template>
  <h1>Oops!</h1>
  <h3>The {{ resource }} you're looking for is not here.</h3>
  <RouterLink id="back" :to="{ name: 'event-list' }"
    ><button>Back to the home page</button></RouterLink
  >
</template>

<style scoped>
a {
  text-decoration: none;
  color: #42b983;
  font-weight: bold;
}
</style>
