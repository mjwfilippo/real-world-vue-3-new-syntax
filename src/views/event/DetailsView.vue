<script setup lang="ts">
import { EventItem } from "@/types";
import { PropType } from "vue";

defineProps({
  event: {
    type: Object as PropType<EventItem>,
    required: true
  }
});
</script>

<template>
  <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
  <p>{{ event.description }}</p>
</template>
