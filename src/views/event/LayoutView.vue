<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { EventItem } from "@/types";
import EventService from "@/services/EventService.js";

const router = useRouter();

const props = defineProps({
  id: {
    type: String,
    required: true
  }
});

const event = ref<EventItem>();

onMounted(() => {
  EventService.getEvent(props.id)
    .then(response => {
      event.value = response.data;
    })
    .catch(err => {
      if (err.response && err.response.status == 404) {
        router.push({
          name: "404-resource",
          params: { resource: "event" }
        });
      } else {
        router.push({ name: "network-error" });
      }
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
