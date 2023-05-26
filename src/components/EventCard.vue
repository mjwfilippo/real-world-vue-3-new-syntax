<script setup lang="ts">
import { PropType } from "vue";
import { EventItem } from "@/types";

defineProps({
  event: {
    type: Object as PropType<EventItem>,
    required: true
  }
});
</script>

<template>
  <RouterLink
    class="event-link"
    :to="{ name: 'event-details', params: { id: event.id } }"
  >
    <div class="event-card">
      <h2>{{ event.title }}</h2>
      <span>@{{ event.time }} on {{ event.date }}</span>
    </div>
  </RouterLink>
</template>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  transition: all 0.2s ease-in-out;
}
.event-card:hover {
  transform: scale(1.04);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid #5aab79;
}
.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
