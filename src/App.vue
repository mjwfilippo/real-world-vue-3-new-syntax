<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { useFlashMessageStore } from "./stores/flashMessage";

const store = useFlashMessageStore();
</script>

<template>
  <div id="layout">
    <div id="flashMessage" v-if="store.$state.flashMessage">
      {{ store.$state.flashMessage }}
    </div>
    <div class="wrapper">
      <nav>
        <RouterLink :to="{ name: 'event-list' }">Events</RouterLink> |
        <RouterLink :to="{ name: 'about' }">About</RouterLink>
      </nav>
    </div>
    <RouterView />
  </div>
</template>
