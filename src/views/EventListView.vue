<script setup>
import { ref, onMounted, computed, watchEffect } from "vue";
import EventService from "@/services/EventService.js";
import EventCard from "@/components/EventCard.vue";

const props = defineProps(["page"]);

const events = ref(null);
const totalEvents = ref(0);

const page = computed(() => props.page);

const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / 2);
  return page.value < totalPages;
});

onMounted(() => {
  watchEffect(() => {
    events.value = null;
    EventService.getEvents(2, props.page)
      .then(response => {
        events.value = response.data;
        totalEvents.value = response.headers["x-total-count"];
      })
      .catch(err => {
        console.log(err);
      });
  });
});
</script>

<template>
  <h1>Events For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />

    <RouterLink
      :to="{ name: 'event-list', query: { page: page - 1 } }"
      rel="prev"
      v-if="page != 1"
      >Prev Page</RouterLink
    >

    <RouterLink
      :to="{ name: 'event-list', query: { page: page + 1 } }"
      rel="next"
      v-if="hasNextPage"
      >Next Page</RouterLink
    >
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
