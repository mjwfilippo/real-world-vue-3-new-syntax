<template>
  <div class="networkError">
    <h1>Uh-Oh!</h1>

    <h3>
      It looks like you're experiencing some network issues, please take a a
      breath and click the button to try again.
    </h3>
    <button @click="$router.go(-1)">Back to the home page</button>
  </div>
</template>
