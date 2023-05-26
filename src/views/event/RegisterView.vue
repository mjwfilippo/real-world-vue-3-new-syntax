<script setup lang="ts">
import { useRouter } from "vue-router";
import { useFlashMessageStore } from "../../stores/flashMessage";
import { EventItem } from "@/types";
import { PropType } from "vue";

const props = defineProps({
  event: {
    type: Object as PropType<EventItem>,
    required: true
  }
});
const store = useFlashMessageStore();
const router = useRouter();

const register = () => {
  // Call to API
  // If registered then redirect to event details

  store.setFlashMessage(
    "You are successfully registered for " + props.event.title
  );

  router.push({
    name: "event-details"
  });
};
</script>

<template>
  <p>Register for the event here</p>
  <button @click="register">Register Me</button>
</template>
