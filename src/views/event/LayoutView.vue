<script setup>
import { ref, onMounted } from "vue";
import EventService from "@/services/EventService.js";

const props = defineProps(["id"]);

const event = ref(null);

onMounted(() => {
  EventService.getEvent(props.id)
    .then(response => {
      event.value = response.data;
    })
    .catch(err => {
      console.log(err);
    });
});
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <nav>
      <RouterLink :to="{ name: 'event-details' }"> Details</RouterLink>
      |
      <RouterLink :to="{ name: 'event-register' }"> Register</RouterLink>
      |
      <RouterLink :to="{ name: 'event-edit' }"> Edit</RouterLink>
    </nav>
    <RouterView :event="event" />
  </div>
</template>
