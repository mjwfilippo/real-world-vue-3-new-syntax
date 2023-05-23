<script setup>
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

<style>
@keyframes greenfade {
  from {
    background: #75db9c;
  }
  to {
    background: transparent;
  }
}

#flashMessage {
  animation: 3s linear greenfade;
}

#layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
h2 {
  font-size: 20px;
}

button {
  align-items: center;
  height: 50px;
  padding: 0 40px;
  background: linear-gradient(to right, #16c0b0, #84cf6a);
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
}
button:hover {
  -webkit-transform: scale(1.02);
  transform: scale(1.02);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
